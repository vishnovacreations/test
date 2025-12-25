import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAVIGATION_ITEMS, ROUTES } from '../constants/routes'

// Logo paths constant
const LOGO_PATHS = [
  '/logo.jpg',
  '/logo.png',
  '/logo.webp',
  '/images/logo.jpg',
  '/images/logo.png',
] as const

// Logo component with error handling and fallback
const Logo: React.FC = React.memo(() => {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPathIndex, setCurrentPathIndex] = useState(0)
  const imgRef = useRef<HTMLImageElement>(null)

  // Set fetchpriority when image source changes
  useEffect(() => {
    if (imgRef.current && !imageError) {
      imgRef.current.setAttribute('fetchpriority', 'high')
    }
  }, [currentPathIndex, imageError])

  const handleImageLoad = useCallback(() => {
    setIsLoading(false)
    setImageError(false)
  }, [])

  const handleImageError = useCallback(() => {
    // Try next path if available
    if (currentPathIndex < LOGO_PATHS.length - 1) {
      const nextIndex = currentPathIndex + 1
      setCurrentPathIndex(nextIndex)
      setIsLoading(true)
      setImageError(false)
    } else {
      // All paths failed, show fallback
      setImageError(true)
      setIsLoading(false)
    }
  }, [currentPathIndex])

  return (
    <Link 
      to={ROUTES.HOME} 
      className="flex items-center group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-all duration-300"
      aria-label="Vishnova Creations - Home"
    >
      <div className="relative flex items-center min-w-[48px] min-h-[40px] sm:min-h-[48px]">
        {isLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {imageError ? (
          // Fallback logo with gradient
          <div className="h-10 sm:h-12 w-10 sm:w-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 flex-shrink-0">
            <span className="text-white font-bold text-lg sm:text-xl">V</span>
          </div>
        ) : (
          <img
            ref={imgRef}
            src={LOGO_PATHS[currentPathIndex]}
            alt="Vishnova Creations Logo"
            className={`h-10 sm:h-12 w-auto max-w-[200px] object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-lg flex-shrink-0 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="eager"
            height="48"
            decoding="async"
            style={{ width: 'auto', maxHeight: '48px' }}
          />
        )}
      </div>
      <span className="ml-2 sm:ml-3 md:ml-4 text-sm sm:text-base md:text-lg lg:text-xl font-extrabold whitespace-nowrap transition-all duration-500">
        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-blue-600 group-hover:drop-shadow-md tracking-tight sm:tracking-normal">
          VISHNOVA CREATIONS
        </span>
      </span>
    </Link>
  )
})

Logo.displayName = 'Logo'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname])
  
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])
  
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Professional Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${
                    isActive(item.href)
                      ? 'nav-link-active'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="ml-4">
                <Link
                  to={ROUTES.CONTACT}
                  className="btn-primary neon-glow hover:animate-neon-pulse transform hover:scale-105 hover:-translate-y-1"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>

          {/* Professional Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300 transform hover:scale-110"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              type="button"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Professional Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-navigation">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-gray-200/50">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.href)
                      ? 'bg-blue-100 text-blue-700 shadow-md'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to={ROUTES.CONTACT}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  onClick={closeMenu}
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header