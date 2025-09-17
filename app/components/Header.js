'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
          <Link href="/">Home</Link>
          <Link href="/innogyanschool">For Schools</Link>
          <Link href="/innogyancollege">For Colleges</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo">
            <Link href="/" className="logo-link">
              <Image 
                src="https://i.postimg.cc/q71XVXvS/innogyan-logo-3.png" 
                alt="innogyan Logo" 
                width={32}
                height={32}
                className="logo-img"
                unoptimized
              />
            </Link>
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
