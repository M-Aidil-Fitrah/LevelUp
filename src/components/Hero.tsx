import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to Our Platform
        </h1>
        <p className="hero-subtitle">
          Experience the power of modern design with beautiful typography
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">
            Get Started
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="placeholder-image">
          <span>Your Amazing Product</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;