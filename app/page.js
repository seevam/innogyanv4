'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyInnogyan from './components/WhyInnogyan';
import LifetimeSkills from './components/LifetimeSkills';
import GettingStarted from './components/GettingStarted';
import FinalCTA from './components/FinalCTA';
import FloatingCTA from './components/FloatingCTA';
import Modal from './components/Modal';
import SuccessOverlay from './components/SuccessOverlay';
import './globals.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Scroll animations
  useEffect(() => {
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

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Tech particles effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.width = '2px';
      particle.style.height = '2px';
      particle.style.background = Math.random() > 0.5 ? '#00ffff' : '#ff00ff';
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '1';
      particle.style.boxShadow = `0 0 6px ${particle.style.background}`;
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = '-10px';
      document.body.appendChild(particle);

      const fallDuration = Math.random() * 3000 + 2000;
      const fallAnimation = particle.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 10}px)`, opacity: 0 }
      ], {
        duration: fallDuration,
        easing: 'linear'
      });

      fallAnimation.onfinish = () => particle.remove();
    };

    const particleInterval = setInterval(createParticle, 300);
    return () => clearInterval(particleInterval);
  }, []);

  // Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.main-nav');
      if (nav) {
        if (window.scrollY > 100) {
          nav.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
          nav.style.background = 'rgba(0, 0, 0, 0.9)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const showSuccess = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSuccessOpen(true);
      document.body.style.overflow = 'hidden';
    }, 500);
  };

  const closeSuccess = () => {
    setIsSuccessOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Header openModal={openModal} />
      <main>
        <Hero openModal={openModal} />
        <Products />
        <WhyInnogyan />
        <LifetimeSkills />
        <GettingStarted />
        <FinalCTA openModal={openModal} />
      </main>
      <FloatingCTA openModal={openModal} />
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onSuccess={showSuccess} 
      />
      <SuccessOverlay 
        isOpen={isSuccessOpen} 
        onClose={closeSuccess} 
      />
    </>
  );
}
