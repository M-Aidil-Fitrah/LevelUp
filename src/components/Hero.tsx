import React, { useState, useEffect, useRef } from 'react';

interface HeroProps {
  onNavbarTransformChange?: (transform: number | undefined) => void;
  onHeroActiveChange?: (active: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavbarTransformChange, onHeroActiveChange }) => {
  const [contentOpacity, setContentOpacity] = useState(1);
  const [isHeroLocked, setIsHeroLocked] = useState(true);
  const scrollAccumulator = useRef(0);
  const hasUnlocked = useRef(false);
  const unlockTime = useRef(0);

  const handleJoinToday = () => {
    // Simple native smooth scroll
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Manage scroll lock with preserved layout
  useEffect(() => {
    if (isHeroLocked) {
      // Store current scroll and prevent scrolling with overflow hidden
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // No scrollbar compensation needed
      window.scrollTo(0, 0);
    } else {
      // Restore normal scrolling
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isHeroLocked]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isHeroLocked) return;

      // Only prevent default if we're still in hero lock mode
      e.preventDefault();
      
      // Accumulate scroll delta (both directions)
      scrollAccumulator.current += e.deltaY;
      
      // Clamp to prevent negative values, but allow reverse scrolling
      if (scrollAccumulator.current < 0) {
        scrollAccumulator.current = 0;
        // Re-enable hero lock if we scroll back to beginning
        setIsHeroLocked(true);
      }

      const maxScroll = 800; // Total scroll needed to complete all animations
      const navbarFadeEnd = 200; // Navbar fades from 0 to 200
      const contentFadeStart = 200; // Content starts fading after navbar
      const contentFadeEnd = 600; // Content finishes fading

      // Update navbar transform (slide up effect)
      if (scrollAccumulator.current <= navbarFadeEnd) {
        const navProgress = scrollAccumulator.current / navbarFadeEnd;
        const transformY = -100 * navProgress; // Slide up 100px
        onNavbarTransformChange?.(transformY);
      } else {
        onNavbarTransformChange?.(- 100); // Fully hidden (100px up)
      }

      // Update content opacity
      if (scrollAccumulator.current <= contentFadeStart) {
        setContentOpacity(1);
      } else if (scrollAccumulator.current >= contentFadeEnd) {
        setContentOpacity(0);
      } else {
        const contentProgress = (scrollAccumulator.current - contentFadeStart) / (contentFadeEnd - contentFadeStart);
        setContentOpacity(1 - contentProgress);
      }

      // Unlock hero when all animations are complete
      if (scrollAccumulator.current >= maxScroll && isHeroLocked && !hasUnlocked.current) {
        hasUnlocked.current = true;
        unlockTime.current = Date.now();
        setIsHeroLocked(false);
        // Release navbar control immediately
        onHeroActiveChange?.(false);
        onNavbarTransformChange?.(undefined);
      }
    };

    const handleScroll = () => {
      // Only handle re-engagement after cooldown period
      const now = Date.now();
      if (!isHeroLocked && hasUnlocked.current && (now - unlockTime.current > 2000)) {
        const scrollY = window.scrollY;
        if (scrollY <= 5) { // Very strict threshold
          // Only re-engage if user manually scrolled to absolute top after cooldown
          hasUnlocked.current = false;
          unlockTime.current = 0;
          setIsHeroLocked(true);
          scrollAccumulator.current = 600;
          
          onHeroActiveChange?.(true);
          onNavbarTransformChange?.(-100);
          setContentOpacity(0);
        }
      }
    };    // Add wheel listener for scroll accumulation
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Only add scroll listener when unlocked for re-engagement
    if (!isHeroLocked) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHeroLocked]);

  return (
    <main className="hero-section" id="home">
      <div className="hero-container">
        {/* Rounded container with background image like Superpower */}
        <div className="hero-rounded-container">
          <div className="hero-background-image"></div>
          <div 
            className="hero-gradient-overlay"
            style={{ opacity: contentOpacity }}
          ></div>
          
          {/* Content positioned over the image */}
          <div 
            className="hero-content"
            style={{ opacity: contentOpacity }}
          >
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