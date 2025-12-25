import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import { ROUTES } from './constants/routes'

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <ErrorBoundary>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="min-h-screen bg-gray-50 transform-style-3d">
          <Header />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.SERVICES} element={<Services />} />
                <Route path={ROUTES.WORK} element={<Work />} />
                <Route path={ROUTES.GALLERY} element={<Gallery />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App