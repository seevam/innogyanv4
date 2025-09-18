'use client';

import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';
import { useEffect } from 'react';
import './signin.css';

export default function SignInPage() {
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
    <div className="auth-container">
      {/* Header */}
      <header className="auth-header">
        <div className="auth-nav">
          <Link href="/" className="auth-logo">
            <span className="rocket">🚀</span>
            innogyan
          </Link>
          <Link href="/sign-up" className="auth-switch-link">
            Need an account? <span>Sign Up</span>
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
                Welcome Back to <span className="highlight">innogyan</span>
              </h1>
              <p className="branding-subtitle">
                Continue building the future with cutting-edge innovation education
              </p>
              
              <div className="branding-features">
                <div className="feature-item">
                  <span className="feature-icon">🎓</span>
                  <span>Access your learning dashboard</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>Track your progress</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌟</span>
                  <span>Connect with mentors</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="floating-elements">
                <div className="float-element" style={{top: '20%', left: '10%'}}>⚙️</div>
                <div className="float-element" style={{top: '60%', right: '15%'}}>🔬</div>
                <div className="float-element" style={{bottom: '25%', left: '20%'}}>💡</div>
              </div>
            </div>
          </div>

          {/* Right Side - Sign In Form */}
          <div className="auth-form-container">
            <div className="auth-form-wrapper">
              <SignIn 
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
                <Link href="/forgot-password" className="help-link">
                  Forgot your password?
                </Link>
                <Link href="/support" className="help-link">
                  Need help?
                </Link>
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
