import React from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_INFO } from '../constants/contact'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="ml-2 text-xl font-bold">
                VISHNOVA CREATIONS
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              At the core of innovation.
            </p>
            <p className="text-gray-400 text-sm">
              At VISHNOVA CREATIONS, we power digital growth from the core-combining deep technical expertise, 
              strategic precision, and innovative thinking to deliver solutions that drive businesses forward. 
              In partnership with P Tech Consulting, we offer comprehensive IT and digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-300 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                Email: <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white underline underline-offset-2 transition-colors">{CONTACT_INFO.email}</a>
              </p>
              <p>
                Phone: <a href={CONTACT_INFO.phoneHref} className="hover:text-white underline underline-offset-2 transition-colors">{CONTACT_INFO.phone}</a>
              </p>
              <p>Location: {CONTACT_INFO.location}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2 text-white">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/vishwa-teja-3a78a0283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Vishwa0129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {CONTACT_INFO.companyName}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
