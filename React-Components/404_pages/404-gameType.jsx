"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, ArrowLeft, Play } from "lucide-react"

export default function GamePage() {
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [coins, setCoins] = useState([])

  useEffect(() => {
    // Generate floating coins
    const generateCoins = () => {
      const newCoins = []
      for (let i = 0; i < 8; i++) {
        newCoins.push({
          id: i,
          x: Math.random() * 80 + 10,
          y: Math.random() * 60 + 20,
          collected: false,
        })
      }
      setCoins(newCoins)
    }

    generateCoins()
  }, [])

  const collectCoin = (coinId) => {
    setCoins((prev) => prev.map((coin) => (coin.id === coinId ? { ...coin, collected: true } : coin)))
    setScore((prev) => prev + 100)
  }

  const PixelButton = ({ children, onClick, variant = "primary" }) => {
    const baseClasses =
      "px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-200 transform hover:scale-105 active:scale-95"
    const variants = {
      primary: "bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg hover:shadow-yellow-500/25",
      secondary: "bg-blue-500 text-white hover:bg-blue-400 shadow-lg hover:shadow-blue-500/25",
    }

    return (
      <button
        className={`${baseClasses} ${variants[variant]}`}
        onClick={onClick}
        style={{
          clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
        }}
      >
        {children}
      </button>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Pixel Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Floating Coins */}
      {coins.map((coin) => (
        <div
          key={coin.id}
          className={`absolute cursor-pointer transition-all duration-300 ${
            coin.collected ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
          style={{
            left: `${coin.x}%`,
            top: `${coin.y}%`,
            animation: coin.collected ? "none" : `coin-bounce 2s ease-in-out infinite ${coin.id * 0.2}s`,
          }}
          onClick={() => collectCoin(coin.id)}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-4 border-yellow-300 shadow-lg hover:shadow-yellow-400/50 transition-shadow">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
              <span className="text-yellow-800 font-bold text-xs">$</span>
            </div>
          </div>
        </div>
      ))}

      {/* Game UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="bg-black/50 backdrop-blur px-4 py-2 rounded-lg border border-yellow-500">
          <span className="text-yellow-400 font-bold">SCORE: {score}</span>
        </div>
        <div className="bg-black/50 backdrop-blur px-4 py-2 rounded-lg border border-blue-500">
          <span className="text-blue-400 font-bold">LEVEL: 404</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Game Over Screen */}
        <div className="text-center mb-12">
          {/* Pixel Art 404 */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-bold text-yellow-400 mb-4 pixel-text">404</div>
            <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-red-500 opacity-20 pixel-text transform translate-x-1 translate-y-1">
              404
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur border-4 border-yellow-500 p-8 rounded-lg mb-8 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-4 pixel-text">GAME OVER</h2>
            <p className="text-yellow-300 text-lg mb-4 pixel-text">ERROR: PAGE NOT FOUND</p>
            <p className="text-white text-base leading-relaxed pixel-text">
              The page you're looking for has been consumed by a digital glitch! Collect all the coins above to unlock
              the secret path home.
            </p>
          </div>
        </div>

        {/* Power-ups Display */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-lg border-2 border-red-400 text-center">
            <div className="w-8 h-8 bg-red-300 rounded mx-auto mb-2"></div>
            <span className="text-white text-xs font-bold">HEALTH</span>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-lg border-2 border-blue-400 text-center">
            <div className="w-8 h-8 bg-blue-300 rounded mx-auto mb-2"></div>
            <span className="text-white text-xs font-bold">SHIELD</span>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-lg border-2 border-green-400 text-center">
            <div className="w-8 h-8 bg-green-300 rounded mx-auto mb-2"></div>
            <span className="text-white text-xs font-bold">SPEED</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link href="/">
            <PixelButton variant="primary">
              <Home className="w-5 h-5 mr-2 inline" />
              CONTINUE
            </PixelButton>
          </Link>

          <PixelButton variant="secondary" onClick={() => window.location.reload()}>
            <Play className="w-5 h-5 mr-2 inline" />
            RESTART
          </PixelButton>
        </div>

        {/* Achievement */}
        {score >= 800 && (
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg border-4 border-yellow-400 animate-bounce mb-4">
            <span className="font-bold">🏆 ACHIEVEMENT UNLOCKED: Coin Master!</span>
          </div>
        )}

        {/* Back Link */}
        <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gallery
        </Link>
      </div>

      <style jsx>{`
        .pixel-text {
          image-rendering: pixelated;
          font-family: 'Courier New', monospace;
          text-shadow: 2px 2px 0px rgba(0,0,0,0.5);
        }

        @keyframes coin-bounce {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }

        @keyframes pixel-glow {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
      `}</style>
    </div>
  )
}
