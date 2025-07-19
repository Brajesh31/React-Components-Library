import "./globals.css"
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initGA, trackPageView } from './utils/analytics'

export const metadata = {
  title: "ComponentOps - React Component Library",
  description: "Discover, preview, and integrate beautiful React components into your projects.",
}

// Initialize Google Analytics with your measurement ID
const GA_MEASUREMENT_ID = 'G-1XH05LC05N'

export default function RootLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize GA
    initGA(GA_MEASUREMENT_ID)
  }, [])

  useEffect(() => {
    // Track page views
    if (pathname) {
      trackPageView(pathname)
    }
  }, [pathname])

  return (
    <html lang="en">
      <body className="bg-gray-900 text-white antialiased">{children}</body>
    </html>
  )
}
