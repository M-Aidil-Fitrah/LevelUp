import React, { useState, useEffect } from 'react';

interface NavbarProps {
  className?: string;
  controlledTransform?: number;
}

const Navbar: React.FC<NavbarProps> = ({ className = '', controlledTransform }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.getElementById('home');
      
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const isCurrentlyInHero = currentScrollY < heroHeight - 100;
        
        // If controlled by Hero component (in hero section)
        if (controlledTransform !== undefined && isCurrentlyInHero) {
          setIsVisible(true);
        } 
        // If not controlled (outside hero or hero not controlling)
        else if (controlledTransform === undefined || !isCurrentlyInHero) {
          if (currentScrollY <= 100) {
            // At top, always show
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY + 5) {
            // Scrolling down with threshold - hide navbar
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY - 5) {
            // Scrolling up with threshold - show navbar
            setIsVisible(true);
          }
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    // Initialize state
    setIsVisible(true);
    setLastScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial state after component mounts
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, controlledTransform]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className={`modern-navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${className}`}
      style={{ 
        transform: controlledTransform !== undefined 
          ? `translateX(-50%) translateY(${controlledTransform}px)` 
          : undefined
      }}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, '#home')}
            aria-label="LevelUp - Go to homepage"
          >
            LevelUp
          </a>
        </div>

        <ul className="navbar-menu">
          <li>
            <a 
              href="#marketplace" 
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              Marketplace
            </a>
          </li>
          <li>
            <a 
              href="#maps" 
              onClick={(e) => handleSmoothScroll(e, '#services')}
            >
              Maps Hyperlocal
            </a>
          </li>
          <li>
            <a 
              href="#chatbot" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Chatbot AI
            </a>
          </li>
        </ul>

        <div className="navbar-cta">
          <button className="navbar-cta-button">
            Try LevelUp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;