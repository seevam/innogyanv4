'use client';

import Image from 'next/image';

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
                <div className="product-image">
                  <Image
                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop"
                    alt="Kids building STEAM projects"
                    width={400}
                    height={400}
                    className="card-img"
                  />
                </div>
                <h3>innogyan Playbox</h3>
              </div>

              <div className="product-card-back">
                <span className="age-badge">Ages 5-12</span>
                <div className="product-image-small">
                  <Image
                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=200&h=200&fit=crop"
                    alt="Kids building STEAM projects"
                    width={200}
                    height={200}
                    className="card-img-small"
                  />
                </div>
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
                <div className="product-image">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop"
                    alt="Teenagers coding and building projects"
                    width={400}
                    height={400}
                    className="card-img"
                  />
                </div>
                <h3>Club innogyan</h3>
              </div>

              <div className="product-card-back">
                <span className="age-badge">Ages 13-18</span>
                <div className="product-image-small">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop"
                    alt="Teenagers coding and building projects"
                    width={200}
                    height={200}
                    className="card-img-small"
                  />
                </div>
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
                <div className="product-image">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
                    alt="Young entrepreneurs building startup"
                    width={400}
                    height={400}
                    className="card-img"
                  />
                </div>
                <h3>innogyan Garage</h3>
              </div>

              <div className="product-card-back">
                <span className="age-badge">Ages 18-25</span>
                <div className="product-image-small">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop"
                    alt="Young entrepreneurs building startup"
                    width={200}
                    height={200}
                    className="card-img-small"
                  />
                </div>
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

        .product-image {
          width: 120px;
          height: 120px;
          margin: 20px auto;
          border-radius: 15px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }

        .product-image-small {
          width: 70px;
          height: 70px;
          margin: 0 auto 15px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
        }

        .card-img, .card-img-small {
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .card-img,
        .product-card:hover .card-img-small {
          transform: scale(1.1);
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

        .product-card.playbox .product-image {
          box-shadow: 0 0 20px rgba(76, 175, 80, 0.4);
        }

        .product-card.club .product-image {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
        }

        .product-card.garage .product-image {
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.4);
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .product-card {
            height: 300px;
          }

          .product-image {
            width: 100px;
            height: 100px;
          }

          .product-image-small {
            width: 60px;
            height: 60px;
          }

          .product-card-front h3 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
