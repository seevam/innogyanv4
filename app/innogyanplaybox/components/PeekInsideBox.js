'use client';

import { useState, useEffect } from 'react';

export default function PeekInsideBox() {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    { id: 'stem-explorer', name: 'STEM Explorer', icon: '🤖' },
    { id: 'creative-builder', name: 'Creative Builder', icon: '🔧' },
    { id: 'tech-innovator', name: 'Tech Innovator', icon: '💻' },
    { id: 'science-lab', name: 'Science Lab', icon: '⚗️' },
    { id: 'future-engineer', name: 'Future Engineer', icon: '⚡' }
  ];

  const boxContent = [
    {
      title: "Interactive Game Board",
      description: "Press to place the marble on the board!",
      features: ["Ages 5+", "Strategic Thinking", "Hand-Eye Coordination"],
      projects: [
        "Build a mini sailboat",
        "Create a robotic hand", 
        "Assemble a wind-powered car",
        "Experiment with simple circuits"
      ],
      bgClass: "stem-bg",
      icons: ["⚙️", "🔧", "🧩"]
    },
    {
      title: "Creative Construction Kit",
      description: "Build amazing structures with digital precision!",
      features: ["Ages 6+", "Creative Design", "Spatial Reasoning"],
      projects: [
        "Design a smart home",
        "Build a holographic bridge",
        "Create AI-powered sculptures", 
        "Construct a quantum marble run"
      ],
      bgClass: "creative-bg",
      icons: ["🏗️", "🎨", "📐"]
    },
    {
      title: "Tech Innovation Lab",
      description: "Code, create, and innovate with quantum technology!",
      features: ["Ages 8+", "Programming", "Digital Literacy"],
      projects: [
        "Program an AI assistant",
        "Create neural animations",
        "Build a quantum weather station",
        "Design holographic apps"
      ],
      bgClass: "tech-bg",
      icons: ["💻", "📱", "🤖"]
    },
    {
      title: "Quantum Science Lab", 
      description: "Explore digital chemistry through nano-experiments!",
      features: ["Ages 7+", "Scientific Method", "Observation Skills"],
      projects: [
        "Grow digital crystal gardens",
        "Create holographic eruptions",
        "Mix nano-polymer slime",
        "Build solar fusion reactors"
      ],
      bgClass: "science-bg",
      icons: ["🔬", "⚗️", "🧪"]
    },
    {
      title: "Neural Engineering Kit",
      description: "Solve tomorrow's problems with AI-powered engineering!",
      features: ["Ages 9+", "Problem Solving", "AI Design"],
      projects: [
        "Design quantum-proof towers",
        "Build neural filtration systems",
        "Create fusion energy models",
        "Engineer bionic prosthetics"
      ],
      bgClass: "engineer-bg",
      icons: ["🏭", "⚡", "🌱"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % categories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [categories.length]);

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  return (
    <section className="section peek-inside-box" id="peek-inside-box">
      <div className="container">
        <h2 className="section-title fade-in">A Peek Inside The Box ⭐</h2>
        <p className="section-subtitle fade-in">Encouraging kids to become problem-solvers as they explore cutting-edge technology...</p>
        
        {/* Category Navigation */}
        <div className="box-category-nav fade-in">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`box-category-btn ${index === activeCategory ? 'active' : ''}`}
              onClick={() => handleCategoryClick(index)}
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
            {boxContent.map((content, index) => (
              <div
                key={index}
                className={`box-slide ${index === activeCategory ? 'active' : ''}`}
              >
                <div className={`box-background ${content.bgClass}`}></div>
                <div className="box-content">
                  <div className="box-left">
                    <div className="box-header">
                      <h3>{content.title}</h3>
                      <p className="box-description">{content.description}</p>
                    </div>
                    <div className="box-features">
                      {content.features.map((feature, i) => (
                        <div key={i} className="feature-tag">{feature}</div>
                      ))}
                    </div>
                    <button className="box-learn-more">Learn More</button>
                    <div className="box-projects">
                      <h4>What's Inside:</h4>
                      <ul className="projects-list">
                        {content.projects.map((project, i) => (
                          <li key={i}>
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
                        {content.icons.map((icon, i) => (
                          <div key={i} className="float-icon">{icon}</div>
                        ))}
                      </div>
                      <div className="main-image">
                        <div className="circuit-pattern"></div>
                        <div className="image-overlay">
                          <span>Interactive Learning</span>
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
          {categories.map((_, index) => (
            <button
              key={index}
              className={`box-progress-dot ${index === activeCategory ? 'active' : ''}`}
              onClick={() => handleCategoryClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
