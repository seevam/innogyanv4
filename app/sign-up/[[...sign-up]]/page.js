'use client';

import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';
import { useEffect } from 'react';
import './signup.css';

export default function SignUpPage() {
  // Particle effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'auth-particle';
      const colors = ['#00ffff', '#ff00ff', '#00ff88', '#ffff00'];
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

    const particleInterval = setInterval(createParticle, 600);
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className="auth-container signup-container">
      {/* Header */}
      <header className="auth-header">
        <div className="auth-nav">
          <Link href="/" className="auth-logo">
            <span className="rocket">🚀</span>
            innogyan
          </Link>
          <Link href="/sign-in" className="auth-switch-link">
            Already have an account? <span>Sign In</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="auth-main">
        <div className="auth-content">
          {/* Left Side - Branding */}
          <div className="auth-branding">
            <div className="branding-content">
              <h1 className="branding-title">
                Join the <span className="highlight">Innovation</span> Revolution
              </h1>
              <p className="branding-subtitle">
                Start building tomorrow's skills today with personalized learning paths, expert mentorship, and hands-on projects
              </p>
              
              <div className="branding-features">
                <div className="feature-item">
                  <span className="feature-icon">🚀</span>
                  <span>Access cutting-edge courses and programs</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">👨‍🏫</span>
                  <span>Learn from IIT, IIM & global experts</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏆</span>
                  <span>Build portfolios that get you noticed</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌍</span>
                  <span>Join a global community of innovators</span>
                </div>
              </div>

              {/* Stats */}
              <div className="signup-stats">
                <div className="stat-item">
                  <div className="stat-number">10,000+</div>
                  <div className="stat-label">Students</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Expert Mentors</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Partner Schools</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="floating-elements">
                <div className="float-element" style={{top: '15%', left: '5%'}}>⚙️</div>
                <div className="float-element" style={{top: '50%', right: '10%'}}>💡</div>
                <div className="float-element" style={{bottom: '20%', left: '15%'}}>🔬</div>
                <div className="float-element" style={{top: '30%', right: '25%'}}>🌟</div>
              </div>
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="auth-form-container">
            <div className="auth-form-wrapper">
              <div className="form-header">
                <h2>Create Your Account</h2>
                <p>Start your innovation journey today</p>
              </div>
              
              <SignUp 
                appearance={{
                  elements: {
                    rootBox: {
                      width: '100%',
                      maxWidth: '400px',
                    },
                    card: {
                      width: '100%',
                      margin: '0',
                      boxShadow: 'none',
                      background: 'transparent',
                      border: 'none',
                    },
                  },
                }}
              />
              
              <div className="auth-help-links">
                <p className="terms-text">
                  By signing up, you agree to our{' '}
                  <Link href="/terms" className="terms-link">Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="terms-link">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="auth-footer">
        <p>&copy; 2024 innogyan. Building the innovators of tomorrow.</p>
      </footer>
    </div>
  );
}
