"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, ArrowLeft, Heart } from "lucide-react"

export default function GhostPage() {
  const [ghostPosition, setGhostPosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Ghost floating animation
    const interval = setInterval(() => {
      setGhostPosition((prev) => ({
        x: 45 + Math.sin(Date.now() / 2000) * 10,
        y: 45 + Math.cos(Date.now() / 3000) * 5,
      }))
    }, 100)

    // Mouse tracking for ghost eyes
    const handleMouseMove = (e) => {
      const rect = document.documentElement.getBoundingClientRect()
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const x = (e.clientX - centerX) / centerX
      const y = (e.clientY - centerY) / centerY
      setEyePosition({ x: x * 3, y: y * 3 })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      clearInterval(interval)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const FloatingSpirit = ({ delay, size, opacity }) => (
    <div
      className={`absolute rounded-full bg-white ${opacity} blur-sm`}
      style={{
        width: size,
        height: size,
        animation: `spirit-float 4s ease-in-out infinite ${delay}`,
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
      }}
    />
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black relative overflow-hidden">
      {/* Floating Spirits */}
      <FloatingSpirit delay="0s" size="20px" opacity="opacity-20" />
      <FloatingSpirit delay="1s" size="15px" opacity="opacity-30" />
      <FloatingSpirit delay="2s" size="25px" opacity="opacity-15" />
      <FloatingSpirit delay="3s" size="18px" opacity="opacity-25" />
      <FloatingSpirit delay="4s" size="12px" opacity="opacity-35" />

      {/* Spooky Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Ghost Character */}
      <div
        className="absolute transition-all duration-1000 ease-in-out"
        style={{
          left: `${ghostPosition.x}%`,
          top: `${ghostPosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`relative cursor-pointer transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Ghost Body */}
          <div className="relative">
            <div className="w-32 h-40 bg-gradient-to-b from-white to-gray-200 rounded-t-full relative overflow-hidden">
              {/* Ghost Face */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                {/* Eyes */}
                <div className="flex space-x-4 mb-4">
                  <div className="relative w-6 h-6 bg-black rounded-full">
                    <div
                      className="absolute w-2 h-2 bg-white rounded-full transition-all duration-200"
                      style={{
                        left: `${50 + eyePosition.x}%`,
                        top: `${50 + eyePosition.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="relative w-6 h-6 bg-black rounded-full">
                    <div
                      className="absolute w-2 h-2 bg-white rounded-full transition-all duration-200"
                      style={{
                        left: `${50 + eyePosition.x}%`,
                        top: `${50 + eyePosition.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                </div>
                {/* Mouth */}
                <div
                  className={`w-4 h-6 bg-black rounded-full transition-all duration-300 ${
                    isHovered ? "scale-150" : "scale-100"
                  }`}
                />
              </div>

              {/* Ghost Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 to-purple-200/30 rounded-t-full animate-pulse" />
            </div>

            {/* Ghost Bottom Wavy Part */}
            <div className="relative -mt-1">
              <svg width="128" height="20" viewBox="0 0 128 20" className="text-white">
                <path
                  d="M0,0 Q16,20 32,0 Q48,20 64,0 Q80,20 96,0 Q112,20 128,0 L128,20 L0,20 Z"
                  fill="currentColor"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main Content */}
        <div className="text-center mb-12">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-4 animate-pulse">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Boo! Page Not Found</h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-delay">
            Our friendly ghost couldn't find the page you're looking for. It might have vanished into the spirit realm,
            but don't worry - we'll help you find your way back!
          </p>
        </div>

        {/* Spooky Stats */}
        <div className="bg-black/50 backdrop-blur border border-purple-500 rounded-2xl p-6 mb-8 max-w-md w-full animate-fade-in-delay-2">
          <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">👻 Ghost Report</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Spookiness Level:</span>
              <span className="text-purple-400 font-semibold">Friendly 👻</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Page Status:</span>
              <span className="text-red-400 font-semibold">Vanished</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Last Seen:</span>
              <span className="text-blue-400 font-semibold">Unknown</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Rescue Available:</span>
              <span className="text-green-400 font-semibold flex items-center">
                Yes <Heart className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-delay-3">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center">
              <Home className="w-5 h-5 mr-2" />
              Return to Safety
            </div>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-xl transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-105"
          >
            Escape This Realm
          </button>
        </div>

        {/* Back Link */}
        <Link
          href="/"
          className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 animate-fade-in-delay-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gallery
        </Link>
      </div>

      <style jsx>{`
        @keyframes spirit-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.4; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s both;
        }
      `}</style>
    </div>
  )
}
