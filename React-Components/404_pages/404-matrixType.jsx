"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Home, ArrowLeft, Terminal } from "lucide-react"

export default function MatrixPage() {
  const canvasRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}404NOTFOUND"
    const matrixArray = matrix.split("")

    const fontSize = 10
    const columns = canvas.width / fontSize

    const drops = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0F0"
      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)
    setIsLoaded(true)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix Rain Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "black" }} />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Terminal Window */}
        <div
          className={`bg-black/80 backdrop-blur border-2 border-green-500 rounded-lg p-8 max-w-2xl w-full mb-8 font-mono transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Terminal Header */}
          <div className="flex items-center mb-6 pb-4 border-b border-green-500/30">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-400 text-sm">matrix@system:~$</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-2 text-green-400 text-sm">
            <div className="flex">
              <span className="text-green-500">$</span>
              <span className="ml-2 typing-animation">accessing page...</span>
            </div>
            <div className="text-red-400">ERROR: Access denied</div>
            <div className="text-yellow-400">WARNING: Page not found in matrix</div>
            <div className="flex">
              <span className="text-green-500">$</span>
              <span className="ml-2">status: 404</span>
            </div>
            <div className="flex">
              <span className="text-green-500">$</span>
              <span className="ml-2">location: /dev/null</span>
            </div>
            <div className="text-cyan-400 mt-4">The page you seek does not exist in this reality.</div>
          </div>
        </div>

        {/* 404 Display */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-green-400 mb-4 font-mono glitch-text">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-green-300 mb-4 font-mono">MATRIX ERROR</h2>
          <p className="text-green-200 text-lg max-w-2xl mx-auto leading-relaxed font-mono">
            The page has been disconnected from the Matrix. Choose your path wisely, Neo.
          </p>
        </div>

        {/* Code Block */}
        <div className="bg-black/60 backdrop-blur border border-green-500/50 rounded-lg p-6 mb-8 max-w-md w-full font-mono text-sm">
          <div className="text-green-400 mb-2">// System Status</div>
          <div className="text-green-300">
            <div>if (page.exists()) &#123;</div>
            <div className="ml-4 text-red-400">return false;</div>
            <div>&#125; else &#123;</div>
            <div className="ml-4 text-cyan-400">redirect('/home');</div>
            <div>&#125;</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-green-600 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/25 font-mono"
          >
            <div className="relative flex items-center">
              <Home className="w-5 h-5 mr-2" />
              TAKE RED PILL
            </div>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-lg transition-all duration-300 hover:bg-green-500 hover:text-black font-mono"
          >
            <div className="flex items-center">
              <Terminal className="w-5 h-5 mr-2" />
              TAKE BLUE PILL
            </div>
          </button>
        </div>

        {/* Matrix Quote */}
        <div className="text-center mb-8">
          <blockquote className="text-green-300 italic font-mono text-lg">"There is no spoon... or page."</blockquote>
          <cite className="text-green-500 text-sm font-mono">- The Oracle</cite>
        </div>

        {/* Back Link */}
        <Link
          href="/"
          className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 font-mono"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gallery
        </Link>
      </div>

      <style jsx>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          from, to { border-color: transparent; }
          50% { border-color: #10b981; }
        }

        .typing-animation {
          overflow: hidden;
          border-right: 2px solid #10b981;
          white-space: nowrap;
          animation: typing 2s steps(20, end), blink 1s step-end infinite;
        }

        .glitch-text {
          animation: matrix-glitch 3s infinite;
        }

        @keyframes matrix-glitch {
          0%, 100% { transform: translate(0); }
          10% { transform: translate(-2px, 2px); }
          20% { transform: translate(2px, -2px); }
          30% { transform: translate(-2px, -2px); }
          40% { transform: translate(2px, 2px); }
          50% { transform: translate(-2px, 2px); }
          60% { transform: translate(2px, -2px); }
          70% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
          90% { transform: translate(-2px, 2px); }
        }
      `}</style>
    </div>
  )
}
