'use client';

export default function GettingStarted() {
  const steps = [
    {
      number: 1,
      title: "Discovery Call - Understand your child's interests and goals",
      icon: "🎯"
    },
    {
      number: 2,
      title: "Program Match - We recommend the perfect program for your child",
      icon: "🎯"
    },
    {
      number: 3,
      title: "Start Creating - Your child begins their creative journey with us",
      icon: "🚀"
    }
  ];

  return (
    <section className="getting-started">
      <div className="container">
        <div className="getting-started-content">
          <h2 className="getting-started-title">
            <span className="sparkle">✨</span>
            Getting Started is Simple
            <span className="sparkle">✨</span>
          </h2>

          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <div className="step-icon">{step.icon}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flexibility-note">
            <span className="info-icon">ℹ️</span>
            We understand every child is unique. Our programs are flexible and can be customized to fit your child's pace and interests.
          </div>

          <a href="#" className="get-started-btn">
            Start Your Child's Journey Today
          </a>
        </div>
      </div>

      <style jsx>{`
        .getting-started {
          background: linear-gradient(135deg, #020c2c 0%, #240332 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .getting-started::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 */100"><defs><pattern id="techSkillsGrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,255,255,0.08)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23techSkillsGrid)"/></svg>');
          opacity: 0.6;
        }

        .floating-tech-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .tech-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00ffff;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
          animation: techParticleFloat 6s ease-in-out infinite;
        }

        .tech-particle:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
          background: #00ffff;
        }

        .tech-particle:nth-child(2) {
          top: 20%;
          right: 15%;
          animation-delay: 2s;
          background: #ff00ff;
        }

        .tech-particle:nth-child(3) {
          bottom: 30%;
          left: 20%;
          animation-delay: 4s;
          background: #00ff88;
        }

        .tech-particle:nth-child(4) {
          bottom: 15%;
          right: 25%;
          animation-delay: 1s;
          background: #ffff00;
        }

        .tech-particle:nth-child(5) {
          top: 50%;
          left: 5%;
          animation-delay: 3s;
          background: #ff6b35;
        }

        .tech-particle:nth-child(6) {
          top: 70%;
          right: 10%;
          animation-delay: 5s;
          background: #4285f4;
        }

        @keyframes techParticleFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          33% { 
            transform: translateY(-30px) rotate(120deg) scale(1.5);
            opacity: 1;
          }
          66% { 
            transform: translateY(-15px) rotate(240deg) scale(0.8);
            opacity: 0.8;
          }
        }

        .mission-header {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
        }

        .mission-header::before {
          content: '💡';
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 40px;
          filter: drop-shadow(0 0 20px #ffff00);
          animation: lightbulbGlow 3s ease-in-out infinite;
        }

        @keyframes lightbulbGlow {
          0%, 100% { 
            filter: drop-shadow(0 0 20px #ffff00);
            transform: translateX(-50%) scale(1);
          }
          50% { 
            filter: drop-shadow(0 0 40px #ffff00);
            transform: translateX(-50%) scale(1.1);
          }
        }

        .mission-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: #ffffff;
          margin: 20px 0;
          line-height: 1.2;
          text-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
        }

        .highlight-innovator {
          background: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .highlight-innovator::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%);
          border-radius: 2px;
          animation: underlineGlow 2s ease-in-out infinite;
        }

        @keyframes underlineGlow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
            transform: scaleX(1);
          }
          50% { 
            box-shadow: 0 0 20px rgba(255, 0, 255, 0.8);
            transform: scaleX(1.05);
          }
        }

        .mission-subtitle {
          font-size: clamp(16px, 3vw, 20px);
          color: rgba(255, 255, 255, 0.8);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .feature-cards-carousel {
          position: relative;
          margin-bottom: 80px;
        }

        .carousel-container {
          overflow: hidden;
          position: relative;
          height: 650px;
        }

        .carousel-track {
          display: flex;
          gap: 30px;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 20px 0;
        }

        .feature-card {
          min-width: 400px;
          min-height: 500px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 25px;
          overflow: hidden;
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          opacity: 0.7;
          transform: scale(0.9);
          display: flex;
          flex-direction: column;
        }

        .feature-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          border-color: rgba(0, 255, 255, 0.3);
        }

        .feature-card.center {
          opacity: 1;
          transform: scale(1);
        }

        .feature-card.center:hover {
          transform: translateY(-15px) scale(1.05);
        }

        .featured-card {
          position: relative;
        }

        .featured-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #00ffff, #ff00ff, #00ff88, #ffff00);
          background-size: 300% 300%;
          border-radius: 27px;
          z-index: -1;
          animation: holographicBorder 3s ease-in-out infinite;
        }

        @keyframes holographicBorder {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .card-header {
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        .card-header.blue { background: linear-gradient(135deg, #4285f4 0%, #1976d2 100%); }
        .card-header.orange { background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); }
        .card-header.yellow { background: linear-gradient(135deg, #ffeb3b 0%, #ffc107 100%); }
        .card-header.green { background: linear-gradient(135deg, #00ff88 0%, #00c853 100%); }

        .card-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .feature-card:hover .card-header::before {
          left: 100%;
        }

        .card-header h3 {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          z-index: 2;
          position: relative;
          text-align: center;
          line-height: 1.2;
        }

        .card-image-container {
          position: relative;
          height: 160px;
          overflow: hidden;
          background: #1a1a1a;
          flex-shrink: 0;
        }

        .card-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease;
          position: relative;
          overflow: hidden;
        }

        .image-placeholder {
          position: relative;
          z-index: 2;
        }

        .image-icon {
          font-size: 64px;
          display: block;
        }

        .tech-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><pattern id="cardGrid" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(0,255,255,0.1)" stroke-width="0.3"/></pattern></defs><rect width="50" height="50" fill="url(%23cardGrid)"/></svg>');
          opacity: 0.5;
        }

        .feature-card:hover .card-image {
          transform: scale(1.1);
        }

        .play-button-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: rgba(0, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 3px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
          z-index: 5;
        }

        .play-icon {
          font-size: 32px;
          color: #000;
          margin-left: 4px;
        }

        .play-button-overlay:hover {
          transform: translate(-50%, -50%) scale(1.2);
          box-shadow: 0 0 50px rgba(0, 255, 255, 0.8);
        }

        .play-button-overlay::before {
          content: '';
          position: absolute;
          width: 100px;
          height: 100px;
          border: 2px solid rgba(0, 255, 255, 0.4);
          border-radius: 50%;
          animation: playButtonPulse 2s infinite;
        }

        @keyframes playButtonPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .card-content {
          padding: 25px;
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-title {
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
          text-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
          line-height: 1.3;
        }

        .card-description {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .card-features {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .feature-tag {
          background: rgba(0, 255, 255, 0.15);
          border: 1px solid rgba(0, 255, 255, 0.3);
          padding: 6px 14px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 600;
          color: #00ffff;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          z-index: 20;
          pointer-events: none;
        }

        .carousel-btn {
          background: rgba(0, 255, 255, 0.2);
          border: 2px solid rgba(0, 255, 255, 0.4);
          color: #00ffff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          pointer-events: all;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-btn:hover {
          background: rgba(0, 255, 255, 0.4);
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 40px;
        }

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid rgba(0, 255, 255, 0.4);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-dot.active {
          background: #00ffff;
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
        }

        .carousel-dot:hover {
          transform: scale(1.2);
        }

        .lifetime-skills-cta {
          text-align: center;
          margin-top: 60px;
        }

        .cta-button-enhanced {
          background: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%);
          color: #000;
          border: none;
          padding: 18px 40px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 0 40px rgba(0, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
        }

        .cta-button-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .cta-button-enhanced:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 60px rgba(0, 255, 255, 0.5);
        }

        .cta-button-enhanced:hover::before {
          left: 100%;
        }

        .bouncing-element {
          position: absolute;
          animation: bounce 3s ease-in-out infinite;
          font-size: 24px;
          z-index: 5;
        }

        @keyframes bounce {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            filter: drop-shadow(0 0 10px currentColor);
          }
          50% { 
            transform: translateY(-20px) rotate(10deg);
            filter: drop-shadow(0 0 20px currentColor);
          }
        }

        @media (max-width: 768px) {
          .feature-card {
            min-width: 320px;
          }
          
          .carousel-container {
            height: 520px;
          }
          
          .mission-title {
            font-size: 28px;
          }
          
          .mission-subtitle {
            font-size: 16px;
          }
          
          .bouncing-element {
            display: none;
          }
          
          .lifetime-skills-section-enhanced {
            padding: 80px 0;
          }
          
          .card-content {
            padding: 20px;
          }
          
          .card-description {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
