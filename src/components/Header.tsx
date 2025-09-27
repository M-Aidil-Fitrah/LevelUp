import React, { useState, useEffect } from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.getElementById('home');
      
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const isCurrentlyInHero = currentScrollY < heroHeight - 100;
        setIsInHeroSection(isCurrentlyInHero);
        
        if (!isCurrentlyInHero) {
          // Show/hide navbar based on scroll direction when outside hero
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          // Hide navbar when in hero section
          setIsVisible(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    handleMenuClose();
    
    // Simple native smooth scroll
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`modern-header ${isVisible ? 'header-visible' : 'header-hidden'} ${isInHeroSection ? 'header-in-hero' : ''} ${className}`} role="banner">
      <div className="header-content">
        <div className="brand-logo">
          <a 
            href="#home" 
            aria-label="LevelUp - Go to homepage"
            onClick={(e) => handleSmoothScroll(e, '#home')}
          >
            levelup
          </a>
        </div>

        <nav className="header-nav" role="navigation" aria-label="Main navigation">
          <button
            className="mobile-menu-toggle"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
            aria-label="Toggle navigation menu"
            type="button"
          >
            <span className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <ul 
            className={`nav-links ${isMenuOpen ? 'nav-links--open' : ''}`}
            id="nav-menu"
            role="menubar"
          >
            <li role="none">
              <a 
                href="#marketplace" 
                onClick={(e) => handleSmoothScroll(e, '#about')}
                role="menuitem"
                className="nav-link"
              >
                Marketplace
              </a>
            </li>
            <li role="none">
              <a 
                href="#maps" 
                onClick={(e) => handleSmoothScroll(e, '#services')}
                role="menuitem"
                className="nav-link"
              >
                Maps Hyperlocal
              </a>
            </li>
            <li role="none">
              <a 
                href="#chatbot" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                role="menuitem"
                className="nav-link"
              >
                Chatbot AI
              </a>
            </li>
          </ul>

          <div className="header-actions">
            <a href="#login" className="login-link">Login</a>
            <button className="cta-button-header" onClick={(e) => handleSmoothScroll(e as any, '#contact')}>
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;