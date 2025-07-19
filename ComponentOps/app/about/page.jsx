"use client"

import Link from "next/link"
import { Code, Heart, Users, Zap } from "lucide-react"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header activePage="about" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">About ComponentOps</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            We're building the future of React development with beautiful, reusable components that help developers
            build faster and more consistently.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 sm:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mr-3" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We believe that great user interfaces shouldn't require reinventing the wheel. Our mission is to provide
              developers with a comprehensive library of beautiful, accessible, and customizable React components that
              accelerate development while maintaining high quality standards.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-3" />
                <h3 className="text-base sm:text-lg font-semibold text-white">Speed</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                We prioritize developer velocity. Our components are designed to be copy-and-paste ready, allowing you
                to build UIs faster than ever.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-3" />
                <h3 className="text-base sm:text-lg font-semibold text-white">Accessibility</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                Every component is built with accessibility in mind, ensuring your applications are usable by everyone,
                regardless of their abilities.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3" />
                <h3 className="text-base sm:text-lg font-semibold text-white">Quality</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                We maintain high code quality standards with clean, readable code that follows React best practices and
                modern development patterns.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Our Story</h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
              <p>
                ComponentOps started as a personal project to solve a common problem: the repetitive nature of building
                UI components from scratch for every new project.
              </p>
              <p>
                As developers, we found ourselves constantly recreating the same buttons, cards, forms, and other
                interface elements. Each time, we had to ensure they were accessible, responsive, and followed design
                best practices.
              </p>
              <p>
                We realized that by creating a curated collection of high-quality, reusable components, we could help
                the entire React community build better applications faster. That's how ComponentOps was born.
              </p>
              <p>
                Today, we're committed to growing this library and helping developers worldwide create amazing user
                experiences with less effort and more consistency.
              </p>
            </div>
          </div>
        </section>

        {/* Future */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/20 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">What's Next</h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
              <p>
                We're constantly working to expand our component library and improve the developer experience. Here's
                what we're working on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>More complex components like data tables, calendars, and charts</li>
                <li>Theme customization tools</li>
                <li>Component composition guides</li>
                <li>Integration with popular design systems</li>
                <li>Community contributions and component submissions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to build something amazing?</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Start exploring our component library and see how it can accelerate your development.
            </p>
            <Link
              href="/components"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm sm:text-base"
            >
              Browse Components
            </Link>
          </div>
        </section>
      </div>
      <Footer size="small" />
    </div>
  )
}
