'use client';

export default function FinalCTA({ openModal }) {
  return (
    <section className="final-cta">
      <div className="container">
        <h2 className="fade-in">Is Your Child Ready To Build?</h2>
        <p className="fade-in">innogyan is where their creative journey begins — and where future leaders are shaped.</p>
        <div className="cta-buttons fade-in">
          <button className="cta-button" onClick={openModal}>
            <span className="icon">🚀</span>
            <span>Start Journey</span>
          </button>
          
          <button className="secondary-cta" onClick={openModal}>
            Book A Discovery Call
          </button>
        </div>
      </div>

      <style jsx>{`
        .final-cta {
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: white;
          text-align: center;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .final-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
        }

        .container {
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .final-cta {
            padding: 80px 0;
          }
        }

        .final-cta h2 {
          font-size: clamp(32px, 6vw, 48px);
          margin-bottom: 20px;
          color: #00ffff;
          text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }

        .final-cta p {
          font-size: clamp(16px, 4vw, 20px);
          margin-bottom: 40px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          color: #000;
          padding: 18px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: clamp(16px, 3vw, 18px);
          transition: all 0.3s;
          box-shadow: 0 8px 25px rgba(0, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
          border: none;
          cursor: pointer;
        }

        .cta-button .icon {
          font-size: 20px;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 255, 255, 0.4);
          background: linear-gradient(45deg, #ff00ff, #00ffff);
        }
      `}</style>
    </section>
  );
}
