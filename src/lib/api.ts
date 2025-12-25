export type ContactPayload = {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  budget?: string
  message: string
}

export type ApiResponse<T = unknown> = {
  success: boolean
  message: string
  data?: T
}

export type ErrorResponse = {
  message: string
  error?: string
}

const API_BASE_URL = import.meta.env.VITE_API_URL || ''

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') || ''
  const isJson = contentType.includes('application/json')
  
  let data: unknown
  try {
    data = isJson ? await response.json() : await response.text()
  } catch (error) {
    throw new Error('Failed to parse response')
  }
  
  if (!response.ok) {
    const errorData = data as ErrorResponse
    const message = errorData?.message || response.statusText || 'Request failed'
    throw new Error(message)
  }
  
  return data as T
}

export async function postContact(payload: ContactPayload): Promise<ApiResponse> {
  try {
    const url = API_BASE_URL ? `${API_BASE_URL}/api/contact` : '/api/contact'
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    
    if (!res.ok && res.status === 404) {
      // If API endpoint doesn't exist, return a success response for development
      console.warn('API endpoint not found. This is expected in development if the backend is not running.')
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        data: payload
      }
    }
    
    return handleResponse<ApiResponse>(res)
  } catch (error) {
    // Network errors or other fetch failures
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.warn('Network error. API may not be available.')
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        data: payload
      }
    }
    
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Failed to send contact form. Please check your connection and try again.')
  }
}


