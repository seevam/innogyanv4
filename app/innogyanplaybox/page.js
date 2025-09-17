'use client';

import { useState, useEffect } from 'react';
import PlayboxHeader from './components/PlayboxHeader';
import PlayboxHero from './components/PlayboxHero';
import HowItWorks from './components/HowItWorks';
import WhatYourChildBuilds from './components/WhatYourChildBuilds';
import PeekInsideBox from './components/PeekInsideBox';
import IndependentPlay from './components/IndependentPlay';
import LifetimeSkills from './components/LifetimeSkills';
import Benefits from './components/Benefits';
import Safety from './components/Safety';
// Remove the CSS import completely

export default function InnogyanPlaybox() {
  useEffect(() => {
    // Add error boundaries and null checks
    try {
      // Scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(el => {
        observer.observe(el);
      });

      // Tech particles effect
      const createParticle = () => {
        if (typeof window === 'undefined') return;
        
        try {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.background = Math.random() > 0.5 ? '#00ffff' : '#ff00ff';
          particle.style.boxShadow = `0 0 6px ${particle.style.background}`;
          particle.style.left = Math.random() * window.innerWidth + 'px';
          particle.style.top = '-10px';
          
          if (document.body) {
            document.body.appendChild(particle);
          }

          const fallDuration = Math.random() * 3000 + 2000;
          const fallAnimation = particle.animate([
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 10}px)`, opacity: 0 }
          ], {
            duration: fallDuration,
            easing: 'linear'
          });

          fallAnimation.onfinish = () => {
            if (particle && particle.parentNode) {
              particle.remove();
            }
          };
        } catch (error) {
          console.warn('Particle creation failed:', error);
        }
      };

      const particleInterval = setInterval(createParticle, 400);

      return () => {
        observer.disconnect();
        clearInterval(particleInterval);
      };
    } catch (error) {
      console.error('Playbox useEffect error:', error);
    }
  }, []);

  return (
    <>
      <PlayboxHeader />
      <main>
        <PlayboxHero />
        <HowItWorks />
        <WhatYourChildBuilds />
        <PeekInsideBox />
        <IndependentPlay />
        <LifetimeSkills />
        <Benefits />
        <Safety />
      </main>
    </>
  );
}
