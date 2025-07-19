"use client"

import Link from "next/link"
import { ArrowRight, Code, Download, Eye, Github, Star, Users } from "lucide-react"
import Footer from "./components/Footer"
import { useState } from "react"
import { trackEvent } from './utils/analytics'

// Import your actual components here
import SocialIconsCircle from "./components/[id]/components/SocialIcons/SocialIconsCircle"
import SocialIconsMarquee from "./components/[id]/components/SocialIcons/SocialIconsMarquee"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleBrowseClick = () => {
    trackEvent('Navigation', 'Click', 'Browse Components Button')
  }

  const handleDocsClick = () => {
    trackEvent('Navigation', 'Click', 'View Documentation Button')
  }

  const stats = [
    { label: "Components", value: "2+", icon: Code },
    { label: "Downloads", value: "1K", icon: Download },
    { label: "Stars", value: "156", icon: Star },
    { label: "Users", value: "89", icon: Users },
  ]

  const featuredComponents = [
    {
      id: "socialiconscircle",
      name: "Social Icons Circle",
      description: "A spinning circle of social icons with hover effects",
      category: "Social / Animation",
      previewImage: "/previews/social-circle-preview.png",
    },
    {
      id: "socialiconsmarquee",
      name: "Social Icons Marquee",
      description: "A horizontally scrolling marquee of social icons",
      category: "Social / Animation",
      previewImage: "/previews/social-marquee-preview.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="ComponentOps Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-lg sm:text-xl font-bold text-white">ComponentOps</span>
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/components" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                Components
              </Link>
              <Link href="/docs" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="/about" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link
                href="https://github.com/Anuja-jayasinghe"
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
                <Link href="/components" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">
                  Components
                </Link>
                <Link href="/docs" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">
                  Documentation
                </Link>
                <Link href="/about" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">
                  About
                </Link>
                <Link
                  href="https://github.com/Anuja-jayasinghe"
                  className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Build Faster with
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
                Reusable Components
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Discover, preview, and integrate beautiful React components into your projects. Save time and build
              consistent UIs with our growing collection of production-ready components.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
              <Link
                href="/components"
                onClick={handleBrowseClick}
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Browse Components
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/docs"
                onClick={handleDocsClick}
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-600 text-gray-300 text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-200 w-full sm:w-auto"
              >
                <Eye className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                View Documentation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Featured Components</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Start with these popular components and build amazing user interfaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {featuredComponents.map((component) => (
              <Link key={component.id} href={`/components/${component.id}`} className="group block">
                <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-200 hover:shadow-xl">
                  <div className="aspect-video bg-gray-700 relative overflow-hidden">
                    {component.previewImage ? (
                      <img
                        src={component.previewImage}
                        alt={`${component.name} preview`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <img
                          src="/gradient.svg"
                          alt="Preview Background"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="relative z-10 text-center">
                          <div className="text-xl sm:text-2xl font-bold text-white/10">{component.name}</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {component.name}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full w-fit">
                        {component.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">{component.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/components"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-600 text-sm sm:text-base text-gray-300 font-medium rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
            >
              View All Components
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Ready to accelerate your development?</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
            Join developers who are building faster with our component library
          </p>
          <Link
            href="/components"
            className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-sm sm:text-base text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <p className="mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm">
            Created with ❤️ by <a href="https://anujajay.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Anuja Jayasinghe</a>
          </p>
        </div>
      </section>

      <Footer size="large" />
    </div>
  )
}
