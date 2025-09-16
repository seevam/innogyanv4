// components/sections/playbox/BuildsSection.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'

const buildCategories = [
  {
    icon: '🔬',
    title: 'Science Experiments', 
    description: 'Explore the wonders of physics, chemistry, and biology through safe, hands-on experiments.'
  },
  {
    icon: '⚙️',
    title: 'Engineering Models',
    description: 'Build mechanical wonders and learn how things work through practical engineering challenges.'
  },
  {
    icon: '🎨',
    title: 'Design Projects',
    description: 'Create beautiful and functional designs while developing aesthetic sense and problem-solving skills.'
  },
  {
    icon: '🧩',
    title: 'Fun Challenges & Brain-teasers',
    description: 'Engage in puzzles and challenges that develop critical thinking and logical reasoning abilities.'
  }
]

const BuildsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] relative">
      <div className="container mx-auto px-5">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tinker Today. Think Like A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Creator Tomorrow.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {buildCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-black/70 border border-purple-500/30 rounded-2xl p-6 text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              <h3 className="text-purple-400 text-lg font-semibold mb-3">
                {category.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuildsSection
