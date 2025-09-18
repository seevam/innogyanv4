'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './playbox.css';

export default function InnogyanPlaybox() {
  const [isSubscriptionMinimized, setIsSubscriptionMinimized] = useState(false);
  const [userMinimized, setUserMinimized] = useState(false);
  const [currentBoxCategory, setCurrentBoxCategory] = useState(0);
  const [currentSkillsSlide, setCurrentSkillsSlide] = useState(0);
  
  const boxAutoSlideRef = useRef();
  const skillsAutoSlideRef = useRef();

  // Box categories data
  const boxCategories = ['stem-explorer', 'creative-builder', 'tech-innovator', 'science-lab', 'future-engineer'];
  const totalSkillsSlides = 5;

  // Box categories content
  const boxCategoriesData = [
    {
      id: 'stem-explorer',
      name: 'STEM Explorer',
      icon: '🤖',
      bgClass: 'stem-bg',
      title: 'Interactive Game Board',
      description: 'Press to place the marble on the board!',
      features: ['Ages 5+', 'Strategic Thinking', 'Hand-Eye Coordination'],
      projects: [
        'Build a mini sailboat',
        'Create a robotic hand',
        'Assemble a wind-powered car',
        'Experiment with simple circuits'
      ],
      floatingIcons: ['⚙️', '🔧', '🧩'],
      overlayText: 'Interactive Learning'
    },
    {
      id: 'creative-builder',
      name: 'Creative Builder',
      icon: '🔧',
      bgClass: 'creative-bg',
      title: 'Creative Construction Kit',
      description: 'Build amazing structures with digital precision!',
      features: ['Ages 6+', 'Creative Design', 'Spatial Reasoning'],
      projects: [
        'Design a smart home',
        'Build a holographic bridge',
        'Create AI-powered sculptures',
        'Construct a quantum marble run'
      ],
      floatingIcons: ['🏗️', '🎨', '📐'],
      overlayText: 'Creative Building'
    },
    {
      id: 'tech-innovator',
      name: 'Tech Innovator',
      icon: '💻',
      bgClass: 'tech-bg',
      title: 'Tech Innovation Lab',
      description: 'Code, create, and innovate with quantum technology!',
      features: ['Ages 8+', 'Programming', 'Digital Literacy'],
      projects: [
        'Program an AI assistant',
        'Create neural animations',
        'Build a quantum weather station',
        'Design holographic apps'
      ],
      floatingIcons: ['💻', '📱', '🤖'],
      overlayText: 'Tech Innovation'
    },
    {
      id: 'science-lab',
      name: 'Science Lab',
      icon: '⚗️',
      bgClass: 'science-bg',
      title: 'Quantum Science Lab',
      description: 'Explore digital chemistry through nano-experiments!',
      features: ['Ages 7+', 'Scientific Method', 'Observation Skills'],
      projects: [
        'Grow digital crystal gardens',
        'Create holographic eruptions',
        'Mix nano-polymer slime',
        'Build solar fusion reactors'
      ],
      floatingIcons: ['🔬', '⚗️', '🧪'],
      overlayText: 'Quantum Experiments'
    },
    {
      id: 'future-engineer',
      name: 'Future Engineer',
      icon: '⚡',
      bgClass: 'engineer-bg',
      title: 'Neural Engineering Kit',
      description: 'Solve tomorrow\'s problems with AI-powered engineering!',
      features: ['Ages 9+', 'Problem Solving', 'AI Design'],
      projects: [
        'Design quantum-proof towers',
        'Build neural filtration systems',
        'Create fusion energy models',
        'Engineer bionic prosthetics'
      ],
      floatingIcons: ['🏭', '⚡', '🌱'],
      overlayText: 'Neural Engineering'
    }
  ];

  // Skills carousel data
  const skillsCardsData = [
    {
      headerClass: 'blue',
      headerTitle: 'Designed by Experts',
      icon: '🧠',
      title: 'Neural-Powered Learning',
      description: 'Our AI-enhanced curriculum is crafted by leading technologists and educators who understand how kids learn best.',
      features: ['AI-Enhanced', 'Expert Crafted', 'Age-Appropriate'],
      isFeatured: false,
      hasPlayButton: false
    },
    {
      headerClass: 'orange',
      headerTitle: 'Approved by Kids!',
      icon: '🤖',
      title: 'Kid-Tested Innovation',
      description: 'Every project goes through rigorous testing with our community of young innovators.',
      features: ['Community Tested', 'Fun-First', 'Kid-Driven'],
      isFeatured: true,
      hasPlayButton: true
    },
    {
      headerClass: 'yellow',
      headerTitle: 'Inspiring Moments of Discovery',
      icon: '✨',
      title: 'Breakthrough Moments',
      description: 'Watch as complex concepts become crystal clear through interactive demonstrations.',
      features: ['Interactive', 'Confidence Building', 'STEM Focused'],
      isFeatured: false,
      hasPlayButton: false
    },
    {
      headerClass: 'green',
      headerTitle: 'Accessible to All Minds',
      icon: '🌟',
      title: 'Inclusive Innovation',
      description: 'Our adaptive learning approach ensures every child can participate and excel.',
      features: ['Adaptive', 'Inclusive', 'Personalized'],
      isFeatured: false,
      hasPlayButton: false
    },
    {
      headerClass: 'purple',
      headerTitle: 'Future-Ready Skills',
      icon: '🚀',
      title: 'Tomorrow\'s Leaders',
      description: 'Preparing young minds for careers that don\'t exist yet through foundational skills.',
      features: ['Future Skills', 'Leadership', 'Innovation'],
      isFeatured: false,
      hasPlayButton: false
    }
  ];

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

  // Sticky subscription box behavior
  useEffect(() => {
    const handleSubscriptionBox = () => {
      const subscriptionBox = document.getElementById('subscription-box');
      const heroSection = document.querySelector('.hero');
      
      if (subscriptionBox && heroSection && window.innerWidth > 968 && !userMinimized) {
        const heroRect = heroSection.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        
        if (heroRect.bottom <= 100) {
          if (scrolled > window.innerHeight * 0.8) {
            setIsSubscriptionMinimized(true);
          } else {
            setIsSubscriptionMinimized(false);
          }
        } else {
          setIsSubscriptionMinimized(false);
        }
      }
    };

    window.addEventListener('scroll', handleSubscriptionBox);
    window.addEventListener('resize', handleSubscriptionBox);

    return () => {
      window.removeEventListener('scroll', handleSubscriptionBox);
      window.removeEventListener('resize', handleSubscriptionBox);
    };
  }, [userMinimized]);

  // Tech particles effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = randomColor;
      particle.style.boxShadow = `0 0 6px ${randomColor}`;
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = '-10px';
      particle.style.width = Math.random() * 3 + 2 + 'px';
      particle.style.height = particle.style.width;
      document.body.appendChild(particle);

      const fallDuration = Math.random() * 3000 + 2000;
      const fallAnimation = particle.animate([
        { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 10}px) rotate(360deg)`, opacity: 0 }
      ], {
        duration: fallDuration,
        easing: 'linear'
      });

      fallAnimation.onfinish = () => {
        if (particle.parentNode) {
          particle.remove();
        }
      };
    };

    const particleInterval = setInterval(createParticle, 400);
    return () => clearInterval(particleInterval);
  }, []);

  // Box category auto-slide
  useEffect(() => {
    const startBoxAutoSlide = () => {
      boxAutoSlideRef.current = setInterval(() => {
        setCurrentBoxCategory(prev => (prev + 1) % boxCategories.length);
      }, 5000);
    };

    const stopBoxAutoSlide = () => {
      if (boxAutoSlideRef.current) {
        clearInterval(boxAutoSlideRef.current);
      }
    };

    startBoxAutoSlide();
    
    return () => stopBoxAutoSlide();
  }, []);

  // Skills carousel auto-slide
  useEffect(() => {
    const startSkillsAutoSlide = () => {
      skillsAutoSlideRef.current = setInterval(() => {
        setCurrentSkillsSlide(prev => (prev + 1) % totalSkillsSlides);
      }, 4000);
    };

    startSkillsAutoSlide();
    
    return () => {
      if (skillsAutoSlideRef.current) {
        clearInterval(skillsAutoSlideRef.current);
      }
    };
  }, []);

  // Update skills carousel
  useEffect(() => {
    const track = document.getElementById('skillsCarouselTrack');
    if (!track) return;
    
    const cardWidth = window.innerWidth <= 768 ? 320 : 430;
    const containerWidth = track.parentElement.offsetWidth;
    const offset = (containerWidth - cardWidth) / 2;
    const translateX = -currentSkillsSlide * cardWidth + offset;
    
    track.style.transform = `translateX(${translateX}px)`;
  }, [currentSkillsSlide]);

  const toggleMinimized = () => {
    setUserMinimized(!userMinimized);
    setIsSubscriptionMinimized(!isSubscriptionMinimized);
  };

  const handleBoxCategoryClick = (index) => {
    setCurrentBoxCategory(index);
    // Restart auto-slide after manual interaction
    if (boxAutoSlideRef.current) {
      clearInterval(boxAutoSlideRef.current);
      setTimeout(() => {
        boxAutoSlideRef.current = setInterval(() => {
          setCurrentBoxCategory(prev => (prev + 1) % boxCategories.length);
        }, 5000);
      }, 3000);
    }
  };

  const handleSkillsSlideChange = (index) => {
    setCurrentSkillsSlide(index);
    // Restart auto-slide after manual interaction
    if (skillsAutoSlideRef.current) {
      clearInterval(skillsAutoSlideRef.current);
      setTimeout(() => {
        skillsAutoSlideRef.current = setInterval(() => {
          setCurrentSkillsSlide(prev => (prev + 1) % totalSkillsSlides);
        }, 4000);
      }, 3000);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCTAClick = (e) => {
    e.preventDefault();
    
    // Create ripple effect
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    button.style.position = 'relative';
    button.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <Link href="/" className="logo">
            <span className="rocket">🚀</span>
            innogyan PLAYBOX
          </Link>
          <div className="nav-links">
            <a onClick={() => scrollToSection('#how-it-works')}>How It Works</a>
            <a onClick={() => scrollToSection('#projects')}>Projects</a>
            <a onClick={() => scrollToSection('#benefits')}>Benefits</a>
            <a onClick={() => scrollToSection('#safety')}>Safety</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Spark Creativity Early — One Box at a Time.</h1>
            <p>Hands-on science and innovation kits delivered home every 15 days — turning kids into confident young creators.</p>
          </div>
          
          <div 
            className={`sticky-subscription ${isSubscriptionMinimized ? 'minimized' : ''}`} 
            id="subscription-box"
          >
            <button className="minimized-close" onClick={toggleMinimized}>×</button>
            <div className="subscription-main">
              <h3>Start Their Playbox Journey</h3>
              <div className="price">₹1,999/month</div>
              <a href="#" className="subscribe-btn" onClick={handleCTAClick}>Subscribe Now</a>
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

      {/* How It Works Section */}
      <section className="section how-it-works" id="how-it-works">
        <div className="container">
          <h2 className="section-title fade-in">Surprise. Build. Learn. Repeat.</h2>
          <div className="steps-grid">
            <div className="step-card fade-in">
              <div className="step-number">1</div>
              <h3>Every 15 days, a surprise box arrives</h3>
              <p>Anticipation builds as each carefully curated box arrives at your doorstep with new adventures inside.</p>
            </div>
            
            <div className="step-card fade-in">
              <div className="step-number">2</div>
              <h3>Each box contains a new hands-on building project</h3>
              <p>Discover exciting STEM projects designed to challenge and inspire young minds through creative building.</p>
            </div>
            
            <div className="step-card fade-in">
              <div className="step-number">3</div>
              <h3>Simple instructions, zero screens, fully interactive</h3>
              <p>Child-friendly guides ensure independent learning without digital distractions, fostering real-world skills.</p>
            </div>
            
            <div className="step-card fade-in">
              <div className="step-number">4</div>
              <h3>30–60 minutes of daily discovery over 15 days</h3>
              <p>Perfect project pacing that fits into busy schedules while maintaining engagement and learning momentum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Child Builds */}
      <section className="section builds-section" id="projects">
        <div className="container">
          <h2 className="section-title fade-in">Tinker Today. Think Like A Creator Tomorrow.</h2>
          <div className="builds-grid">
            <div className="build-category fade-in">
              <h3>🔬 Science Experiments</h3>
              <p>Explore the wonders of physics, chemistry, and biology through safe, hands-on experiments.</p>
            </div>
            
            <div className="build-category fade-in">
              <h3>⚙️ Engineering Models</h3>
              <p>Build mechanical wonders and learn how things work through practical engineering challenges.</p>
            </div>
            
            <div className="build-category fade-in">
              <h3>🎨 Design Projects</h3>
              <p>Create beautiful and functional designs while developing aesthetic sense and problem-solving skills.</p>
            </div>
            
            <div className="build-category fade-in">
              <h3>🧩 Fun Challenges & Brain-teasers</h3>
              <p>Engage in puzzles and challenges that develop critical thinking and logical reasoning abilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* A Peek Inside The Box Section */}
      <section className="section peek-inside-box" id="peek-inside-box">
        <div className="container">
          <h2 className="section-title fade-in">A Peek Inside The Box ⭐</h2>
          <p className="section-subtitle fade-in">Encouraging kids to become problem-solvers as they explore cutting-edge technology...</p>
          
          {/* Category Navigation */}
          <div className="box-category-nav fade-in">
            {boxCategoriesData.map((category, index) => (
              <button
                key={category.id}
                className={`box-category-btn ${currentBoxCategory === index ? 'active' : ''}`}
                onClick={() => handleBoxCategoryClick(index)}
              >
                <span className="box-category-icon">{category.icon}</span>
                <span className="box-category-name">{category.name}</span>
                <div className="box-category-indicator"></div>
              </button>
            ))}
          </div>

          {/* Box Content Slides */}
          <div className="box-content-container">
            <div className="box-slides">
              {boxCategoriesData.map((category, index) => (
                <div
                  key={category.id}
                  className={`box-slide ${currentBoxCategory === index ? 'active' : ''}`}
                  data-category={category.id}
                >
                  <div className={`box-background ${category.bgClass}`}></div>
                  <div className="box-content">
                    <div className="box-left">
                      <div className="box-header">
                        <h3>{category.title}</h3>
                        <p className="box-description">{category.description}</p>
                      </div>
                      <div className="box-features">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="feature-tag">{feature}</div>
                        ))}
                      </div>
                      <button className="box-learn-more">Learn More</button>
                      <div className="box-projects">
                        <h4>What's Inside:</h4>
                        <ul className="projects-list">
                          {category.projects.map((project, projectIndex) => (
                            <li key={projectIndex}>
                              <span className="project-bullet">▶</span>
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="box-right">
                      <div className="box-image">
                        <div className="tech-grid"></div>
                        <div className="floating-icons">
                          {category.floatingIcons.map((icon, iconIndex) => (
                            <div key={iconIndex} className="float-icon">{icon}</div>
                          ))}
                        </div>
                        <div className="main-image">
                          <div className="circuit-pattern"></div>
                          <div className="image-overlay">
                            <span>{category.overlayText}</span>
                          </div>
                        </div>
                        <div className="activity-indicator"></div>
                        <div className="holographic-border"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="box-progress-dots">
            {boxCategoriesData.map((_, index) => (
              <button
                key={index}
                className={`box-progress-dot ${currentBoxCategory === index ? 'active' : ''}`}
                onClick={() => handleBoxCategoryClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Independent Play Assurance */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title fade-in">Your Child Can Build Independently</h2>
          <div className="benefits-grid">
            <div className="benefit-card fade-in">
              <h3>Designed for Self-Paced Discovery</h3>
              <p>Each project is carefully designed to allow children to learn and explore at their own pace, building confidence through independent achievement.</p>
            </div>
            
            <div className="benefit-card fade-in">
              <h3>Child-Friendly Instructions</h3>
              <p>Clear, visual instructions with simple language ensure that children can follow along without frustration or confusion.</p>
            </div>
            
            <div className="benefit-card fade-in">
              <h3>Minimal Parental Supervision</h3>
              <p>While parents can join the fun, these projects are designed for independent exploration, giving parents peace of mind.</p>
            </div>
            
            <div className="benefit-card fade-in">
              <h3>Builds Confidence with Every Build</h3>
              <p>Each completed project reinforces problem-solving skills and builds the confidence to tackle increasingly complex challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Skills That Will Last A Lifetime Section */}
      <section className="lifetime-skills-section-enhanced" id="lifetime-skills-enhanced">
        {/* Floating Tech Elements */}
        <div className="floating-tech-elements">
          <div className="tech-particle"></div>
          <div className="tech-particle"></div>
          <div className="tech-particle"></div>
          <div className="tech-particle"></div>
          <div className="tech-particle"></div>
          <div className="tech-particle"></div>
        </div>

        {/* Bouncing Decorative Elements */}
        <div className="bouncing-element" style={{color: '#00ffff'}}>⚙️</div>
        <div className="bouncing-element" style={{color: '#ff00ff'}}>🚀</div>
        <div className="bouncing-element" style={{color: '#00ff88'}}>🔬</div>

        <div className="container">
          {/* Mission Statement Header */}
          <div className="mission-header">
            <h2 className="mission-title">
              Build Skills That Will Last A <span className="highlight-innovator">Lifetime</span>
            </h2>
            <p className="mission-subtitle">
              Empowering the next generation of problem-solvers through cutting-edge technology and hands-on innovation. Every project builds confidence, creativity, and critical thinking skills.
            </p>
          </div>

          {/* Feature Cards Carousel */}
          <div className="feature-cards-carousel">
            {/* Carousel Navigation */}
            <div className="carousel-nav">
              <button 
                className="carousel-btn" 
                onClick={() => handleSkillsSlideChange(Math.max(0, currentSkillsSlide - 1))}
                disabled={currentSkillsSlide === 0}
              >
                ‹
              </button>
              <button 
                className="carousel-btn"
                onClick={() => handleSkillsSlideChange(Math.min(totalSkillsSlides - 1, currentSkillsSlide + 1))}
                disabled={currentSkillsSlide === totalSkillsSlides - 1}
              >
                ›
              </button>
            </div>

            {/* Carousel Container */}
            <div className="carousel-container">
              <div className="carousel-track" id="skillsCarouselTrack">
                {skillsCardsData.map((card, index) => (
                  <div 
                    key={index}
                    className={`feature-card ${card.isFeatured ? 'featured-card' : ''} ${currentSkillsSlide === index ? 'center' : ''}`}
                    data-index={index}
                  >
                    <div className={`card-header ${card.headerClass}`}>
                      <h3>{card.headerTitle}</h3>
                    </div>
                    <div className="card-image-container">
                      <div className="card-image">
                        <div className="image-placeholder">
                          <span className="image-icon">{card.icon}</span>
                          <div className="tech-grid-overlay"></div>
                        </div>
                        {card.hasPlayButton && (
                          <div className="play-button-overlay" onClick={handleCTAClick}>
                            <div className="play-icon">▶</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="card-content">
                      <h4 className="card-title">{card.title}</h4>
                      <p className="card-description">{card.description}</p>
                      <div className="card-features">
                        {card.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="feature-tag">{feature}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="carousel-dots">
              {Array.from({length: totalSkillsSlides}, (_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${currentSkillsSlide === index ? 'active' : ''}`}
                  onClick={() => handleSkillsSlideChange(index)}
                ></button>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="lifetime-skills-cta">
            <button className="cta-button-enhanced" onClick={handleCTAClick}>
              Start Building The Future
            </button>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section benefits-section" id="benefits">
        <div className="container">
          <h2 className="section-title fade-in">Build Skills That Will Last A Lifetime</h2>
          <div className="benefits-grid">
            <div className="benefit-card fade-in">
              <h3>Creative Problem-Solving</h3>
              <p>Develop the ability to think outside the box and find innovative solutions to complex challenges through hands-on experimentation.</p>
            </div>
            
            <div className="benefit-card fade-in">
              <h3>Logical Thinking</h3>
              <p>Build systematic thinking patterns and analytical skills that form the foundation for mathematical and scientific reasoning.</p>
            </div>
            
            <div className="benefit-card fade-in">
              <h3>Early Science & Engineering Foundations</h3>
              <p>Establish a strong base in STEM concepts through practical application and experiential learning rather than theoretical study.</p>
            </div>
            
            <div className="benefit-card fade-in">
              <h3>Motor Skills & Cognitive Development</h3>
              <p>Enhance fine motor skills and hand-eye coordination while strengthening neural pathways crucial for overall development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Matters */}
      <section className="section safety-section" id="safety">
        <div className="container">
          <h2 className="section-title fade-in">Safety Comes First</h2>
          <div className="safety-features">
            <div className="safety-feature fade-in">
              <span className="safety-icon">🛡️</span>
              <h3>Child-Safe, Certified Materials</h3>
              <p>All materials meet strict safety standards and are tested for child safety and durability.</p>
            </div>
            
            <div className="safety-feature fade-in">
              <span className="safety-icon">✅</span>
              <h3>Quality-Tested Components</h3>
              <p>Every component undergoes rigorous quality testing to ensure reliability and safety during use.</p>
            </div>
            
            <div className="safety-feature fade-in">
              <span className="safety-icon">🌱</span>
              <h3>Eco-Friendly, Sustainable Packaging</h3>
              <p>Our commitment to the environment includes sustainable, recyclable packaging materials.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
