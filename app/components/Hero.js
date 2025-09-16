'use client';

export default function Hero({ openModal }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="tagline">BUILDING THE CREATORS OF TOMORROW</div>
        <h2 className="hero-title">
          Unlock Your Child's <span className="highlight">Creative Future</span> 
        </h2>

        <p className="hero-subtitle">
          innogyan helps students discover what they love, build what they imagine, and confidently create real-world projects, portfolios, and startups — starting young.
        </p>
        
        <button className="secondary-cta" onClick={openModal}>
          Book A Discovery Call
        </button>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          
          background-image: 
            linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(2, 2, 26) 30%, rgba(220, 223, 232, 0) 100%),
            url('https://i.postimg.cc/5ybwSz7L/Hm1d.jpg');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          
          position: relative;
          overflow: hidden;
          padding-top: 100px;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad1"><stop offset="0%" stop-color="rgba(0,255,255,0.3)"/><stop offset="100%" stop-color="rgba(0,255,255,0)"/></radialGradient><radialGradient id="grad2"><stop offset="0%" stop-color="rgba(255,0,255,0.2)"/><stop offset="100%" stop-color="rgba(255,0,255,0)"/></radialGradient></defs><circle cx="200" cy="200" r="3" fill="url(%23grad1)"/><circle cx="800" cy="300" r="2" fill="url(%23grad2)"/><circle cx="300" cy="700" r="4" fill="url(%23grad1)"/><circle cx="700" cy="800" r="2" fill="url(%23grad2)"/><circle cx="500" cy="100" r="1" fill="url(%23grad1)"/><circle cx="100" cy="600" r="2" fill="url(%23grad2)"/></svg>');
          animation: float 20s infinite linear;
        }

        .hero::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.03) 50%, transparent 70%);
          animation: scan 4s infinite;
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-5px); }
          75% { transform: translateY(-25px) translateX(8px); }
          100% { transform: translateY(0px) translateX(0px); }
        }

        .hero-content {
          max-width: 800px;
          margin: 0;
          margin-left: 50px;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .hero {
            background-image: 
              linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(26,26,46,0.7) 50%, rgba(22,33,62,0.7) 100%),
              url('https://i.postimg.cc/C19Pz9r5/Hm1.jpg');
            background-attachment: scroll;
            background-position: center 20%;
            min-height: 80vh;
            padding-top: 50px;
            padding-bottom: 300px;
          }

          .hero-content {
            margin-left: 0;
            text-align: center;
          }
        }

        .tagline {
          font-size: 14px;
          letter-spacing: 3px;
          color: #00ffff;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeInUp 1s 0.5s forwards;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
          font-family: 'Courier New', monospace;
        }

        .hero-title {
          font-size: clamp(32px, 8vw, 72px);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.1;
          opacity: 0;
          animation: fadeInUp 1s 0.7s forwards;
          text-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }

        .highlight {
          background: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(16px, 4vw, 20px);
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
          line-height: 1.6;
          opacity: 0;
          animation: fadeInUp 1s 0.9s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
