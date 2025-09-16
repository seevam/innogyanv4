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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f0f23] to-[#1a1a2e] relative overflow-hidden">
      {/* Tech grid background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')`
        }}
      />

      <div className="container mx-auto px-5 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-16 text-shadow-cyan"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Surprise. Build. Learn. Repeat.
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-cyan-400/5 border border-cyan-400/20 rounded-2xl p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/20 relative group"
              variants={itemVariants}
            >
              {/* Top gradient bar */}
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
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
