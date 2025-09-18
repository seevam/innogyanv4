'use client';

import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './dashboard.css';

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  // Particle effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'dashboard-particle';
      const colors = ['#00ffff', '#ff00ff', '#00ff88'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = randomColor;
      particle.style.boxShadow = `0 0 6px ${randomColor}`;
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = '-10px';
      particle.style.width = Math.random() * 3 + 2 + 'px';
      particle.style.height = particle.style.width;
      document.body.appendChild(particle);

      const fallDuration = Math.random() * 4000 + 3000;
      const fallAnimation = particle.animate([
        { transform: 'translateY(0px) rotate(0deg)', opacity: 0.8 },
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

    const particleInterval = setInterval(createParticle, 1000);
    return () => clearInterval(particleInterval);
  }, []);

  if (!isLoaded) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-nav">
          <Link href="/" className="dashboard-logo">
            <span className="rocket">🚀</span>
            innogyan
          </Link>
          
          <nav className="dashboard-navigation">
            <Link href="/dashboard" className="nav-item active">
              <span className="nav-icon">🏠</span>
              Dashboard
            </Link>
            <Link href="/courses" className="nav-item">
              <span className="nav-icon">📚</span>
              Courses
            </Link>
            <Link href="/projects" className="nav-item">
              <span className="nav-icon">🚀</span>
              Projects
            </Link>
            <Link href="/mentorship" className="nav-item">
              <span className="nav-icon">👨‍🏫</span>
              Mentorship
            </Link>
          </nav>

          <div className="user-section">
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10 ring-2 ring-cyan-400',
                  userButtonPopoverCard: 'bg-black/90 border border-cyan-400/30',
                  userButtonPopoverActionButton: 'hover:bg-cyan-400/10',
                },
              }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-content">
          
          {/* Welcome Section */}
          <section className="welcome-section">
            <div className="welcome-content">
              <h1 className="welcome-title">
                {greeting}, {user?.firstName || user?.username || 'Innovator'}! 👋
              </h1>
              <p className="welcome-subtitle">
                Ready to continue your innovation journey? Let's build something amazing today.
              </p>
            </div>
            <div className="welcome-stats">
              <div className="stat-card">
                <div className="stat-value">12</div>
                <div className="stat-label">Courses Enrolled</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">8</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">95%</div>
                <div className="stat-label">Progress Rate</div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="quick-actions">
            <h2 className="section-title">Quick Actions</h2>
            <div className="actions-grid">
              <Link href="/courses/new" className="action-card">
                <div className="action-icon">📖</div>
                <h3>Start New Course</h3>
                <p>Explore our latest courses and begin learning</p>
              </Link>
              
              <Link href="/projects/create" className="action-card">
                <div className="action-icon">🛠️</div>
                <h3>Create Project</h3>
                <p>Build something new with guided tutorials</p>
              </Link>
              
              <Link href="/mentorship/book" className="action-card">
                <div className="action-icon">💬</div>
                <h3>Book Mentorship</h3>
                <p>Schedule a session with expert mentors</p>
              </Link>
              
              <Link href="/community" className="action-card">
                <div className="action-icon">👥</div>
                <h3>Join Community</h3>
                <p>Connect with fellow innovators worldwide</p>
              </Link>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="recent-activity">
            <h2 className="section-title">Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">🎯</div>
                <div className="activity-content">
                  <h4>Completed "AI Fundamentals" Module</h4>
                  <p>You've mastered the basics of artificial intelligence</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
                <div className="activity-badge">+50 XP</div>
              </div>
              
              <div className="activity-item">
                <div className="activity-icon">🚀</div>
                <div className="activity-content">
                  <h4>Project "Smart Home IoT" Submitted</h4>
                  <p>Your innovative IoT solution has been submitted for review</p>
                  <span className="activity-time">1 day ago</span>
                </div>
                <div className="activity-badge">Under Review</div>
              </div>
              
              <div className="activity-item">
                <div className="activity-icon">👨‍🏫</div>
                <div className="activity-content">
                  <h4>Mentorship Session with Dr. Raj</h4>
                  <p>Discussed machine learning career paths and opportunities</p>
                  <span className="activity-time">3 days ago</span>
                </div>
                <div className="activity-badge">Completed</div>
              </div>
            </div>
          </section>

          {/* Recommendations */}
          <section className="recommendations">
            <h2 className="section-title">Recommended for You</h2>
            <div className="recommendations-grid">
              <div className="recommendation-card">
                <div className="card-image">
                  <div className="image-placeholder">🤖</div>
                </div>
                <div className="card-content">
                  <h3>Advanced Robotics</h3>
                  <p>Build autonomous robots using cutting-edge AI</p>
                  <div className="card-meta">
                    <span className="duration">8 weeks</span>
                    <span className="level">Intermediate</span>
                  </div>
                  <button className="card-action">Enroll Now</button>
                </div>
              </div>
              
              <div className="recommendation-card">
                <div className="card-image">
                  <div className="image-placeholder">🧬</div>
                </div>
                <div className="card-content">
                  <h3>Biotech Innovation</h3>
                  <p>Explore the future of biotechnology and health</p>
                  <div className="card-meta">
                    <span className="duration">10 weeks</span>
                    <span className="level">Advanced</span>
                  </div>
                  <button className="card-action">Enroll Now</button>
                </div>
              </div>
              
              <div className="recommendation-card">
                <div className="card-image">
                  <div className="image-placeholder">🌍</div>
                </div>
                <div className="card-content">
                  <h3>Sustainable Tech</h3>
                  <p>Create technology solutions for climate change</p>
                  <div className="card-meta">
                    <span className="duration">6 weeks</span>
                    <span className="level">Beginner</span>
                  </div>
                  <button className="card-action">Enroll Now</button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
