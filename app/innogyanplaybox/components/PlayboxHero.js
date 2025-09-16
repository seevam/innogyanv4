'use client';

import { useState, useEffect } from 'react';

export default function PlayboxHero() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [userMinimized, setUserMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 968) return;
      
      const heroSection = document.querySelector('.hero');
      if (!heroSection) return;
      
      const heroRect = heroSection.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      
      if (!userMinimized) {
        if (scrolled > window.innerHeight * 0.8) {
          setIsMinimized(true);
        } else {
          setIsMinimized(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [userMinimized]);

  const toggleMinimized = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setUserMinimized(false);
    } else {
      setIsMinimized(true);
      setUserMinimized(true);
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Spark Creativity Early — One Box at a Time.</h1>
          <p>Hands-on science and innovation kits delivered home every 15 days — turning kids into confident young creators.</p>
        </div>
        
        <div className={`sticky-subscription ${isMinimized ? 'minimized' : ''}`} id="subscription-box">
          <button className="minimized-close" onClick={toggleMinimized}>×</button>
          <div className="subscription-main">
            <h3>Start Their Playbox Journey</h3>
            <div className="price">₹1,999/month</div>
            <a href="#" className="subscribe-btn">Subscribe Now</a>
          </div>
          <div className="subscription-details">
            <ul className="subscription-features">
              <li>Surprise box delivered every 15 days</li>
              <li>Screen-free, hands-on projects</li>
              <li>Cancel anytime</li>
            </ul>
            <div className="cancel-note">No commitment • Cancel anytime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
