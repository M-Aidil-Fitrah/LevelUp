import React from 'react';

const Hero: React.FC = () => {
  const handleJoinToday = () => {
    // Simple native smooth scroll
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <main className="hero-section" id="home">
      <div className="hero-container">
        {/* Rounded container with background image like Superpower */}
        <div className="hero-rounded-container">
          <div className="hero-background-image"></div>
          <div className="hero-gradient-overlay"></div>
          
          {/* Content positioned over the image */}
          <div className="hero-content">
            <h1 className="hero-title">
              Unlock your local<br />
              business potential
            </h1>
            
            <p className="hero-description">
              Empower 1,000+ local SMEs. Connect with hyperlocal marketplace.<br />
              AI-powered insights. All in one platform
            </p>

            <div className="hero-cta-section">
              <button 
                className="hero-cta-button"
                onClick={handleJoinToday}
                aria-describedby="cta-badge"
              >
                Join Today
                <span className="cta-arrow">→</span>
              </button>
              
              <div className="hero-eligibility">
                <span className="eligibility-icon">✓</span>
                <span id="cta-badge" className="eligibility-text">Free for SMEs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;