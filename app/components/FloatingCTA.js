'use client';

export default function FloatingCTA({ openModal }) {
  return (
    <div className="floating-cta">
      <button className="cta-buttonform" onClick={openModal}>
        <span className="icon">🚀</span>
        <span>Start Journey</span>
      </button>

      <style jsx>{`
        .floating-cta {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
        }

        .cta-buttonform::before {
          content: 'Start Your Child\'s Creative Journey →';
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.9);
          color: #fff;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          white-space: nowrap;
          margin-right: 10px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .cta-buttonform:hover::before {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .floating-cta {
            bottom: 20px;
            right: 20px;
          }

          .cta-buttonform {
            padding: 12px 20px;
            font-size: 12px;
          }

          .cta-buttonform::before {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
