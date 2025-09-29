import React from 'react';
import { motion } from 'framer-motion';

const WhyLevelUp: React.FC = () => {
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

  return (
    <section className="why-levelup-section" id="why-levelup">
      <div className="why-levelup-container">
        <motion.div 
          className="why-levelup-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="why-levelup-title"
            variants={textVariants}
          >
            <AnimatedText 
              text="Mengapa LevelUp untuk UMKM Indonesia?" 
              className=""
            />
          </motion.h2>
          
          <motion.p 
            className="why-levelup-description"
            variants={textVariants}
          >
            <AnimatedText 
              text="Kami memahami tantangan unik yang dihadapi UMKM Indonesia. Dari keterbatasan akses teknologi hingga kesulitan menjangkau pasar yang lebih luas, kami hadir dengan solusi yang tepat sasaran dan mudah digunakan."
              className=""
            />
          </motion.p>
          
          <motion.p 
            className="why-levelup-description"
            variants={textVariants}
          >
            <AnimatedText 
              text="Platform kami dirancang khusus untuk kebutuhan bisnis lokal Indonesia, dengan fitur hyperlocal yang mendukung ekonomi daerah dan meningkatkan daya saing UMKM di era digital."
              className=""
            />
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyLevelUp;