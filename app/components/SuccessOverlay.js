'use client';

import { useState, useEffect } from 'react';

export default function SuccessOverlay({ isOpen, onClose }) {
  const [countdown, setCountdown] = useState(5);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCountdown(5);
      setIsClosing(false);
      
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            handleClose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`success-overlay ${isOpen ? 'active' : ''} ${isClosing ? 'closing' : ''}`} onClick={handleOverlayClick}>
      <div className="success-card">
        <div className="success-icon">🎉</div>
        <h3 className="success-title">Welcome to innogyan!</h3>
        <p className="success-message-text">
          Thank you for starting your child's creative journey with us!
        </p>
        
        <div className="success-details">
          <h4>What happens next?</h4>
          <p>✓ Our team will review your information</p>
          <p>✓ You'll receive a personalized program recommendation</p>
          <p>✓ We'll contact you within 4 hours to get started</p>
        </div>
        
        <div className="success-timer">
          This message will close automatically in <span>{countdown}</span> seconds
        </div>
      </div>

      <style jsx>{`
        .success-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(15px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
        }

        .success-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .success-card {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          border: 2px solid #00ff00;
          border-radius: 20px;
          padding: 40px 30px;
          max-width: 450px;
          width: 90%;
          text-align: center;
          color: #ffffff;
          transform: scale(0.8) translateY(50px);
          transition: transform 0.4s ease;
          box-shadow: 0 20px 60px rgba(0, 255, 0, 0.3);
        }

        .success-overlay.active .success-card {
          transform: scale(1) translateY(0);
        }

        .success-icon {
          font-size: 64px;
          margin-bottom: 20px;
          animation: successPulse 1.5s ease-in-out;
        }

        @keyframes successPulse {
          0% { transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .success-title {
          font-size: 28px;
          color: #00ff00;
          margin-bottom: 15px;
          text-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
        }

        .success-message-text {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 25px;
          line-height: 1.6;
        }

        .success-details {
          background: rgba(0, 255, 0, 0.1);
          border: 1px solid rgba(0, 255, 0, 0.3);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 25px;
        }

        .success-details h4 {
          color: #00ff00;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .success-details p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          margin-bottom: 8px;
        }

        .success-timer {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          font-style: italic;
        }

        .success-timer span {
          font-weight: bold;
          color: #00ff00;
        }

        .success-overlay.closing {
          animation: fadeOut 0.5s ease-out forwards;
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}
