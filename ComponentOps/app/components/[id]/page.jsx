"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Code, Check } from "lucide-react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

// Import your actual components here
import SocialIconsCircle from "./components/SocialIcons/SocialIconsCircle"
import SocialIconsMarquee from "./components/SocialIcons/SocialIconsMarquee"
import GamePage from "./components/404_pages/404-gameType"
import GhostPage from "./components/404_pages/404-ghostType"
import GlitchPage from "./components/404_pages/404-glitchType"
import MatrixPage from "./components/404_pages/404-matrixType"
import SpacePage from "./components/404_pages/404-spaceType"

export default function ComponentDetailPage({ params }) {
  const [activeTab, setActiveTab] = useState("preview")
  const [copied, setCopied] = useState(false)

  // Component registry - add your components here
  const componentRegistry = {
    socialiconscircle: {
      name: "Social Icons Circle",
      description: "A rotating circle of social media icons that reveals color on hover.",
      category: "Social",
      component: SocialIconsCircle,
      code:

"use client";
import React, { useEffect, useRef, useState } from "react";

const socialLinks = [

];

const SocialIconsCircle = () => {
  const radius = 80;
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef();

  useEffect(() => {
    let start = null;
    const duration = 25000;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const rot = ((elapsed % duration) / duration) * 360;
      setRotation(rot);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative w-64 h-64 group">
        <div
          className="absolute inset-0"
          style={{
            transform: \`rotate(\${rotation}deg)\`
          }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: \`translate(-50%, -50%) rotate(\${link.angle}deg) translateY(-\${radius}px) rotate(\${-link.angle - rotation}deg)\`
              }}
            >
              <div className="relative w-11 h-11 group/link">
                <img
                  src={link.blackIcon}
                  alt={\`\${link.label} icon\`}
                  className="w-full h-full transition-all duration-300 group-hover/link:opacity-0"
                />
                <img
                  src={link.colorIcon}
                  alt={\`\${link.label} icon colored\`}
                  className="absolute inset-0 w-full h-full opacity-0 group-hover/link:opacity-100 transition-all duration-300 group-hover/link:scale-110"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialIconsCircle;`,
      usage: `import SocialIconsCircle from './components/SocialIconsCircle'

// Basic usage
<SocialIconsCircle />

// The component automatically rotates and shows color on hover
// Customize the social links by modifying the socialLinks array
// Adjust rotation speed by changing the duration value`,
      props: [
        { name: "radius", type: "number", default: "80", description: "Radius of the circle in pixels" },
        {
          name: "duration",
          type: "number",
          default: "25000",
          description: "Duration for one full rotation in milliseconds",
        },
        {
          name: "socialLinks",
          type: "array",
          default: "predefined",
          description: "Array of social link objects with href, label, and icon URLs",
        },
      ],
    },
    socialiconsmarquee: {
      name: "Social Icons Marquee",
      description:
        "A horizontally scrolling marquee of social media icons that reveals color when centered or hovered.",
      category: "Social",
      component: SocialIconsMarquee,
      code: `/**
 * Social Icons Marquee Component
 * Created by Anuja Jayasinghe [anujajay.com]
 * https://github.com/Anuja-jayasinghe/React-Components-Library
 */

"use client";
const socialLinks = [
  {
    href: "https://github.com",
    label: "GitHub",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github.svg",
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin.svg",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x.svg",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram.svg",
  },
  {
    href: "https://discord.com",
    label: "Discord",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord.svg",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook.svg",
  },
];

const SocialIconsMarquee = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [centeredIndex, setCenteredIndex] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let offset = 0.5;
    const speed = 1.2;

    const scroll = () => {
      offset += speed;
      if (offset >= content.scrollWidth / 2) {
        offset = 0;
      }
      content.style.transform = \`translateX(-\${offset}px)\`;

      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      let minDist = Infinity;
      let closestIdx = null;
      const iconNodes = Array.from(content.children);
      iconNodes.forEach((node, idx) => {
        const rect = node.getBoundingClientRect();
        const iconCenter = rect.left + rect.width / 2;
        const dist = Math.abs(centerX - iconCenter);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = idx;
        }
      });
      setCenteredIndex(closestIdx);

      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  const duplicatedLinks = [...socialLinks, ...socialLinks];

  return (
    <div
      ref={containerRef}
      className="overflow-hidden h-40 bg-transparent w-full max-w-sm sm:max-w-md mx-auto"
    >
      <div
        ref={contentRef}
        className="flex gap-10 w-max"
        style={{ willChange: "transform" }}
      >
        {duplicatedLinks.map((link, index) => {
          const isCenter = centeredIndex === index;
          return (
            <a
              key={\`\${link.label}-\${index}\`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={\`relative w-11 h-11 group/link flex-shrink-0\${
                isCenter ? " mobile-center" : ""
              }\`}
              aria-label={link.label}
            >
              <img
                src={link.blackIcon}
                alt={\`\${link.label} icon\`}
                className={\`w-full h-full transition-all duration-300 group-hover/link:opacity-0\${
                  isCenter ? " opacity-0" : ""
                }\`}
              />
              <img
                src={link.colorIcon}
                alt={\`\${link.label} icon colored\`}
                className={\`absolute inset-0 w-full h-full opacity-0 group-hover/link:opacity-100 transition-all duration-300 group-hover/link:scale-110\${
                  isCenter ? " opacity-100 scale-110" : ""
                }\`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialIconsMarquee;`,
      usage: `import SocialIconsMarquee from './components/SocialIconsMarquee'

// Basic usage
<SocialIconsMarquee />

// The component automatically scrolls horizontally
// Icons show color effect when centered or on hover
// Customize the social links by modifying the socialLinks array`,
      props: [
        { name: "speed", type: "number", default: "1.2", description: "Scrolling speed of the marquee" },
        { name: "gap", type: "string", default: "gap-10", description: "Gap between icons (Tailwind class)" },
        {
          name: "socialLinks",
          type: "array",
          default: "predefined",
          description: "Array of social link objects with href, label, and icon URLs",
        },
      ],
    },
    "404-game": {
      name: "404 Game Page",
      description: "An interactive game-themed 404 page where users can collect coins to unlock the way home.",
      category: "Error Pages",
      component: GamePage,
      code: `/**
 * 404 Game Page Component
 * Created by Anuja Jayasinghe [anujajay.com]
 * https://github.com/Anuja-jayasinghe/React-Components-Library
 */

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Game UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="bg-black/50 backdrop-blur px-4 py-2 rounded-lg border border-yellow-500">
          <span className="text-yellow-400 font-bold">SCORE: {score}</span>
        </div>
        <div className="bg-black/50 backdrop-blur px-4 py-2 rounded-lg border border-blue-500">
          <span className="text-blue-400 font-bold">LEVEL: 404</span>
        </div>
      </div>

      {/* Floating Coins */}
      {coins.map((coin) => (
        <div
          key={coin.id}
          className={\`absolute cursor-pointer transition-all duration-300 \${
            coin.collected ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }\`}
          style={{
            left: \`\${coin.x}%\`,
            top: \`\${coin.y}%\`,
            animation: coin.collected ? "none" : \`coin-bounce 2s ease-in-out infinite \${coin.id * 0.2}s\`,
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-12">
          <h1 className="text-8xl md:text-9xl font-bold text-yellow-400 mb-4 pixel-text">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-4 pixel-text">GAME OVER</h2>
          <p className="text-yellow-300 text-lg mb-4 pixel-text">ERROR: PAGE NOT FOUND</p>
          <p className="text-white text-base leading-relaxed pixel-text">
            The page you're looking for has been consumed by a digital glitch! Collect all the coins above to unlock
            the secret path home.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link href="/">
            <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors">
              <Home className="w-5 h-5 mr-2 inline" />
              CONTINUE
            </button>
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition-colors"
          >
            <Play className="w-5 h-5 mr-2 inline" />
            RESTART
          </button>
        </div>
      </div>

      <style jsx>{\`
        .pixel-text {
          image-rendering: pixelated;
          font-family: 'Courier New', monospace;
          text-shadow: 2px 2px 0px rgba(0,0,0,0.5);
        }

        @keyframes coin-bounce {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      \`}</style>
    </div>
  )
}`,
      usage: `import GamePage from './components/404_pages/404-gameType'

// Basic usage
<GamePage />

// The component provides an interactive game experience
// where users can collect coins to unlock the way home

// Features:
// - Interactive coin collection
// - Score tracking
// - Animated game elements
// - Responsive design
// - Custom pixel art styling`,
      props: [
        {
          name: "score",
          type: "number",
          default: "0",
          description: "Current score of the player"
        },
        {
          name: "coins",
          type: "array",
          default: "[]",
          description: "Array of coin objects with position and collection status"
        },
        {
          name: "gameStarted",
          type: "boolean",
          default: "false",
          description: "Whether the game has been started"
        }
      ],
    },
    "404-ghost": {
      name: "404 Ghost Page",
      description: "A spooky ghost-themed 404 page with floating spirits and interactive elements.",
      category: "Error Pages",
      component: GhostPage,
      code: `/**
 * 404 Ghost Page Component
 * Created by Anuja Jayasinghe [anujajay.com]
 * https://github.com/Anuja-jayasinghe/React-Components-Library
 */

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black relative overflow-hidden">
      {/* Main Ghost Character */}
      <div
        className="absolute transition-all duration-1000 ease-in-out"
        style={{
          left: \`\${ghostPosition.x}%\`,
          top: \`\${ghostPosition.y}%\`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={\`relative cursor-pointer transition-all duration-300 \${isHovered ? "scale-110" : "scale-100"}\`}
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
                        left: \`\${50 + eyePosition.x}%\`,
                        top: \`\${50 + eyePosition.y}%\`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="relative w-6 h-6 bg-black rounded-full">
                    <div
                      className="absolute w-2 h-2 bg-white rounded-full transition-all duration-200"
                      style={{
                        left: \`\${50 + eyePosition.x}%\`,
                        top: \`\${50 + eyePosition.y}%\`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                </div>
                {/* Mouth */}
                <div
                  className={\`w-4 h-6 bg-black rounded-full transition-all duration-300 \${
                    isHovered ? "scale-150" : "scale-100"
                  }\`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-12">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-4 animate-pulse">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Boo! Page Not Found</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Our friendly ghost couldn't find the page you're looking for. It might have vanished into the spirit realm,
            but don't worry - we'll help you find your way back!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
          >
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
      </div>
    </div>
  )
}`,
      usage: `import GhostPage from './components/404_pages/404-ghostType'

// Basic usage
<GhostPage />

// The component provides a spooky ghost experience
// with floating spirits and interactive elements

// Features:
// - Interactive ghost character
// - Mouse-following eyes
// - Floating animation
// - Hover effects
// - Gradient backgrounds`,
      props: [
        {
          name: "ghostPosition",
          type: "object",
          default: "{ x: 50, y: 50 }",
          description: "Current position of the ghost character"
        },
        {
          name: "isHovered",
          type: "boolean",
          default: "false",
          description: "Whether the ghost is being hovered over"
        },
        {
          name: "eyePosition",
          type: "object",
          default: "{ x: 0, y: 0 }",
          description: "Position of the ghost's eyes"
        }
      ],
    },
    "404-glitch": {
      name: "404 Glitch Page",
      description: "A cyberpunk-style glitch-themed 404 page with animated text effects.",
      category: "Error Pages",
      component: GlitchPage,
      code: `/**
 * 404 Glitch Page Component
 * Created by Anuja Jayasinghe [anujajay.com]
 * https://github.com/Anuja-jayasinghe/React-Components-Library
 */

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
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-8">
          <h1
            className={\`text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 \${
              isGlitching ? "animate-pulse" : ""
            }\`}
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
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
      </div>

      <style jsx>{\`
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
      \`}</style>
    </div>
  )
}`,
      usage: `import GlitchPage from './components/404_pages/404-glitchType'

// Basic usage
<GlitchPage />

// The component provides a glitch effect experience
// with animated text and cyberpunk styling

// Features:
// - Text glitch animation
// - Cyberpunk styling
// - Interactive buttons
// - Gradient effects
// - Responsive design`,
      props: [
        {
          name: "glitchText",
          type: "string",
          default: '"404"',
          description: "The text to be displayed with glitch effect"
        },
        {
          name: "isGlitching",
          type: "boolean",
          default: "false",
          description: "Whether the glitch effect is active"
        },
        {
          name: "glitchChars",
          type: "string",
          default: '"!@#$%^&*()_+-=[]{}|;:,.<>?"',
          description: "Characters used for the glitch effect"
        }
      ],
    },
    "404-matrix": {
      name: "404 Matrix Page",
      description: "A Matrix-inspired 404 page with falling digital rain and terminal-style interface.",
      category: "Error Pages",
      component: MatrixPage,
      code: `/**
 * 404 Matrix Page Component
 * Created by Anuja Jayasinghe [anujajay.com]
 * https://github.com/Anuja-jayasinghe/React-Components-Library
 */

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

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~404NOTFOUND"
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
          className={\`bg-black/80 backdrop-blur border-2 border-green-500 rounded-lg p-8 max-w-2xl w-full mb-8 font-mono transition-all duration-1000 \${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }\`}
        >
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
      </div>

      <style jsx>{\`
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
      \`}</style>
    </div>
  )
}`,
      usage: `import MatrixPage from './components/404_pages/404-matrixType'

// Basic usage
<MatrixPage />

// The component provides a Matrix-inspired experience
// with falling digital rain and terminal interface

// Features:
// - Matrix-style digital rain animation
// - Terminal-style interface
// - Interactive buttons
// - Responsive canvas
// - Glitch effects`,
      props: [
        {
          name: "isLoaded",
          type: "boolean",
          default: "false",
          description: "Whether the Matrix rain animation is loaded"
        },
        {
          name: "matrix",
          type: "string",
          default: "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~404NOTFOUND",
          description: "Characters used in the Matrix rain animation"
        },
        {
          name: "fontSize",
          type: "number",
          default: "10",
          description: "Font size for the Matrix rain characters"
        }
      ],
    },
    "404-space": {
      name: "404 Space Page",
      description: "A cosmic-themed 404 page with floating planets and a rocket animation.",
      category: "Error Pages",
      component: SpacePage,
      code: `/**
 * 404 Space Page Component
 * Created by Anuja Jayasinghe [anujajay.com]
 * https://github.com/Anuja-jayasinghe/React-Components-Library
 */

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

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Stars Background */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: \`\${star.x}%\`,
            top: \`\${star.y}%\`,
            width: \`\${star.size}px\`,
            height: \`\${star.size}px\`,
            animationDelay: \`\${star.twinkleDelay}s\`,
            animationDuration: \`\${2 + Math.random() * 3}s\`,
          }}
        />
      ))}

      {/* Floating Rocket */}
      <div
        className="absolute transition-all duration-2000 ease-in-out"
        style={{
          left: \`\${rocketPosition.x}%\`,
          top: \`\${rocketPosition.y}%\`,
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
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lost in the Cosmos</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Houston, we have a problem! The page you're looking for has drifted into deep space. Let's navigate you back
            to Earth.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
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
      </div>

      <style jsx>{\`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(var(--distance)) rotate(0deg); }
          to { transform: rotate(360deg) translateX(var(--distance)) rotate(-360deg); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      \`}</style>
    </div>
  )
}`,
      usage: `import SpacePage from './components/404_pages/404-spaceType'

// Basic usage
<SpacePage />

// The component provides a space-themed experience
// with floating planets and rocket animation

// Features:
// - Animated starry background
// - Floating rocket animation
// - Interactive buttons
// - Gradient effects
// - Responsive design`,
      props: [
        {
          name: "rocketPosition",
          type: "object",
          default: "{ x: 50, y: 50 }",
          description: "Current position of the rocket"
        },
        {
          name: "stars",
          type: "array",
          default: "[]",
          description: "Array of star objects with position and animation properties"
        }
      ],
    },
  }

  const component = componentRegistry[params.id]

  if (!component) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Component Not Found</h1>
          <Link href="/components" className="text-blue-400 hover:text-blue-300">
            ← Back to Components
          </Link>
        </div>
      </div>
    )
  }

  const ComponentToRender = component.component

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header activePage="components" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/components"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Components
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{component.name}</h1>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                {component.category}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => copyToClipboard(component.code)}
                className="flex items-center px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
          <p className="text-xl text-gray-300">{component.description}</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {["preview", "code", "usage", "props"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          {activeTab === "preview" && (
            <div className="p-8">
              <div
                className="rounded-lg p-8 border border-gray-700"
                style={{
                  backgroundImage: 'url(/gradient.svg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <ComponentToRender />
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="relative">
              <button
                onClick={() => copyToClipboard(component.code)}
                className="absolute top-4 right-4 p-2 bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors z-10"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
                <code>{component.code}</code>
              </pre>
            </div>
          )}

          {activeTab === "usage" && (
            <div className="relative">
              <button
                onClick={() => copyToClipboard(component.usage)}
                className="absolute top-4 right-4 p-2 bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors z-10"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
                <code>{component.usage}</code>
              </pre>
            </div>
          )}

          {activeTab === "props" && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Prop</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Type</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Default</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {component.props.map((prop, index) => (
                      <tr key={index} className="border-b border-gray-700/50">
                        <td className="py-3 px-4 text-blue-400 font-mono text-sm">{prop.name}</td>
                        <td className="py-3 px-4 text-purple-400 font-mono text-sm">{prop.type}</td>
                        <td className="py-3 px-4 text-gray-400 font-mono text-sm">{prop.default}</td>
                        <td className="py-3 px-4 text-gray-300 text-sm">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer size="small" />
    </div>
  )
}
