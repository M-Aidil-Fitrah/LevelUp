import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: "Digitalisasi UMKM",
      description: "Transformasi digital lengkap untuk UMKM tradisional menjadi bisnis modern yang terkoneksi.",
      details: ["Toko Online Gratis", "Sistem Pembayaran Digital", "Manajemen Inventory"]
    },
    {
      title: "Pelatihan & Pendampingan",
      description: "Program edukasi dan pendampingan khusus untuk meningkatkan literasi digital UMKM.",
      details: ["Pelatihan Digital Marketing", "Workshop E-commerce", "Konsultasi Bisnis"]
    },
    {
      title: "Akses Permodalan",
      description: "Menghubungkan UMKM dengan lembaga keuangan dan investor untuk kemudahan akses modal usaha.",
      details: ["Kredit UMKM", "Angel Investor Network", "Pinjaman P2P Lending"]
    }
  ];

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-container">
        <motion.header 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 id="services-heading" className="section-title">
            Layanan Kami untuk UMKM
          </h2>
          <p className="section-subtitle">
            Solusi komprehensif untuk mengembangkan dan memajukan bisnis UMKM Indonesia
          </p>
        </motion.header>

        <motion.div 
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.article 
              key={index} 
              className="service-card"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="service-content">
                <h3 className="service-title">
                  {service.title}
                </h3>
                <p className="service-description">
                  {service.description}
                </p>
                <ul className="service-details" aria-label={`${service.title} includes`}>
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="cta-content">
            <h3>Siap Memulai Digitalisasi?</h3>
            <p>Mari diskusikan bagaimana kami dapat membantu mengembangkan UMKM Anda.</p>
            <motion.a 
              href="#contact" 
              className="cta-link"
              aria-describedby="contact-info"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Hubungi Kami
            </motion.a>
            <p id="contact-info" className="cta-info">
              Respon dalam 24 jam
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;