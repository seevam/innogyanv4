// components/sections/playbox/PeekInsideSection.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const boxCategories = [
  {
    id: 'stem-explorer',
    name: 'STEM Explorer',
    icon: '🤖',
    title: 'Interactive Game Board',
    description: 'Press to place the marble on the board!',
    features: ['Ages 5+', 'Strategic Thinking', 'Hand-Eye Coordination'],
    projects: [
      'Build a mini sailboat',
      'Create a robotic hand', 
      'Assemble a wind-powered car',
      'Experiment with simple circuits'
    ],
    gradientClass: 'from-orange-500 to-yellow-500'
  },
  {
    id: 'creative-builder',
    name: 'Creative Builder',
    icon: '🔧',
    title: 'Creative Construction Kit',
    description: 'Build amazing structures with digital precision!',
    features: ['Ages 6+', 'Creative Design', 'Spatial Reasoning'],
    projects: [
      'Design a smart home',
      'Build a holographic bridge',
      'Create AI-powered sculptures', 
      'Construct a quantum marble run'
    ],
    gradientClass: 'from-blue-500 to-green-500'
  },
  {
    id: 'tech-innovator',
    name: 'Tech Innovator', 
    icon: '💻',
    title: 'Tech Innovation Lab',
    description: 'Code, create, and innovate with quantum technology!',
    features: ['Ages 8+', 'Programming', 'Digital Literacy'],
    projects: [
      'Program an AI assistant',
      'Create neural animations',
      'Build a quantum weather station',
      'Design holographic apps'
    ],
    gradientClass: 'from-green-500 to-teal-500'
  },
  {
    id: 'science-lab',
    name: 'Science Lab',
    icon: '⚗️', 
    title: 'Quantum Science Lab',
    description: 'Explore digital chemistry through nano-experiments!',
    features: ['Ages 7+', 'Scientific Method', 'Observation Skills'],
    projects: [
      'Grow digital crystal gardens',
      'Create holographic eruptions',
      'Mix nano-polymer slime',
      'Build solar fusion reactors'
    ],
    gradientClass: 'from-yellow-500 to-red-500'
  },
  {
    id: 'future-engineer',
    name: 'Future Engineer',
    icon: '⚡',
    title: 'Neural Engineering Kit', 
    description: 'Solve tomorrow\'s problems with AI-powered engineering!',
    features: ['Ages 9+', 'Problem Solving', 'AI Design'],
    projects: [
      'Design quantum-proof towers',
      'Build neural filtration systems',
      'Create fusion energy models',
      'Engineer bionic prosthetics'
    ],
    gradientClass: 'from-purple-500 to-pink-500'
  }
]

const PeekInsideSection = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [autoSlideInterval, setAutoSlideInterval] = useState<NodeJS.Timeout | null>(null)

  const startAutoSlide = () => {
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % boxCategories.length)
    }, 5000)
    setAutoSlideInterval(interval)
  }

  const stopAutoSlide = () => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval)
      setAutoSlideInterval(null)
    }
  }

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [])

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index)
    stopAutoSlide()
    setTimeout(startAutoSlide, 3000)
  }

  const handleMouseEnter = () => {
    stopAutoSlide()
  }

  const handleMouseLeave = () => {
    startAutoSlide()
  }

  return (
    <section 
      className="py-24 bg-gradient-to-br from-black to-[#16213e] relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tech grid background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="techBoxGrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23techBoxGrid)"/></svg>')`
        }}
      />

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6 filter drop-shadow-lg">
            A Peek Inside The Box ⭐
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            Encouraging kids to become problem-solvers as they explore cutting-edge technology...
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="flex justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {boxCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(index)}
              className={`
                bg-cyan-400/10 border border-cyan-400/30 rounded-2xl px-6 py-4 flex items-center gap-3
                transition-all duration-300 backdrop-blur-sm hover:bg-cyan-400/20 hover:border-cyan-400/60
                hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20
                ${activeCategory === index ? 'bg-cyan-400/20 border-cyan-400 shadow-lg shadow-cyan-400/40' : ''}
              `}
            >
              <span className="text-2xl filter drop-shadow-lg">{category.icon}</span>
              <span className="text-white font-semibold text-sm uppercase tracking-wide">
                {category.name}
              </span>
              {activeCategory === index && (
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Box Content Slides */}
        <div className="max-w-6xl mx-auto h-[500px] relative overflow-hidden rounded-3xl border border-cyan-400/20 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.5, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className={`absolute inset-0 bg-gradient-to-br ${boxCategories[activeCategory].gradientClass} shadow-inner`}
            >
              <div className="grid md:grid-cols-2 h-full items-center p-8 md:p-12 gap-8">
                {/* Left Content */}
                <div className="text-white space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-lg">
                      {boxCategories[activeCategory].title}
                    </h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      {boxCategories[activeCategory].description}
                    </p>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    {boxCategories[activeCategory].features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="bg-cyan-400/20 border border-cyan-400/40 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30 uppercase tracking-wide">
                    Learn More
                  </button>

                  <div>
                    <h4 className="text-lg font-bold text-cyan-100 mb-3 text-shadow-sm">What's Inside:</h4>
                    <ul className="space-y-2">
                      {boxCategories[activeCategory].projects.map((project, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white/90">
                          <span className="text-cyan-300 text-sm filter drop-shadow-sm">▶</span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="flex justify-center items-center">
                  <div className="relative w-80 h-80">
                    {/* Tech Grid */}
                    <div 
                      className="absolute -top-5 -left-5 -right-5 -bottom-5 opacity-60 animate-pulse"
                      style={{
                        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><pattern id="techGrid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,255,255,0.2)" stroke-width="0.5"/></pattern></defs><rect width="50" height="50" fill="url(%23techGrid)"/></svg>')`
                      }}
                    />

                    {/* Floating Icons */}
                    <div className="absolute inset-0">
                      {['⚙️', '🔧', '🧩'].map((icon, idx) => (
                        <div 
                          key={idx}
                          className={`absolute text-2xl filter drop-shadow-lg animate-bounce`}
                          style={{
                            top: `${15 + idx * 25}%`,
                            left: `${15 + idx * 20}%`,
                            animationDelay: `${idx * 1.3}s`,
                            animationDuration: '4s'
                          }}
                        >
                          {icon}
                        </div>
                      ))}
                    </div>

                    {/* Main Image Container */}
                    <div className="w-full h-full bg-cyan-400/10 backdrop-blur-lg border-2 border-cyan-400/30 rounded-3xl flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/40 cursor-pointer group">
                      
                      {/* Circuit Pattern */}
                      <div 
                        className="absolute inset-0 opacity-40 animate-pulse"
                        style={{
                          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 10 L90 10 L90 50 L50 50 L50 90 L10 90 Z" fill="none" stroke="rgba(0,255,255,0.3)" stroke-width="1"/><circle cx="20" cy="20" r="3" fill="rgba(0,255,255,0.5)"/><circle cx="80" cy="30" r="3" fill="rgba(255,0,255,0.5)"/><circle cx="60" cy="70" r="3" fill="rgba(0,255,255,0.5)"/></svg>')`
                        }}
                      />

                      {/* Activity Indicator */}
                      <div className="absolute top-5 right-5 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />

                      {/* Interactive Learning Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-cyan-400 p-6 text-center font-bold text-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-shadow-sm">
                        Interactive Learning
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-5 mt-12">
          {boxCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(index)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
                activeCategory === index 
                  ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/60 scale-125' 
                  : 'bg-cyan-400/30 border-cyan-400/50 hover:bg-cyan-400/50'
              }`}
            >
              {activeCategory === index && (
                <div className="absolute inset-0 w-8 h-8 border-2 border-cyan-400/40 rounded-full -m-2 animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PeekInsideSection
