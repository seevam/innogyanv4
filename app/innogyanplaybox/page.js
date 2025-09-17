'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import components normally
import PlayboxHeader from './components/PlayboxHeader';
import PlayboxHero from './components/PlayboxHero';
import HowItWorks from './components/HowItWorks';
import WhatYourChildBuilds from './components/WhatYourChildBuilds';
import PeekInsideBox from './components/PeekInsideBox';
import IndependentPlay from './components/IndependentPlay';
import LifetimeSkills from './components/LifetimeSkills';
import Benefits from './components/Benefits';
import Safety from './components/Safety';

export default function InnogyanPlaybox() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client flag when component mounts
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run client-side code when we're sure we're on the client
    if (!isClient || typeof window === 'undefined') return;

    const initializeClientFeatures = () => {
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

        // Only observe elements that exist
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => {
          if (el) observer.observe(el);
        });

        // Tech particles effect
        const createParticle = () => {
          try {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'fixed';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1';
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
                particle.parentNode.removeChild(particle);
              }
            };
          } catch (error) {
            // Silently handle particle creation errors
            console.warn('Particle creation failed:', error);
          }
        };

        // Create particles at intervals
        const particleInterval = setInterval(createParticle, 400);

        // Cleanup function
        return () => {
          observer.disconnect();
          clearInterval(particleInterval);
        };
      } catch (error) {
        console.error('Client features initialization failed:', error);
        return () => {}; // Return empty cleanup function
      }
    };

    const cleanup = initializeClientFeatures();
    
    return cleanup;
  }, [isClient]);

  // Show loading or basic content during SSR
  if (!isClient) {
    return (
      <div>
        <PlayboxHeader />
        <main>
          <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
            <PlayboxHero />
            <HowItWorks />
            <WhatYourChildBuilds />
            <PeekInsideBox />
            <IndependentPlay />
            <LifetimeSkills />
            <Benefits />
            <Safety />
          </div>
        </main>
      </div>
    );
  }

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
