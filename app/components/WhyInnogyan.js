'use client';

import { useState, useEffect } from 'react';

export default function WhyInnogyan() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "The Future Belongs To Builders",
      description: "AI and automation will replace basic skills — but innovators will imagine, create, and lead the future.",
      feature: "Future-ready skills today",
      icon: "⚡",
      visual: "skills-orbit"
    },
    {
      title: "Degrees Alone Aren't Enough",
      description: "Top universities and companies no longer ask what they scored — they ask: What have you built?",
      feature: "Preserve natural creativity",
      icon: "🎨",
      visual: "creativity-wave"
    },
    {
      title: "Hands-On Learning Works",
      description: "Students retain 90% through hands-on experience vs. 10% from lectures. We make learning stick.",
      feature: "Build to understand",
      icon: "🛠️",
      visual: "learning-pyramid"
    },
    {
      title: "Real Problems, Real Impact",
      description: "Our young innovators tackle genuine problems that matter, building confidence and real-world experience.",
      feature: "Make a difference",
      icon: "🌍",
      visual: "impact-counter"
    }
  ];

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(autoPlayInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderVisual = (visual) => {
    switch (visual) {
      case 'skills-orbit':
        return (
          <div className="future-skills-visual">
            <div className="skills-orbit">
              87%
              <div className="skill-dot"></div>
              <div className="skill-dot"></div>
              <div className="skill-dot"></div>
              <div className="skill-dot"></div>
            </div>
          </div>
        );
      case 'creativity-wave':
        return (
          <div className="creativity-wave">
            <div className="wave-line"></div>
            <div className="wave-line"></div>
            <div className="wave-line"></div>
            <div className="creativity-text">Creativity Level</div>
          </div>
        );
      case 'learning-pyramid':
        return (
          <div className="learning-pyramid-3d">
            <div className="pyramid-face">90%</div>
            <div className="pyramid-face">70%</div>
            <div className="pyramid-face">30%</div>
            <div className="pyramid-face">10%</div>
          </div>
        );
      case 'impact-counter':
        return (
          <div className="impact-counter">
            <div className="impact-rings">
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="why-innogyan" id="why-innogyan">
      <div className="container">
        <div className="why-header fade-in">
          <h2 className="why-title">
            What <span className="highlight">Future</span> Demands!
          </h2>
          <p className="why-subtitle">The world your child will enter is not the world you grew up in.</p>
        </div>

        <div className="carousel-3d-container fade-in">
          <div className="carousel-3d-wrapper" style={{ transform: `rotateY(${-currentSlide * 90}deg)` }}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-3d-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ transform: `rotateY(${index * 90}deg) translateZ(400px)` }}
              >
                <div className="slide-3d-visual">
                  {renderVisual(slide.visual)}
                </div>
                <div className="slide-3d-content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <div className="slide-3d-feature">
                    <span>{slide.icon}</span>
                    <span>{slide.feature}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-3d-controls">
          <button className="carousel-3d-btn prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="carousel-3d-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator-3d ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          
          <button className="carousel-3d-btn next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .why-innogyan {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          perspective: 1000px;
        }

        .why-innogyan::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.05) 0%, transparent 50%);
          animation: backgroundShift 20s infinite linear;
        }

        @keyframes backgroundShift {
          0% { transform: translateX(-100px) translateY(-100px); }
          50% { transform: translateX(100px) translateY(50px); }
          100% { transform: translateX(-100px) translateY(-100px); }
        }

        .why-header {
          text-align: center;
          margin-bottom: 120px;
          position: relative;
          z-index: 2;
        }

        .why-title {
          font-size: clamp(40px, 8vw, 72px);
          font-weight: 900;
          color: #00ffff;
          margin-bottom: 20px;
          text-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
        }

        .highlight {
          background: linear-gradient(45deg, #00ffff, #ff00ff, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: highlightShimmer 3s infinite;
          background-size: 200% 200%;
        }

        @keyframes highlightShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .why-subtitle {
          font-size: clamp(18px, 4vw, 24px);
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .carousel-3d-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          height: 500px;
          perspective: 1200px;
          z-index: 2;
        }

        .carousel-3d-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-3d-slide {
          position: absolute;
          width: 320px;
          height: 450px;
          left: 50%;
          top: 50%;
          margin-left: -160px;
          margin-top: -225px;
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1));
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 25px;
          backdrop-filter: blur(20px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          transform-style: preserve-3d;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-3d-slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00ffff, #ff00ff);
          border-radius: 25px 25px 0 0;
        }

        .carousel-3d-slide.active {
          box-shadow: 0 35px 70px rgba(0, 255, 255, 0.4);
          border-color: rgba(0, 255, 255, 0.6);
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(255, 0, 255, 0.15));
        }

        .slide-3d-visual {
          margin-bottom: 25px;
          position: relative;
          min-height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skills-orbit {
          width: 150px;
          height: 150px;
          border: 2px solid rgba(0, 255, 255, 0.3);
          border-radius: 50%;
          position: relative;
          animation: rotate 10s infinite linear;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 900;
          color: #00ffff;
          text-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .skill-dot {
          width: 12px;
          height: 12px;
          background: #ff00ff;
          border-radius: 50%;
          position: absolute;
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.7);
        }

        .skill-dot:nth-child(2) { top: -6px; left: 50%; transform: translateX(-50%); }
        .skill-dot:nth-child(3) { right: -6px; top: 50%; transform: translateY(-50%); }
        .skill-dot:nth-child(4) { bottom: -6px; left: 50%; transform: translateX(-50%); }
        .skill-dot:nth-child(5) { left: -6px; top: 50%; transform: translateY(-50%); }

        .creativity-wave {
          width: 180px;
          height: 100px;
          position: relative;
        }

        .wave-line {
          position: absolute;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #4ecdc4, #ffd700, #ff6b6b);
          border-radius: 3px;
          animation: wave 3s ease-in-out infinite;
        }

        .wave-line:nth-child(1) { top: 20px; animation-delay: 0s; }
        .wave-line:nth-child(2) { top: 40px; animation-delay: 0.5s; }
        .wave-line:nth-child(3) { top: 60px; animation-delay: 1s; }

        @keyframes wave {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(0.7); opacity: 0.6; }
        }

        .creativity-text {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 14px;
          color: #00ffff;
          font-weight: 600;
        }

        .learning-pyramid-3d {
          width: 140px;
          height: 140px;
          position: relative;
          transform-style: preserve-3d;
          animation: pyramidRotate 8s infinite linear;
        }

        @keyframes pyramidRotate {
          0% { transform: rotateY(0deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(10deg); }
        }

        .pyramid-face {
          position: absolute;
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .pyramid-face:nth-child(1) {
          width: 140px;
          height: 30px;
          top: 0;
          transform: rotateX(90deg) translateZ(15px);
        }

        .pyramid-face:nth-child(2) {
          width: 120px;
          height: 30px;
          top: 30px;
          left: 10px;
          transform: rotateX(90deg) translateZ(15px);
        }

        .pyramid-face:nth-child(3) {
          width: 100px;
          height: 30px;
          top: 60px;
          left: 20px;
          transform: rotateX(90deg) translateZ(15px);
        }

        .pyramid-face:nth-child(4) {
          width: 80px;
          height: 30px;
          top: 90px;
          left: 30px;
          transform: rotateX(90deg) translateZ(15px);
        }

        .impact-counter {
          text-align: center;
        }

        .impact-rings {
          width: 120px;
          height: 120px;
          position: relative;
          margin: 0 auto 20px;
        }

        .ring {
          position: absolute;
          border: 2px solid rgba(0, 255, 255, 0.3);
          border-radius: 50%;
          animation: ripple 3s infinite;
        }

        .ring:nth-child(1) {
          width: 40px;
          height: 40px;
          top: 40px;
          left: 40px;
          animation-delay: 0s;
        }

        .ring:nth-child(2) {
          width: 80px;
          height: 80px;
          top: 20px;
          left: 20px;
          animation-delay: 1s;
        }

        .ring:nth-child(3) {
          width: 120px;
          height: 120px;
          top: 0;
          left: 0;
          animation-delay: 2s;
        }

        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        .slide-3d-content h3 {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 15px;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }

        .slide-3d-content p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .slide-3d-feature {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0, 255, 255, 0.2);
          border: 1px solid rgba(0, 255, 255, 0.4);
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #00ffff;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        .carousel-3d-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          margin-top: 60px;
          position: relative;
          z-index: 3;
        }

        .carousel-3d-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(0, 255, 255, 0.1);
          border: 2px solid rgba(0, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #00ffff;
          backdrop-filter: blur(10px);
        }

        .carousel-3d-btn:hover {
          background: rgba(0, 255, 255, 0.2);
          border-color: rgba(0, 255, 255, 0.6);
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 255, 255, 0.3);
        }

        .carousel-3d-indicators {
          display: flex;
          gap: 15px;
        }

        .indicator-3d {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: rgba(0, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .indicator-3d.active {
          background: #00ffff;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.7);
          transform: scale(1.3);
        }

        .indicator-3d::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 25px;
          height: 25px;
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .indicator-3d.active::before {
          opacity: 1;
          animation: indicatorPulse 2s infinite;
        }

        @keyframes indicatorPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }

        @media (max-width: 768px) {
          .carousel-3d-container {
            height: 400px;
            perspective: 800px;
          }
          
          .carousel-3d-slide {
            width: 280px;
            height: 380px;
            margin-left: -140px;
            margin-top: -190px;
            padding: 30px 20px;
          }
          
          .slide-3d-visual {
            min-height: 120px;
            margin-bottom: 20px;
          }
          
          .slide-3d-content h3 {
            font-size: 20px;
            margin-bottom: 12px;
          }
          
          .slide-3d-content p {
            font-size: 13px;
            margin-bottom: 15px;
          }
          
          .skills-orbit {
            width: 120px;
            height: 120px;
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
