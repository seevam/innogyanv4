// components/sections/playbox/SafetySection.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'

const safetyFeatures = [
  {
    icon: '🛡️',
    title: 'Child-Safe, Certified Materials',
    description: 'All materials meet strict safety standards and are tested for child safety and durability.'
  },
  {
    icon: '✅',
    title: 'Quality-Tested Components', 
    description: 'Every component undergoes rigorous quality testing to ensure reliability and safety during use.'
  },
  {
    icon: '🌱',
    title: 'Eco-Friendly, Sustainable Packaging',
    description: 'Our commitment to the environment includes sustainable, recyclable packaging materials.'
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const SafetySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-[#1a1a2e] relative">
      <div className="container mx-auto px-5 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-16 text-shadow-cyan"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Safety Comes First
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-cyan-400/5 border border-cyan-400/20 rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 group"
              variants={itemVariants}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-cyan-400 text-xl font-semibold mb-4 text-shadow-cyan">
                {feature.title}
              </h3>

              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SafetySection
