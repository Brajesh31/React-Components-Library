"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { useState } from "react"

export default function Header({ activePage = "" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-gray-800 bg-gray-900/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="ComponentOps Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">ComponentOps</span>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/components" 
              className={`${activePage === "components" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-white"} transition-colors`}
            >
              Components
            </Link>
            <Link 
              href="/docs" 
              className={`${activePage === "docs" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-white"} transition-colors`}
            >
              Documentation
            </Link>
            <Link 
              href="/about" 
              className={`${activePage === "about" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-white"} transition-colors`}
            >
              About
            </Link>
            <Link
              href="https://github.com/Brajesh31"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/components" 
                className={`block px-3 py-2 rounded-md ${activePage === "components" ? "text-blue-400 font-medium bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-800"}`}
              >
                Components
              </Link>
              <Link 
                href="/docs" 
                className={`block px-3 py-2 rounded-md ${activePage === "docs" ? "text-blue-400 font-medium bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-800"}`}
              >
                Documentation
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-2 rounded-md ${activePage === "about" ? "text-blue-400 font-medium bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-800"}`}
              >
                About
              </Link>
              <Link
                href="https://github.com/Brajesh31"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                target="_blank"
              >
                <div className="flex items-center">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 