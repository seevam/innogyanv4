// components/sections/playbox/IndependentPlaySection.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'

const benefits = [
  {
    title: 'Designed for Self-Paced Discovery',
    description: 'Each project is carefully designed to allow children to learn and explore at their own pace, building confidence through independent achievement.',
    icon: '🎯'
  },
  {
    title: 'Child-Friendly Instructions',
    description: 'Clear, visual instructions with simple language ensure that children can follow along without frustration or confusion.',
    icon: '📋'
  },
  {
    title: 'Minimal Parental Supervision',
    description: 'While parents can join the fun, these projects are designed for independent exploration, giving parents peace of mind.',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    title: 'Builds Confidence with Every Build',
    description: 'Each completed project reinforces problem-solving skills and builds the confidence to tackle increasingly complex challenges.',
    icon: '💪'
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const IndependentPlaySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#16213e] to-[#0f3460] relative">
      <div className="container mx-auto px-5">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your Child Can Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Independently</span>
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-black/60 border border-cyan-400/30 rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20 hover:border-purple-500/50 group"
              variants={itemVariants}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              <h3 className="text-cyan-400 text-xl font-semibold mb-4 text-shadow-cyan">
                {benefit.title}
              </h3>

              <p className="text-white/80 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default IndependentPlaySection
