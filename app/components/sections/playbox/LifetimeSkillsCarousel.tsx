// components/sections/playbox/LifetimeSkillsCarousel.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const skillCards = [
  {
    id: 'expert-design',
    headerColor: 'from-blue-500 to-blue-600',
    title: 'Designed by Experts',
    cardTitle: 'Neural-Powered Learning',
    description: 'Our AI-enhanced curriculum is crafted by leading technologists and educators who understand how kids learn best.',
    features: ['AI-Enhanced', 'Expert Crafted', 'Age-Appropriate'],
    icon: '🧠',
    featured: false
  },
  {
    id: 'kid-approved',
    headerColor: 'from-orange-500 to-orange-600',
    title: 'Approved by Kids!',
    cardTitle: 'Kid-Tested Innovation',
    description: 'Every project goes through rigorous testing with our community of young innovators.',
    features: ['Community Tested', 'Fun-First', 'Kid-Driven'],
    icon: '🤖',
    featured: true,
    hasPlayButton: true
  },
  {
    id: 'discovery-moments',
    headerColor: 'from-yellow-500 to-yellow-600',
    title: 'Inspiring Moments of Discovery',
    cardTitle: 'Breakthrough Moments',
    description: 'Watch as complex concepts become crystal clear through interactive demonstrations.',
    features: ['Interactive', 'Confidence Building', 'STEM Focused'],
    icon: '✨',
    featured: false
  },
  {
    id: 'accessible',
    headerColor: 'from-green-500 to-green-600',
    title: 'Accessible to All Minds',
    cardTitle: 'Inclusive Innovation',
    description: 'Our adaptive learning approach ensures every child can participate and excel.',
    features: ['Adaptive', 'Inclusive', 'Personalized'],
    icon: '🌟',
    featured: false
  },
  {
    id: 'future-ready',
    headerColor: 'from-purple-500 to-purple-600',
    title: 'Future-Ready Skills',
    cardTitle: 'Tomorrow\'s Leaders',
    description: 'Preparing young minds for careers that don\'t exist yet through foundational skills.',
    features: ['Future Skills', 'Leadership', 'Innovation'],
    icon: '🚀',
    featured: false
  }
]

const LifetimeSkillsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1) // Start with featured card (index 1)
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true)

  useEffect(() => {
    if (!autoPlayEnabled) return

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % skillCards.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [autoPlayEnabled])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % skillCards.length)
    setAutoPlayEnabled(false)
    setTimeout(() => setAutoPlayEnabled(true), 5000)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + skillCards.length) % skillCards.length)
    setAutoPlayEnabled(false)
    setTimeout(() => setAutoPlayEnabled(true), 5000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoPlayEnabled(false)
    setTimeout(() => setAutoPlayEnabled(true), 5000)
  }

  const handleMouseEnter = () => setAutoPlayEnabled(false)
  const handleMouseLeave = () => setAutoPlayEnabled(true)

  return (
    <section 
      className="py-24 bg-gradient-to-br from-black via-[#16213e] to-[#1a4b3a] relative overflow-hidden min-h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating Tech Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse`}
            style={{
              backgroundColor: ['#00ffff', '#ff00ff', '#00ff88', '#ffff00', '#ff6b35', '#4285f4'][i],
              top: `${10 + i * 15}%`,
              left: `${5 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              boxShadow: `0 0 10px currentColor`
            }}
          />
        ))}
      </div>

      {/* Bouncing Elements */}
      <div className="absolute top-[15%] left-[8%] text-2xl animate-bounce" style={{ color: '#00ffff', animationDelay: '0s', animationDuration: '3s' }}>⚙️</div>
      <div className="absolute top-[25%] right-[12%] text-3xl animate-bounce" style={{ color: '#ff00ff', animationDelay: '1s', animationDuration: '3s' }}>🚀</div>
      <div className="absolute bottom-[20%] left-[15%] text-xl animate-bounce" style={{ color: '#00ff88', animationDelay: '2s', animationDuration: '3s' }}>🔬</div>

      {/* Tech Grid Background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="techSkillsGrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,255,255,0.08)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23techSkillsGrid)"/></svg>')`
        }}
      />

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="text-5xl mb-8 animate-pulse" style={{ filter: 'drop-shadow(0 0 30px #ffff00)' }}>💡</div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Build Skills That Will Last A{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent relative">
              Lifetime
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded animate-pulse" />
            </span>
          </motion.h2>
          <motion.p 
            className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Empowering the next generation of problem-solvers through cutting-edge technology and hands-on innovation. 
            Every project builds confidence, creativity, and critical thinking skills.
          </motion.p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center gap-5 mb-10">
          <button 
            onClick={prevSlide}
            className="bg-cyan-400/10 border border-cyan-400/30 rounded-full w-12 h-12 flex items-center justify-center text-cyan-400 text-xl transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm"
          >
            ‹
          </button>
          <button 
            onClick={nextSlide}
            className="bg-cyan-400/10 border border-cyan-400/30 rounded-full w-12 h-12 flex items-center justify-center text-cyan-400 text-xl transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm"
          >
            ›
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{
              transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 2}rem))`,
              width: `calc(${skillCards.length * 100}% + ${(skillCards.length - 1) * 2}rem)`
            }}
          >
            {skillCards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`
                  bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden
                  transition-all duration-500 cursor-pointer shadow-lg
                  ${currentSlide === index 
                    ? 'opacity-100 scale-100 border-white/30' 
                    : 'opacity-60 scale-95'
                  }
                  ${card.featured ? 'relative' : ''}
                `}
                style={{ width: `calc(${100/skillCards.length}% - ${(skillCards.length-1)*0.5/skillCards.length}rem)` }}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: currentSlide === index ? 1.02 : 0.97 }}
              >
                {/* Featured card holographic border */}
                {card.featured && currentSlide === index && (
                  <div 
                    className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-3xl opacity-75 animate-pulse"
                    style={{ zIndex: -1 }}
                  />
                )}

                {/* Header */}
                <div className={`h-16 bg-gradient-to-r ${card.headerColor} flex items-center justify-center relative overflow-hidden`}>
                  <h3 className="text-white font-bold text-lg text-shadow-sm">{card.title}</h3>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Image Container */}
                <div className="h-60 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  {/* Tech Grid Overlay */}
                  <div 
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><pattern id="cardGrid" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(0,255,255,0.1)" stroke-width="0.3"/></pattern></defs><rect width="50" height="50" fill="url(%23cardGrid)"/></svg>')`
                    }}
                  />

                  <div className="text-6xl filter drop-shadow-lg animate-pulse" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.6))' }}>
                    {card.icon}
                  </div>

                  {/* Play Button */}
                  {card.hasPlayButton && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 bg-cyan-400/90 rounded-full flex items-center justify-center text-black text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50 backdrop-blur-sm border-2 border-white/20">
                        ▶
                      </button>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-xl font-bold text-white mb-4 text-shadow-cyan">
                    {card.cardTitle}
                  </h4>
                  
                  <p className="text-white/85 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {card.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-cyan-400/15 border border-cyan-400/30 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-4 mt-10">
          {skillCards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/60 scale-125' 
                  : 'bg-cyan-400/30 hover:bg-cyan-400/50'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <motion.button 
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/50 uppercase tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Building The Future
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default LifetimeSkillsCarousel
