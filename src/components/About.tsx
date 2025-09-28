import React from 'react';
import CardSwap, { Card } from './CardSwap';

const About: React.FC = () => {
  const features = [
    {
      title: "Marketplace UMKM",
      description: "Platform digital untuk UMKM menjangkau lebih banyak pelanggan dan meningkatkan penjualan."
    },
    {
      title: "Hyperlocal Shopping", 
      description: "Pembelian berbasis jarak terdekat untuk mendukung ekonomi lokal dan pengiriman cepat."
    },
    {
      title: "Chatbot AI",
      description: "Asisten pintar yang membantu pelanggan 24/7 dengan respon yang akurat dan personal."
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="approach-content-wrapper">
          <div className="approach-title-section">
            <h3 className="approach-features-title">Fitur Unggulan</h3>
            <p className="approach-features-subtitle">Solusi terdepan untuk mengembangkan bisnis Anda</p>
          </div>
          <div className="approach-card-swap">
            <CardSwap
              width={420}
              height={280}
              cardDistance={50}
              verticalDistance={60}
              delay={3500}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
            >
              <Card className="card-with-header-bg border-2 border-black text-gray-800 p-6 hover:border-gray-800">
                <div className="card-content-bottom">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{features[0].title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{features[0].description}</p>
                </div>
              </Card>
              <Card className="card-with-header-bg border-2 border-black text-gray-800 p-6 hover:border-gray-800">
                <div className="card-content-bottom">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{features[1].title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{features[1].description}</p>
                </div>
              </Card>
              <Card className="card-with-header-bg border-2 border-black text-gray-800 p-6 hover:border-gray-800">
                <div className="card-content-bottom">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{features[2].title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{features[2].description}</p>
                </div>
              </Card>
              <Card className="card-with-header-bg border-2 border-black text-gray-800 p-6 hover:border-gray-800">
                <div className="card-content-bottom">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Dashboard Admin</h3>
                  <p className="text-sm leading-relaxed text-gray-700">Panel kontrol lengkap untuk mengelola bisnis, analytics, dan monitoring performa.</p>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>

        <div className="about-content">
          <div className="content-text">
            <h3>Why Choose LevelUp?</h3>
            <p>
              We're not just developers—we're digital craftspeople who understand that behind every great product is thoughtful planning, clean execution, and genuine care for the user experience.
            </p>
            <p>
              Our team combines technical expertise with design thinking to create solutions that don't just work, but work beautifully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;