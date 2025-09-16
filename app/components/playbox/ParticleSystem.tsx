// components/playbox/ParticleSystem.tsx
'use client'

import { useEffect } from 'react'

export default function ParticleSystem() {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.style.position = 'fixed'
      particle.style.width = '2px'
      particle.style.height = '2px'
      particle.style.borderRadius = '50%'
      particle.style.pointerEvents = 'none'
      particle.style.zIndex = '1'
      
      const colors = ['#00ffff', '#ff00ff', '#00ff88', '#ffff00', '#ff6b35']
      const color = colors[Math.floor(Math.random() * colors.length)]
      
      particle.style.background = color
      particle.style.boxShadow = `0 0 6px ${color}`
      particle.style.left = Math.random() * window.innerWidth + 'px'
      particle.style.top = '-10px'
      
      document.body.appendChild(particle)

      const fallDuration = Math.random() * 3000 + 2000
      const fallAnimation = particle.animate([
        { 
          transform: 'translateY(0px) rotate(0deg)', 
          opacity: 1 
        },
        { 
          transform: `translateY(${window.innerHeight + 10}px) rotate(360deg)`, 
          opacity: 0 
        }
      ], {
        duration: fallDuration,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards'
      })

      fallAnimation.onfinish = () => particle.remove()
    }

    const interval = setInterval(createParticle, 400)
    
    for (let i = 0; i < 5; i++) {
      setTimeout(createParticle, i * 200)
    }

    return () => clearInterval(interval)
  }, [])

  return null
}
