
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header({ openModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Pre-header */}
      <div className="pre-header">
        <div className="container">
          <a href="/index.html">Home</a>
          <a href="/innogyanschool.html">For Schools</a>
          <a href="/innogyancollege.html">For Colleges</a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo">
            <a href="/" className="logo-link">
              <Image 
                src="https://i.postimg.cc/q71XVXvS/innogyan-logo-3.png" 
                alt="innogyan Logo" 
                width={32}
                height={32}
                className="logo-img"
              />
            </a>
          </div>

          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollToSection('#products')}>Programs</a>
            <a onClick={() => scrollToSection('#why-innogyan')}>How It Works</a>
            <a onClick={() => scrollToSection('#lifetime-skills')}>Our Story</a>
          </div>
          
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            ☰
          </button>
        </div>
      </nav>
    </>
  );
}
