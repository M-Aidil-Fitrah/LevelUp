import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

const UmkmEconomy: React.FC = () => {
  const economyStats = [
    {
      number: "65.5 Juta",
      label: "Unit UMKM",
      description: "Total UMKM di Indonesia pada 2023"
    },
    {
      number: "61.97%",
      label: "Kontribusi PDB",
      description: "UMKM berkontribusi terhadap PDB nasional"
    },
    {
      number: "97.02%",
      label: "Penyerapan Tenaga Kerja",
      description: "UMKM menyerap tenaga kerja nasional"
    },
    {
      number: "14.37%",
      label: "Kontribusi Ekspor",
      description: "UMKM berkontribusi pada ekspor nasional"
    }
  ];

  const challenges = [
    {
      icon: "📱",
      title: "Digitalisasi Rendah",
      description: "Hanya 13% UMKM yang sudah go-digital, padahal potensi pasar digital sangat besar"
    },
    {
      icon: "💰",
      title: "Akses Pembiayaan",
      description: "Kesulitan mengakses modal dan kredit untuk pengembangan usaha"
    },
    {
      icon: "📊",
      title: "Manajemen Bisnis",
      description: "Kurangnya sistem pencatatan keuangan dan manajemen inventory yang baik"
    },
    {
      icon: "🌐",
      title: "Jangkauan Pasar",
      description: "Terbatasnya akses ke pasar yang lebih luas dan pelanggan baru"
    }
  ];

  return (
    <section className="umkm-economy-section" id="umkm-economy">
      <div className="umkm-economy-container">
        {/* Header */}
        <motion.div 
          className="umkm-economy-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="umkm-economy-badge"
            variants={itemVariants}
          >
            <span className="badge-text">Ekonomi Indonesia</span>
          </motion.div>
          <motion.h2 
            className="umkm-economy-title"
            variants={itemVariants}
          >
            Potensi Besar UMKM<br />
            <span className="title-highlight">Indonesia</span>
          </motion.h2>
          <motion.p 
            className="umkm-economy-subtitle"
            variants={itemVariants}
          >
            UMKM adalah tulang punggung perekonomian Indonesia yang perlu didukung
            dengan teknologi dan inovasi untuk mencapai potensi maksimalnya.
          </motion.p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div 
          className="umkm-stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {economyStats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="umkm-stat-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.3,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.number}
              </motion.div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Challenges Section */}
        <div className="umkm-challenges-section">
          <motion.div 
            className="challenges-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h3 
              className="challenges-title"
              variants={itemVariants}
            >
              Tantangan yang Dihadapi UMKM
            </motion.h3>
            <motion.p 
              className="challenges-subtitle"
              variants={itemVariants}
            >
              Memahami tantangan untuk memberikan solusi yang tepat sasaran
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="challenges-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {challenges.map((challenge, index) => (
              <motion.div 
                key={index} 
                className="challenge-card"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="challenge-icon"
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
                    scale: 1.1,
                    transition: { 
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                >
                  {challenge.icon}
                </motion.div>
                <h4 className="challenge-title">{challenge.title}</h4>
                <p className="challenge-description">{challenge.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="umkm-cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { 
              opacity: 0,
              y: 60
            },
            visible: { 
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }
            }
          }}
        >
          <motion.div 
            className="umkm-cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h3 
              className="umkm-cta-title"
              variants={itemVariants}
            >
              Mari Bersama Memajukan UMKM Indonesia
            </motion.h3>
            <motion.p 
              className="umkm-cta-description"
              variants={itemVariants}
            >
              Platform kami hadir untuk menjawab tantangan dan memaksimalkan potensi UMKM
              melalui teknologi AI dan marketplace hyperlocal.
            </motion.p>
            <motion.div 
              className="umkm-cta-buttons"
              variants={itemVariants}
            >
              <motion.button 
                className="umkm-cta-primary"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Mulai Digitalisasi
                <motion.span 
                  className="cta-arrow"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </motion.button>
              <motion.button 
                className="umkm-cta-secondary"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UmkmEconomy;