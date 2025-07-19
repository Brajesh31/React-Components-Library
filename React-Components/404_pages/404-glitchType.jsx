"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, RefreshCw, ArrowLeft } from "lucide-react"

export default function GlitchPage() {
  const [glitchText, setGlitchText] = useState("404")
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
  const originalText = "404"

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)

      // Glitch effect
      let iterations = 0
      const glitchInterval = setInterval(() => {
        setGlitchText(
          originalText
            .split("")
            .map((char, index) => {
              if (index < iterations) {
                return originalText[index]
              }
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            })
            .join(""),
        )

        if (iterations >= originalText.length) {
          clearInterval(glitchInterval)
          setGlitchText(originalText)
          setIsGlitching(false)
        }

        iterations += 1 / 3
      }, 50)

      return () => clearInterval(glitchInterval)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Glitch Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
            style={{
              top: `${20 + i * 15}%`,
              animation: `glitch-line ${2 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main 404 Text */}
        <div className="text-center mb-8">
          <h1
            className={`text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 ${
              isGlitching ? "animate-pulse" : ""
            }`}
            style={{
              textShadow: isGlitching ? "0 0 20px rgba(0, 255, 255, 0.5)" : "none",
              filter: isGlitching ? "blur(1px)" : "none",
            }}
          >
            {glitchText}
          </h1>

          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 glitch-text">PAGE NOT FOUND</h2>
            <div className="absolute inset-0 text-2xl md:text-3xl font-semibold text-cyan-400 opacity-70 glitch-text-shadow">
              PAGE NOT FOUND
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl mb-12 leading-relaxed">
          The page you're looking for has been <span className="text-cyan-400 font-semibold">corrupted</span> or{" "}
          <span className="text-purple-400 font-semibold">deleted</span> from the system.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </div>
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="group relative px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-cyan-500 hover:text-black"
          >
            <div className="relative flex items-center">
              <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              Retry
            </div>
          </button>
        </div>

        {/* Back Link */}
        <Link href="/" className="mt-8 flex items-center text-gray-400 hover:text-white transition-colors duration-200">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gallery
        </Link>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes glitch-line {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .glitch-text {
          animation: glitch 2s infinite;
        }

        .glitch-text-shadow {
          animation: glitch-shadow 2s infinite;
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-shadow {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
        }
      `}</style>
    </div>
  )
}
