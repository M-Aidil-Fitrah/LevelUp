import React from 'react';
import { motion } from 'framer-motion';
import CardSwap, { Card } from './CardSwap';

const About: React.FC = () => {
  // Animation variants for text elements
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
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

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 10 
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const
      }
    })
  };

  const features = [
    {
      title: "Marketplace UMKM Terpercaya",
      description: "Toko online gratis untuk UMKM Indonesia dengan sistem pembayaran aman dan integrasi dengan semua bank lokal."
    },
    {
      title: "Hyperlocal Community", 
      description: "Menghubungkan UMKM dengan pelanggan di sekitar untuk mendorong ekonomi lokal dan mengurangi ongkos kirim."
    },
    {
      title: "AI Bisnis Assistant",
      description: "Chatbot cerdas berbahasa Indonesia yang membantu analisis bisnis, customer service, dan strategi marketing."
    }
  ];

  // Helper function to split text into words for animation
  const AnimatedText = ({ text, className }: { 
    text: string; 
    className?: string;
  }) => {
    const words = text.split(' ');
    return (
      <motion.div className={className} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordVariants}
            style={{ 
              display: 'inline-block', 
              marginRight: '0.25em'
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  // Special component for the main title with LevelUp highlighted
  const AnimatedTitle = () => {
    const titleParts = [
      { text: 'LevelUp', isHighlight: true },
      { text: 'Solusi', isHighlight: false },
      { text: 'Digital', isHighlight: false },
      { text: 'untuk', isHighlight: false },
      { text: 'UMKM', isHighlight: false }
    ];

    return (
      <motion.div className="approach-features-title" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {titleParts.map((part, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordVariants}
            style={{ 
              display: 'inline-block', 
              marginRight: '0.25em',
              ...(part.isHighlight && {
                background: 'linear-gradient(135deg, #ccff00, #a6d900)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700'
              })
            }}
          >
            {part.text}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div 
          className="approach-content-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div 
            className="approach-title-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <AnimatedTitle />
            <motion.div variants={textVariants}>
              <AnimatedText 
                text="Teknologi canggih yang mudah diakses untuk semua pelaku UMKM Indonesia" 
                className="approach-features-subtitle"
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="approach-card-swap"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: [0.4, 0, 0.2, 1] 
            }}
          >
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
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
};

export default About;