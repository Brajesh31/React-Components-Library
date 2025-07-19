import Link from "next/link"
import { Code, Download, Zap } from "lucide-react"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header activePage="docs" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Documentation</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Learn how to use and integrate our social media components into your projects
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* Getting Started */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-400" />
              Getting Started
            </h2>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Start</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                Our social media components are designed to be copy-and-paste friendly. Choose between the rotating circle
                or scrolling marquee style to showcase your social media links.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-300">
                <li>
                  Browse the{" "}
                  <Link href="/components" className="text-blue-400 hover:text-blue-300">
                    component library
                  </Link>
                </li>
                <li>Choose between SocialIconsCircle or SocialIconsMarquee</li>
                <li>Copy the component code from the "Code" tab</li>
                <li>Paste it into your project</li>
                <li>Customize your social media links</li>
              </ol>
            </div>
          </section>

          {/* Installation */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-400" />
              Installation
            </h2>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Prerequisites</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                Our components are built with React and styled with Tailwind CSS. Make sure you have these installed in
                your project:
              </p>
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                <code className="text-sm sm:text-base text-green-400">npm install tailwindcss @tailwindcss</code>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                All components are framework-agnostic and work with any React setup including Next.js, Create React App,
                Vite, and more.
              </p>
            </div>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-400" />
              Usage
            </h2>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Component Options</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">We offer two social media component styles:</p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                <li>
                  <strong>SocialIconsCircle:</strong> A rotating circle of social media icons with hover effects
                </li>
                <li>
                  <strong>SocialIconsMarquee:</strong> A horizontally scrolling marquee with centered highlight effects
                </li>
              </ul>

              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Example - Circle Style</h3>
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <pre className="text-xs sm:text-sm text-gray-300">
                  {`// 1. Copy the component code
import SocialIconsCircle from './components/SocialIconsCircle'

// 2. Use it in your JSX
function App() {
  return (
    <div>
      <SocialIconsCircle />
    </div>
  )
}

// The component will automatically:
// - Display social media icons in a rotating circle
// - Show color effects on hover
// - Handle smooth animations and transitions`}
                </pre>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Example - Marquee Style</h3>
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4">
                <pre className="text-xs sm:text-sm text-gray-300">
                  {`// 1. Copy the component code
import SocialIconsMarquee from './components/SocialIconsMarquee'

// 2. Use it in your JSX
function App() {
  return (
    <div>
      <SocialIconsMarquee />
    </div>
  )
}

// The component will automatically:
// - Create an infinite scrolling marquee
// - Highlight icons when centered
// - Show color effects on hover`}
                </pre>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Customization</h2>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Social Links</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                Customize the social media links by modifying the socialLinks array:
              </p>
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <pre className="text-xs sm:text-sm text-gray-300">
                  {`const socialLinks = [
  {
    href: "https://github.com/Brajesh31",
    label: "GitHub",
    blackIcon: "/path/to/black-icon.svg",
    whiteIcon: "/path/to/white-icon.svg",
    colorIcon: "/path/to/color-icon.svg",
    angle: 0, // Only for circle component
  },
  // Add more social links...
]`}
                </pre>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Styling</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                Both components use Tailwind CSS classes and can be customized:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
                <li>Adjust the size of icons using the w-* and h-* classes</li>
                <li>Modify animation speeds by changing the duration values</li>
                <li>Customize the gap between icons in the marquee</li>
                <li>Adjust the circle radius for the rotating component</li>
              </ul>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Best Practices</h2>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
                <li>
                  <strong className="text-white">Optimize your icons:</strong> Use SVG icons for best quality and
                  performance.
                </li>
                <li>
                  <strong className="text-white">Provide fallbacks:</strong> Include both black and colored versions of
                  icons for smooth transitions.
                </li>
                <li>
                  <strong className="text-white">Accessibility:</strong> Always include proper aria-labels and ensure
                  keyboard navigation works.
                </li>
                <li>
                  <strong className="text-white">Performance:</strong> Consider lazy loading for the marquee component
                  if it's below the fold.
                </li>
                <li>
                  <strong className="text-white">Mobile optimization:</strong> Test the components on various screen
                  sizes and adjust accordingly.
                </li>
              </ul>
            </div>
          </section>

          {/* Support */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Support</h2>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Need help with the social media components?</p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                <li>• Check the component documentation and examples</li>
                <li>• Review the socialLinks configuration options</li>
                <li>• Look at the animation and styling customization options</li>
                <li>• Open an issue on GitHub for bugs or feature requests</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer size="small" />
    </div>
  )
}
