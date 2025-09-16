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
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .getting-started-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .getting-started-title {
          font-size: clamp(32px, 6vw, 48px);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        .sparkle {
          font-size: 1.2em;
          animation: sparkle 2s infinite;
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
        }

        .steps-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .step-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 25px 30px;
          display: flex;
          align-items: center;
          gap: 25px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .step-number {
          background: linear-gradient(135deg, #4CAF50, #45a049);
          color: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .step-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 45px;
        }

        .step-content h3 {
          color: #333;
          font-size: clamp(16px, 4vw, 18px);
          font-weight: 600;
          margin: 0;
          line-height: 1.4;
          flex: 1;
          text-align: left;
        }

        .step-icon {
          font-size: 24px;
          flex-shrink: 0;
          margin-left: 15px;
        }

        .flexibility-note {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .info-icon {
          opacity: 0.7;
          flex-shrink: 0;
        }

        .get-started-btn {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.5);
          color: #ffffff;
          padding: 15px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .get-started-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .get-started-btn:hover::before {
          left: 100%;
        }

        .get-started-btn:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #4CAF50;
          border-color: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .getting-started {
            padding: 60px 0;
          }
          
          .getting-started-title {
            flex-direction: column;
            gap: 10px;
          }
          
          .step-card {
            padding: 20px 25px;
            gap: 20px;
            flex-direction: column;
            text-align: center;
          }
          
          .step-number {
            width: 40px;
            height: 40px;
            font-size: 16px;
            order: -1;
          }
          
          .step-content {
            flex-direction: column;
            gap: 10px;
            min-height: auto;
          }
          
          .step-content h3 {
            font-size: 16px;
            text-align: center;
          }
          
          .step-icon {
            font-size: 20px;
            margin-left: 0;
          }
          
          .flexibility-note {
            font-size: 14px;
            text-align: center;
          }
          
          .get-started-btn {
            padding: 12px 30px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }
          
          .step-card {
            padding: 18px 20px;
            gap: 15px;
          }
          
          .step-content h3 {
            font-size: 14px;
          }
          
          .flexibility-note {
            font-size: 13px;
            padding: 0 10px;
          }
        }
      `}</style>
    </section>
  );
}
