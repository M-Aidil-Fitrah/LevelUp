import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>LevelUp</h3>
            <p>Building tomorrow's digital experiences with purpose and precision.</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <ul className="footer-links">
              <li>
                <a 
                  href="#home" 
                  aria-label="Go to homepage"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  aria-label="Learn about us"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  aria-label="View our services"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  aria-label="Contact us"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} LevelUp. Built with accessibility and performance in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;