import React, { useState, useEffect } from 'react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.getElementById('home');
      
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const isCurrentlyInHero = currentScrollY < heroHeight - 50; // Small buffer
        
        if (isCurrentlyInHero) {
          // Always show navbar when in hero section
          setIsVisible(true);
        } else {
          // Outside hero section: hide immediately when scrolling down, show when scrolling up
          if (currentScrollY > lastScrollY) {
            // Scrolling down - hide navbar immediately
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show navbar immediately
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
  }, [lastScrollY]);

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