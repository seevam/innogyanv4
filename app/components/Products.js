'use client';

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <h2 className="section-title fade-in">Programs for all ages</h2>
        <div className="products-grid">
          <div className="product-card playbox fade-in">
            <div className="product-card-inner">
              <div className="product-card-front">
                <span className="age-badge">Ages 5-12</span>
                <div className="product-icon icon-playbox"></div>
                <h3>innogyan Playbox</h3>
              </div>
              
              <div className="product-card-back">
                <span className="age-badge">Ages 5-12</span>
                <div className="product-icon icon-playbox"></div>
                <h3>innogyan Playbox</h3>
                <p>Monthly hands-on STEAM projects that spark curiosity and build foundational skills through play-based learning.</p>
                <a href="/innogyanplaybox" className="learn-more">Explore →</a>
              </div>
            </div>
          </div>
          
          <div className="product-card club fade-in">
            <div className="product-card-inner">
              <div className="product-card-front">
                <span className="age-badge">Ages 13-18</span>
                <div className="product-icon icon-club"></div>
                <h3>Club innogyan</h3>
              </div>
              
              <div className="product-card-back">
                <span className="age-badge">Ages 13-18</span>
                <div className="product-icon icon-club"></div>
                <h3>Club innogyan</h3>
                <p>Real-world projects, global mentors, and powerful portfolios for students ready to create and innovate.</p>
                <a href="/innogyanclub" className="learn-more">Explore →</a>
              </div>
            </div>
          </div>
          
          <div className="product-card garage fade-in">
            <div className="product-card-inner">
              <div className="product-card-front">
                <span className="age-badge">Ages 18-25</span>
                <div className="product-icon icon-garage"></div>
                <h3>innogyan Garage</h3>
              </div>
              
              <div className="product-card-back">
                <span className="age-badge">Ages 18-25</span>
                <div className="product-icon icon-garage"></div>
                <h3>innogyan Garage</h3>
                <p>Build ventures before you graduate. Turn college into a launchpad for real products and companies.</p>
                <a href="/innogyangarage" className="learn-more">Explore →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 60px;
        }

        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        .product-card {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.6s ease;
          position: relative;
          overflow: hidden;
          height: 350px;
          perspective: 1000px;
          cursor: pointer;
        }

        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00ffff, #ff00ff);
          transition: all 0.6s ease;
        }

        .product-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .product-card:hover .product-card-inner {
          transform: rotateY(180deg);
        }

        .product-card-front,
        .product-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .product-card-back {
          transform: rotateY(180deg);
        }

        .age-badge {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          color: #000;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .product-card-back .age-badge {
          position: static;
          transform: none;
          margin-bottom: 20px;
        }

        .product-icon {
          width: 100px;
          height: 100px;
          margin: 20px auto;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          filter: drop-shadow(0 0 15px currentColor);
        }

        .product-card-back .product-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
        }

        .product-card-front h3 {
          font-size: 28px;
          color: #ffffff;
          font-weight: 700;
          margin-top: 20px;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .product-card-back h3 {
          font-size: 24px;
          margin-bottom: 15px;
          color: #ffffff;
          font-weight: 700;
        }

        .product-card-back p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 25px;
          line-height: 1.6;
          font-size: 14px;
        }

        .learn-more {
          color: #00ffff;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: all 0.3s;
          padding: 10px 20px;
          border: 2px solid #00ffff;
          border-radius: 25px;
          background: rgba(0, 255, 255, 0.1);
        }

        .learn-more:hover {
          gap: 10px;
          color: #ff00ff;
          border-color: #ff00ff;
          background: rgba(255, 0, 255, 0.1);
          transform: scale(1.05);
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 255, 255, 0.3);
          border-color: rgba(0, 255, 255, 0.6);
        }

        .product-card.playbox {
          border-color: #4CAF50;
        }

        .product-card.playbox::before {
          background: linear-gradient(90deg, #4CAF50, #45a049);
        }

        .product-card.playbox:hover {
          box-shadow: 0 20px 50px rgba(76, 175, 80, 0.3);
          border-color: rgba(76, 175, 80, 0.6);
        }

        .product-card.garage {
          border-color: #ff00ff;
        }

        .product-card.garage::before {
          background: linear-gradient(90deg, #ff00ff, #ff69b4);
        }

        .product-card.garage:hover {
          box-shadow: 0 20px 50px rgba(255, 0, 255, 0.3);
          border-color: rgba(255, 0, 255, 0.6);
        }

        .icon-playbox {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234CAF50;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2345a049;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='20' y='25' width='60' height='45' rx='8' fill='url(%23grad1)' stroke='%23ffffff' stroke-width='2'/%3E%3Crect x='25' y='30' width='15' height='15' rx='3' fill='%23ffffff' opacity='0.8'/%3E%3Crect x='45' y='30' width='15' height='15' rx='3' fill='%23ffffff' opacity='0.8'/%3E%3Crect x='65' y='30' width='10' height='25' rx='3' fill='%23ffffff' opacity='0.8'/%3E%3Cpath d='M30 75 Q35 70 40 75 Q45 80 50 75 Q55 70 60 75 Q65 80 70 75' stroke='%234CAF50' stroke-width='3' fill='none' opacity='0.6'/%3E%3C/svg%3E");
          color: #4CAF50;
        }

        .icon-club {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300ffff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230099cc;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='45' r='25' fill='url(%23grad2)' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M35 35 L50 20 L65 35' stroke='%23ffffff' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3Cpath d='M50 20 L50 70' stroke='%23ffffff' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M40 55 L50 45 L60 55' stroke='%23ffffff' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='35' cy='75' r='4' fill='%2300ffff' opacity='0.7'/%3E%3Ccircle cx='50' cy='80' r='3' fill='%2300ffff' opacity='0.7'/%3E%3Ccircle cx='65' cy='75' r='4' fill='%2300ffff' opacity='0.7'/%3E%3C/svg%3E");
          color: #00ffff;
        }

        .icon-garage {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff00ff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23cc0099;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='25' y='35' width='50' height='40' rx='5' fill='url(%23grad3)' stroke='%23ffffff' stroke-width='2'/%3E%3Crect x='30' y='25' width='40' height='15' rx='3' fill='%23ffffff' opacity='0.9'/%3E%3Ccircle cx='38' cy='32' r='3' fill='%23ff00ff'/%3E%3Ccircle cx='50' cy='32' r='3' fill='%23ff00ff'/%3E%3Ccircle cx='62' cy='32' r='3' fill='%23ff00ff'/%3E%3Crect x='35' y='45' width='8' height='8' rx='2' fill='%23ffffff' opacity='0.8'/%3E%3Crect x='46' y='45' width='8' height='8' rx='2' fill='%23ffffff' opacity='0.8'/%3E%3Crect x='57' y='45' width='8' height='8' rx='2' fill='%23ffffff' opacity='0.8'/%3E%3Cpath d='M35 60 L40 65 L45 60 L50 65 L55 60 L60 65 L65 60' stroke='%23ffffff' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          color: #ff00ff;
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .product-card {
            height: 300px;
          }
          
          .product-icon {
            width: 80px;
            height: 80px;
          }
          
          .product-card-front h3 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
