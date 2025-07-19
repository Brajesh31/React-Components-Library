"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Rocket, ArrowLeft } from "lucide-react"

export default function SpacePage() {
  const [rocketPosition, setRocketPosition] = useState({ x: 50, y: 50 })
  const [stars, setStars] = useState([])

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          twinkleDelay: Math.random() * 5,
        })
      }
      setStars(newStars)
    }

    generateStars()

    // Rocket floating animation
    const interval = setInterval(() => {
      setRocketPosition((prev) => ({
        x: prev.x + (Math.random() - 0.5) * 2,
        y: prev.y + (Math.random() - 0.5) * 2,
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const Planet = ({ size, color, distance, speed, delay }) => (
    <div
      className="absolute rounded-full opacity-60"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${color}, ${color}dd)`,
        animation: `orbit ${speed}s linear infinite`,
        animationDelay: delay,
        transformOrigin: `${distance}px ${distance}px`,
      }}
    />
  )

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Stars Background */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.twinkleDelay}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Planets */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Planet size="60px" color="#ff6b6b" distance="200" speed="20" delay="0s" />
        <Planet size="40px" color="#4ecdc4" distance="300" speed="30" delay="5s" />
        <Planet size="80px" color="#45b7d1" distance="400" speed="40" delay="10s" />
        <Planet size="30px" color="#f9ca24" distance="150" speed="15" delay="7s" />
      </div>

      {/* Floating Rocket */}
      <div
        className="absolute transition-all duration-2000 ease-in-out"
        style={{
          left: `${rocketPosition.x}%`,
          top: `${rocketPosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative">
          <Rocket className="w-16 h-16 text-gray-400 transform rotate-45 animate-bounce" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-70 animate-pulse"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-12">
          {/* 404 with Earth */}
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 mb-4">
              4
            </h1>
            <div className="inline-block relative mx-4">
              <div
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 relative overflow-hidden"
                style={{ animation: "rotate 10s linear infinite" }}
              >
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-400 to-blue-500 opacity-80"></div>
                <div className="absolute top-4 left-4 w-3 h-3 bg-green-600 rounded-full"></div>
                <div className="absolute bottom-6 right-6 w-4 h-4 bg-green-700 rounded-full"></div>
                <div className="absolute top-8 right-4 w-2 h-2 bg-brown-600 rounded-full"></div>
              </div>
            </div>
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 mb-4">
              4
            </h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Lost in the Cosmos</h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-delay">
            Houston, we have a problem! The page you're looking for has drifted into deep space. Let's navigate you back
            to Earth.
          </p>
        </div>

        {/* Mission Control Panel */}
        <div className="bg-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-8 mb-8 max-w-md w-full animate-fade-in-delay-2">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Mission Control</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Status:</span>
              <span className="text-red-400 font-semibold">Page Not Found</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Location:</span>
              <span className="text-blue-400 font-semibold">Unknown Sector</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Rescue Mission:</span>
              <span className="text-green-400 font-semibold">Ready</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-delay-3">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center">
              <Home className="w-5 h-5 mr-2" />
              Return to Earth
            </div>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
          >
            <div className="flex items-center">
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Launch Rescue
            </div>
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
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(var(--distance)) rotate(0deg); }
          to { transform: rotate(360deg) translateX(var(--distance)) rotate(-360deg); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
