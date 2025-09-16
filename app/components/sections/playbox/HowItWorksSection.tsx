// components/sections/playbox/HowItWorksSection.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Every 15 days, a surprise box arrives',
    description: 'Anticipation builds as each carefully curated box arrives at your doorstep with new adventures inside.'
  },
  {
    number: '2', 
    title: 'Each box contains a new hands-on building project',
    description: 'Discover exciting STEM projects designed to challenge and inspire young minds through creative building.'
  },
  {
    number: '3',
    title: 'Simple instructions, zero screens, fully interactive',
    description: 'Child-friendly guides ensure independent learning without digital distractions, fostering real-world skills.'
  },
  {
    number: '4',
    title: '30–60 minutes of daily discovery over 15 days',
    description: 'Perfect project pacing that fits into busy schedules while maintaining engagement and learning momentum.'
  }
]

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f0f23] to-[#1a1a2e] relative overflow-hidden">
      <div className="container mx-auto px-5 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Surprise. Build. Learn. Repeat.
        </motion.h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-cyan-400/5 border border-cyan-400/20 rounded-2xl p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/20 relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-t-2xl" />

              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              <h3 className="text-white text-xl mb-4 font-semibold">
                {step.title}
              </h3>

              <p className="text-white/80 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
