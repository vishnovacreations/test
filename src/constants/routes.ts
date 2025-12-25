// Route constants for type safety and maintainability
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  WORK: '/work',
  GALLERY: '/gallery',
  CONTACT: '/contact',
} as const

export type Route = typeof ROUTES[keyof typeof ROUTES]

// Navigation items with type safety
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'About', href: ROUTES.ABOUT },
  { name: 'Services', href: ROUTES.SERVICES },
  { name: 'Work', href: ROUTES.WORK },
  { name: 'Gallery', href: ROUTES.GALLERY },
  { name: 'Contact', href: ROUTES.CONTACT },
] as const

