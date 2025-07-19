/**
 * Social Icons Circle Component
 * Created by Anuja Jayasinghe [anujajay.com]
 */

"use client"
import { useEffect, useRef, useState } from "react"

const socialLinks = [
  {
    href: "https://github.com/Anuja-jayasinghe",
    label: "GitHub",
    blackIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github-black.svg",
    whiteIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github-white.svg",
    colorIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github.svg",
    angle: 0,
  },
  {
    href: "https://linkedin.com/in/anuja-jayasinghe",
    label: "LinkedIn",
    blackIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin-black.svg",
    whiteIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin-white.svg",
    colorIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin.svg",
    angle: 60,
  },
  {
    href: "https://twitter.com/anujajayasinhe",
    label: "Twitter",
    blackIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x-black.svg",
    whiteIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x-white.svg",
    colorIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x.svg",
    angle: 120,
  },
  {
    href: "https://instagram.com/anu.ja_j",
    label: "Instagram",
    blackIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram-black.svg",
    whiteIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram-white.svg",
    colorIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram.svg",
    angle: 180,
  },
  {
    href: "https://discordapp.com/users/758840991691046933/",
    label: "Discord",
    blackIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord-black.svg",
    whiteIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord-white.svg",
    colorIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord.svg",
    angle: 240,
  },
  {
    href: "https://www.facebook.com/anuja.jayasinghe.75",
    label: "Facebook",
    blackIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook-black.svg",
    whiteIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook-white.svg",
    colorIcon:
      "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook.svg",
    angle: 300,
  },
]

export default function SocialIconsCircle() {
  const radius = 80
  const [rotation, setRotation] = useState(0)
  const requestRef = useRef()

  useEffect(() => {
    let start = null
    const duration = 25000 // 25s for a full rotation
    const animate = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const rot = ((elapsed % duration) / duration) * 360
      setRotation(rot)
      requestRef.current = requestAnimationFrame(animate)
    }
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative w-64 h-64 group">
        {/* Spinning circle container */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotate(${rotation}deg)`,
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
                transform: `translate(-50%, -50%) rotate(${link.angle}deg) translateY(-${radius}px) rotate(${-link.angle - rotation}deg)`,
              }}
            >
              <div className="relative w-11 h-11 group/link">
                <img
                  src={link.blackIcon || "/placeholder.svg"}
                  alt={`${link.label} icon`}
                  className="w-full h-full transition-all duration-300 group-hover/link:opacity-0"
                />
                <img
                  src={link.colorIcon || "/placeholder.svg"}
                  alt={`${link.label} icon colored`}
                  className="absolute inset-0 w-full h-full opacity-0 group-hover/link:opacity-100 transition-all duration-300 group-hover/link:scale-110"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
