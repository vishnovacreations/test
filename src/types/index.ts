// Core Types and Interfaces
export interface TeamMember {
  id: string
  name: string
  role: string
  title: string
  description: string
  specialties: string[]
  image: string
  experience: string
  projects: string
  rating: number
  socialLinks: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export interface Service {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  category: 'web' | 'marketing' | 'ai'
  features: string[]
  popular: boolean
  price: string
  duration: string
  rating: number
  projects: string
  image?: string
}

export interface Project {
  id: number
  title: string
  description: string
  category: 'web' | 'design' | 'mobile'
  year: string
  technologies: string[]
  image: string
  github: string
  demo: string
  featured: boolean
  stats?: {
    satisfaction: string
    speed: string
    seo: string
  }
  client: string
  duration: string
  team: string
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  monthlyPrice: number
  annualPrice: number
  features: string[]
  unavailableFeatures: string[]
  popular: boolean
  color: 'blue' | 'purple' | 'green'
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  image: string
  readTime: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}

export interface NavigationItem {
  name: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export interface CompanyStats {
  label: string
  value: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export interface AnimationHook {
  ref: React.RefObject<HTMLElement>
  isVisible: boolean
}

export interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fallback?: React.ReactNode
  loading?: 'lazy' | 'eager'
  onError?: () => void
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  className?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'small' | 'medium' | 'large' | 'xlarge'
  shadow?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl'
}

export interface SectionProps {
  children: React.ReactNode
  className?: string
  padding?: 'small' | 'medium' | 'large' | 'xlarge'
  background?: 'white' | 'gray' | 'blue' | 'gradient'
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Form Types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: {
    minLength?: number
    maxLength?: number
    pattern?: string
    message?: string
  }
}

export interface FormState {
  values: Record<string, any>
  errors: Record<string, string>
  touched: Record<string, boolean>
  isSubmitting: boolean
  isValid: boolean
}

// Theme Types
export interface Theme {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
  }
  typography: {
    fontFamily: string
    fontSize: Record<string, string>
    fontWeight: Record<string, string>
    lineHeight: Record<string, string>
  }
  spacing: Record<string, string>
  borderRadius: Record<string, string>
  shadows: Record<string, string>
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Component Props with Common Attributes
export interface BaseComponentProps {
  className?: string
  id?: string
  'data-testid'?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

// Animation Types
export interface AnimationConfig {
  duration: number
  delay: number
  easing: string
  direction: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
  fillMode: 'none' | 'forwards' | 'backwards' | 'both'
}

export interface ScrollAnimationOptions {
  threshold: number
  rootMargin: string
  triggerOnce: boolean
}

// Error Types
export interface AppError {
  code: string
  message: string
  details?: any
  timestamp: Date
  stack?: string
}

export interface ValidationError {
  field: string
  message: string
  code: string
}

// Loading States
export interface LoadingState {
  isLoading: boolean
  error: string | null
  data: any
}

// Search and Filter Types
export interface SearchFilters {
  query: string
  category: string
  tags: string[]
  dateRange: {
    start: Date
    end: Date
  }
  sortBy: string
  sortOrder: 'asc' | 'desc'
}

export interface SearchResult<T> {
  items: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}
