import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ComponentOps | Components Library',
  description: 'A collection of beautiful and interactive social media components for React applications, featuring rotating circles and scrolling marquees.',
  generator: 'ComponentOps',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
