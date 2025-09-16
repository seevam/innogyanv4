// components/playbox/StickySubscriptionBox.tsx
'use client'

import React, { useState, useEffect } from 'react'

interface StickySubscriptionBoxProps {
  title: string
  price: number
  features: string[]
}

const StickySubscriptionBox: React.FC<StickySubscriptionBoxProps> = ({ 
  title, 
  price, 
  features 
}) => {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isUserMinimized, setIsUserMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isUserMinimized) return

      const scrolled = window.pageYOffset
      const heroHeight = window.innerHeight
      
      if (window.innerWidth > 968) {
        if (scrolled > heroHeight * 0.8) {
          setIsMinimized(true)
        } else {
          setIsMinimized(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isUserMinimized])

  const toggleMinimized = () => {
    setIsUserMinimized(!isUserMinimized)
    setIsMinimized(!isMinimized)
  }

  const handleSubscribe = () => {
    // Add ripple effect
    console.log('Subscribe clicked')
  }

  return (
    <div 
      className={`
        bg-black/90 backdrop-blur-xl border-2 border-cyan-400/30 rounded-2xl p-8 text-center
        transition-all duration-500 ease-in-out
        shadow-xl shadow-cyan-400/20
        ${isMinimized 
          ? 'fixed bottom-5 right-5 z-[1000] w-52 p-5 animate-pulse' 
          : 'sticky top-24 w-full max-w-sm'
        }
      `}
    >
      {/* Close button for minimized state */}
      {isMinimized && (
        <button 
          onClick={toggleMinimized}
          className="absolute top-1 right-2 text-white/60 hover:text-white transition-colors text-lg w-5 h-5 flex items-center justify-center"
        >
          ×
        </button>
      )}

      <div className={`transition-all duration-400 ${isMinimized ? 'flex flex-col items-center gap-3' : ''}`}>
        <h3 className={`text-cyan-400 font-bold text-shadow-cyan transition-all duration-400 ${
          isMinimized ? 'text-base leading-tight text-center' : 'text-2xl mb-5'
        }`}>
          {title}
        </h3>

        <div className={`text-cyan-400 font-bold text-shadow-cyan transition-all duration-400 ${
          isMinimized ? 'text-xl font-extrabold' : 'text-3xl mb-5'
        }`}>
          ₹{price.toLocaleString()}/month
        </div>

        <button
          onClick={handleSubscribe}
          className={`bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold rounded-full
            transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30
            ${isMinimized ? 'px-5 py-3 text-sm font-bold w-full' : 'px-8 py-4 text-lg mb-4'}
          `}
        >
          Subscribe Now
        </button>
      </div>

      {/* Features list - hidden when minimized */}
      <div className={`transition-all duration-400 ${
        isMinimized ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-96'
      }`}>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-white/90 text-left relative pl-6">
              <span className="absolute left-0 text-purple-400 font-bold">✦</span>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="text-sm text-white/60">
          No commitment • Cancel anytime
        </div>
      </div>
    </div>
  )
}

export default StickySubscriptionBox
