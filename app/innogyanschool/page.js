'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './school.css';

export default function InnogyanSchool() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const particleInterval = setInterval(createParticle, 800);
    return () => clearInterval(particleInterval);
  }, []);

  // Header scroll effect
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interactive card effects
  useEffect(() => {
    const addCardEffects = () => {
      document.querySelectorAll('.benefit-card, .step-card, .club-card, .delivery-item').forEach(card => {
        const handleMouseEnter = function() {
          this.style.willChange = 'transform';
          this.style.transform = 'translateY(-10px) scale(1.02)';
        };
        
        const handleMouseLeave = function() {
          this.style.transform = 'translateY(0) scale(1)';
          setTimeout(() => {
            this.style.willChange = 'auto';
          }, 300);
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
        
        // Cleanup function will be handled by React's cleanup
      });
    };

    // Add effects after a short delay to ensure elements are rendered
    const timer = setTimeout(addCardEffects, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
      
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const benefitsData = [
    { 
      icon: '🎯', 
      title: 'Attract Top-Tier Students', 
      desc: 'Draw students targeting top global universities with our innovation-first approach and real-world project portfolios.' 
    },
    { 
      icon: '📁', 
      title: 'Build Real Portfolios', 
      desc: 'Students create tangible portfolios that strengthen college applications with prototypes, research, and startup pitches.' 
    },
    { 
      icon: '🏆', 
      title: 'Innovation-First Institution', 
      desc: 'Differentiate your school as a leader in innovation education and future-ready skill development.' 
    },
    { 
      icon: '📚', 
      title: 'NEP 2020 Compliance', 
      desc: 'Meet national education policy requirements with focus on real-world skills and experiential learning.' 
    },
    { 
      icon: '👨‍👩‍👧‍👦', 
      title: 'Parent Satisfaction', 
      desc: 'Deliver visible outcomes that parents value - tangible skills and projects their children can showcase.' 
    }
  ];

  const clubsData = [
    { emoji: '🧠', name: 'SolveSpace Club', desc: 'Design Thinking & Problem Solving' },
    { emoji: '💻', name: 'Bit Builders Club', desc: 'Coding, AI & Digital Skills' },
    { emoji: '🧪', name: 'Curiosity Club', desc: 'Research & Inquiry' },
    { emoji: '🚀', name: 'Venture Garage Club', desc: 'Entrepreneurship & Innovation' },
    { emoji: '🎨', name: 'Pixel Playhouse Club', desc: 'Visual Design & Communication' },
    { emoji: '🛠', name: 'Tinker Tank Club', desc: 'Engineering, Robotics & Prototyping' },
    { emoji: '📣', name: 'Story Circuit Club', desc: 'Writing & Public Speaking' },
    { emoji: '🌍', name: 'Impact Foundry Club', desc: 'Social Impact & Sustainability' }
  ];

  const stepsData = [
    { 
      num: 1, 
      title: 'Fully Designed Curriculum', 
      desc: 'Complete curriculum with project modules, learning objectives, and assessment frameworks ready for implementation.' 
    },
    { 
      num: 2, 
      title: 'Flexible Delivery Models', 
      desc: 'On-campus or hybrid delivery models that adapt to your school\'s schedule and infrastructure requirements.' 
    },
    { 
      num: 3, 
      title: 'Certified Facilitators', 
      desc: 'Trained innogyan facilitators and extensive mentor network provide expert guidance and support.' 
    },
    { 
      num: 4, 
      title: 'Teacher Training & Support', 
      desc: 'Comprehensive teacher training and capacity-building support to empower your existing faculty.' 
    },
    { 
      num: 5, 
      title: 'AI-Powered Tracking', 
      desc: 'Advanced student tracking and reporting system provides insights for school leadership and parents.' 
    }
  ];

  const whyPartnerData = [
    { 
      icon: '✅', 
      title: '100% NEP 2020 Aligned', 
      desc: 'Fully compliant with National Education Policy 2020 requirements and guidelines for modern education.' 
    },
    { 
      icon: '🌐', 
      title: 'Globally Competitive Profiles', 
      desc: 'Build student profiles that compete on the global stage with international universities and opportunities.' 
    },
    { 
      icon: '🏆', 
      title: 'National Visibility', 
      desc: 'Gain recognition through competitions, showcases, and media coverage of student achievements.' 
    },
    { 
      icon: '😊', 
      title: 'Parent Satisfaction', 
      desc: 'Deliver measurable, real-world outcomes that parents can see and appreciate in their children\'s development.' 
    },
    { 
      icon: '📈', 
      title: 'Brand Differentiation', 
      desc: 'Strong positioning for marketing, admissions, and school brand as an innovation leader in education.' 
    }
  ];

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

    // Navigate to contact section or mailto
    if (e.currentTarget.getAttribute('href') === '#contact') {
      scrollToSection('#contact');
    } else {
      window.location.href = 'mailto:partner@innogyan.com?subject=Partnership Inquiry';
    }
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <Link href="/" className="logo">
            <span className="rocket">🚀</span>
            innogyan
          </Link>
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollToSection('#why-schools')}>Why Schools</a>
            <a onClick={() => scrollToSection('#what-we-deliver')}>Programs</a>
            <a onClick={() => scrollToSection('#clubs')}>Innovation Clubs</a>
            <a onClick={() => scrollToSection('#how-it-works')}>How It Works</a>
            <a onClick={() => scrollToSection('#contact')} className="nav-cta">Partner With Us</a>
          </div>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Turn Your School Into An <span className="highlight">Innovation Campus</span>.</h1>
            <p>Future-ready programs, innovation clubs, and global mentorship — fully integrated inside your school.</p>
            <a href="#contact" onClick={handleCTAClick} className="hero-cta">
              Partner With innogyan
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">NEP 2020 Aligned</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Partner Schools</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Student Portfolios</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Expert Mentors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Schools Need This */}
      <section className="section why-schools" id="why-schools">
        <div className="container">
          <h2 className="section-title fade-in">Position Your School For Global Readiness</h2>
          <div className="benefits-grid">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="benefit-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="section what-we-deliver" id="what-we-deliver">
        <div className="container">
          <h2 className="section-title fade-in">What innogyan Delivers To Your School</h2>
          <div className="delivery-items">
            <div className="delivery-item fade-in">
              <div className="delivery-header">
                <span className="delivery-icon">🎯</span>
                <h3 className="delivery-title">Portfolio Development — Visible Outcomes For Each Student</h3>
              </div>
              <ul className="delivery-list">
                <li>Each student builds a personal digital portfolio with real-world projects</li>
                <li>Includes prototypes, research, presentations, startup pitches & designs</li>
                <li>Tangible proof for university admissions, competitions & internships</li>
                <li>Visibility for parents, universities, and recruiters</li>
              </ul>
            </div>

            <div className="delivery-item fade-in">
              <div className="delivery-header">
                <span className="delivery-icon">🧠</span>
                <h3 className="delivery-title">Mentorship — Real People + AI-Powered Growth</h3>
              </div>
              <ul className="delivery-list">
                <li>1:1 and small group mentorship from IIT, IIM & global alumni</li>
                <li>Weekly expert feedback and project reviews</li>
                <li>AI-powered learning coach tracks progress, nudges students, and personalizes learning</li>
                <li>A powerful blend of human expertise + AI accountability</li>
              </ul>
            </div>

            <div className="delivery-item fade-in">
              <div className="delivery-header">
                <span className="delivery-icon">🎪</span>
                <h3 className="delivery-title">Public Showcases — Events, Competitions, and Demo Days</h3>
              </div>
              <ul className="delivery-list">
                <li>In-school innovation fairs & showcases</li>
                <li>National competitions, Olympiads & startup challenges</li>
                <li>Demo days with industry experts, investors, and universities</li>
                <li>Builds student confidence through public presentations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Clubs */}
      <section className="section innovation-clubs" id="clubs">
        <div className="container">
          <h2 className="section-title fade-in">The innogyan Innovation Clubs</h2>
          <div className="clubs-intro fade-in">
            Students explore and build across 21st-century domains — guided by mentors, driven by real-world projects, and showcased through visible portfolios.
          </div>

          <div className="explorer-club fade-in">
            <h3>🔍 Explorer Quest Club — Discovery & First Build</h3>
            <ul className="delivery-list">
              <li>Early discovery across tech, design, entrepreneurship, storytelling & research</li>
              <li>Identifies student interests & passions</li>
              <li>Builds first real-world projects</li>
              <li>Launchpad for deeper skill development</li>
            </ul>
          </div>

          <div className="advanced-clubs">
            {clubsData.map((club, index) => (
              <div key={index} className="club-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="club-header">
                  <span className="club-emoji">{club.emoji}</span>
                  <div>
                    <div className="club-name">{club.name}</div>
                    <div className="club-description">{club.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works" id="how-it-works">
        <div className="container">
          <h2 className="section-title fade-in">Seamless Integration With Your School</h2>
          <div className="integration-steps">
            {stepsData.map((step, index) => (
              <div key={index} className="step-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With innogyan */}
      <section className="section why-partner">
        <div className="container">
          <h2 className="section-title fade-in">Position Your School As A True Innovation Hub</h2>
          <div className="benefits-grid">
            {whyPartnerData.map((benefit, index) => (
              <div key={index} className="benefit-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta" id="contact">
        <div className="container">
          <h2 className="section-title fade-in">Bring innogyan To Your Campus</h2>
          <p className="section-subtitle fade-in">Let's build the creators of tomorrow — together.</p>
          <a 
            href="mailto:partner@innogyan.com?subject=Partnership Inquiry - Demo Call Request" 
            onClick={handleCTAClick}
            className="final-cta-button fade-in"
          >
            <span>Book A Demo Call</span>
            <span>📞</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 innogyan. Building the innovators of tomorrow.</p>
          <p className="tagline">Empowering schools • Inspiring students • Creating futures</p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/innogyanschool">For Schools</Link>
            <span>•</span>
            <Link href="/innogyancollege">For Colleges</Link>
            <span>•</span>
            <a href="https://github.com/yourusername/innogyan-landing" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>

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
