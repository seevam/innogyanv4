'use client';

import { useState } from 'react';

export default function LifetimeSkills() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 5;

  const skillsData = [
    {
      title: "Designed by Experts",
      subtitle: "Neural-Powered Learning", 
      description: "Our AI-enhanced curriculum is crafted by leading technologists and educators who understand how kids learn best.",
      features: ["AI-Enhanced", "Expert Crafted", "Age-Appropriate"],
      color: "blue",
      icon: "🧠"
    },
    {
      title: "Approved by Kids!",
      subtitle: "Kid-Tested Innovation",
      description: "Every project goes through rigorous testing with our community of young innovators.",
      features: ["Community Tested", "Fun-First", "Kid-Driven"],
      color: "orange", 
      icon: "🤖",
      featured: true
    },
    {
      title: "Inspiring Moments of Discovery",
      subtitle: "Breakthrough Moments",
      description: "Watch as complex concepts become crystal clear through interactive demonstrations.",
      features: ["Interactive", "Confidence Building", "STEM Focused"],
      color: "yellow",
      icon: "✨"
    },
    {
      title: "Accessible to All Minds",
      subtitle: "Inclusive Innovation",
      description: "Our adaptive learning approach ensures every child can participate and excel.",
      features: ["Adaptive", "Inclusive", "Personalized"],
      color: "green",
      icon: "🌟"
    },
    {
      title: "Future-Ready Skills",
      subtitle: "Tomorrow's Leaders",
      description: "Preparing young minds for careers that don't exist yet through foundational skills.",
      features: ["Future Skills", "Leadership", "Innovation"],
      color: "purple",
      icon: "🚀"
    }
  ];

  const updateCarousel = () => {
    const cardWidth = window.innerWidth <= 768 ? 320 : 430;
    const containerWidth = 1200; // max container width
    const offset = (containerWidth - cardWidth) / 2;
    const translateX = -currentSlide * cardWidth + offset;
    
    return translateX;
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="lifetime-skills-section-enhanced" id="lifetime-skills-enhanced">
      <div className="floating-tech-elements">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="tech-particle"></div>
        ))}
      </div>

      <div className="bouncing-element" style={{color: '#00ffff', top: '15%', left: '8%'}}>⚙️</div>
      <div className="bouncing-element" style={{color: '#ff00ff', top: '25%', right: '12%'}}>🚀</div>
      <div className="bouncing-element" style={{color: '#00ff88', bottom: '20%', left: '15%'}}>🔬</div>

      <div className="container">
        <div className="mission-header">
          <h2 className="mission-title">
            Build Skills That Will Last A <span className="highlight-innovator">Lifetime</span>
          </h2>
          <p className="mission-subtitle">
            Empowering the next generation of problem-solvers through cutting-edge technology and hands-on innovation.
          </p>
        </div>

        <div className="feature-cards-carousel">
          <div className="carousel-nav">
            <button className="carousel-btn" onClick={prevSlide} disabled={currentSlide === 0}>
              ‹
            </button>
            <button className="carousel-btn" onClick={nextSlide} disabled={currentSlide === totalSlides - 1}>
              ›
            </button>
          </div>

          <div className="carousel-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(${updateCarousel()}px)` }}
            >
              {skillsData.map((card, index) => (
                <div
                  key={index}
                  className={`feature-card ${card.featured ? 'featured-card' : ''} ${
                    index === currentSlide ? 'center' : ''
                  }`}
                >
                  <div className={`card-header ${card.color}`}>
                    <h3>{card.title}</h3>
                  </div>
                  <div className="card-image-container">
                    <div className="card-image">
                      <div className="image-placeholder">
                        <span className="image-icon">{card.icon}</span>
                        <div className="tech-grid-overlay"></div>
                      </div>
                      {card.featured && (
                        <div className="play-button-overlay">
                          <div className="play-icon">▶</div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="card-content">
                    <h4 className="card-title">{card.subtitle}</h4>
                    <p className="card-description">{card.description}</p>
                    <div className="card-features">
                      {card.features.map((feature, i) => (
                        <span key={i} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {skillsData.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="lifetime-skills-cta">
          <button className="cta-button-enhanced">
            Start Building The Future
          </button>
        </div>
      </div>
    </section>
  );
}
