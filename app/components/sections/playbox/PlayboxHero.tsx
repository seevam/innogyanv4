// components/sections/playbox/PlayboxHero.tsx
'use client'

import React from 'react'
import StickySubscriptionBox from '@/components/playbox/StickySubscriptionBox'

const PlayboxHero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-black via-[#1a1a2e] to-[#16213e] relative overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(26,26,46,0.8) 100%, rgba(22,33,62,0.8) 100%),
            url('https://i.postimg.cc/PqvzXTvp/hpb1d.jpg')
          `
        }}
      >
        {/* Mobile background adjustment */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-br from-black/70 via-[#1a1a2e]/70 to-[#16213e]/70" />
      </div>

      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad1"><stop offset="0%" stop-color="rgba(0,255,255,0.2)"/><stop offset="100%" stop-color="rgba(0,255,255,0)"/></radialGradient><radialGradient id="grad2"><stop offset="0%" stop-color="rgba(255,0,255,0.1)"/><stop offset="100%" stop-color="rgba(255,0,255,0)"/></radialGradient></defs><circle cx="200" cy="200" r="3" fill="url(%23grad1)"/><circle cx="800" cy="300" r="2" fill="url(%23grad2)"/><circle cx="300" cy="700" r="4" fill="url(%23grad1)"/><circle cx="700" cy="800" r="2" fill="url(%23grad2)"/></svg>')`,
            animation: 'float 20s infinite linear'
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_350px] gap-12 items-center max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="hero-text text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Spark Creativity Early — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">One Box at a Time.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Hands-on science and innovation kits delivered home every 15 days — turning kids into confident young creators.
            </p>
          </div>

          {/* Subscription Box */}
          <div className="flex justify-center lg:justify-end">
            <StickySubscriptionBox 
              title="Start Their Playbox Journey"
              price={1999}
              features={[
                "Surprise box delivered every 15 days",
                "Screen-free, hands-on projects", 
                "Cancel anytime"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlayboxHero
