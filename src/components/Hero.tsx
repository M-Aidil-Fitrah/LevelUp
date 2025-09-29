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
  const lastScrollPosition = useRef(0);
  const touchStartY = useRef(0);
  const lastWheelTime = useRef(0);

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
      
      const now = Date.now();
      lastWheelTime.current = now;
      
      // Handle scrolling direction
      if (e.deltaY < 0) {
        // Scrolling up - allow rewinding the animation
        const rewindSpeed = Math.abs(e.deltaY) * 1.2; // Rewind speed
        scrollAccumulator.current = Math.max(0, scrollAccumulator.current - rewindSpeed);
      } else {
        // Scrolling down - continue animation
        scrollAccumulator.current += e.deltaY;
      }
      
      // Clamp to prevent negative values
      if (scrollAccumulator.current < 0) {
        scrollAccumulator.current = 0;
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
        
        // Ensure scroll is smooth after unlock
        setTimeout(() => {
          document.body.style.overflow = '';
          document.body.style.paddingRight = '';
        }, 100);
      }
    };

    const handleScroll = () => {
      const now = Date.now();
      const scrollY = window.scrollY;
      
      // Handle re-engagement for unlocked hero (completed animation)
      if (!isHeroLocked && hasUnlocked.current && (now - unlockTime.current > 800)) {
        // Check if user scrolled to the top
        if (scrollY <= 30) { // More forgiving threshold
          // Also check if user was scrolling upward
          const wasScrollingUp = scrollY < lastScrollPosition.current;
          
          if (wasScrollingUp || scrollY === 0) {
            // Re-engage hero section
            hasUnlocked.current = false;
            unlockTime.current = 0;
            setIsHeroLocked(true);
            scrollAccumulator.current = 600;
            
            onHeroActiveChange?.(true);
            onNavbarTransformChange?.(-100);
            setContentOpacity(0);
          }
        }
      }
      
      // Handle case where user scrolls to top while hero is still locked (mid-animation)
      if (isHeroLocked && !hasUnlocked.current && scrollY <= 10) {
        // Reset animation to beginning if user somehow scrolled to top during animation
        scrollAccumulator.current = 0;
        setContentOpacity(1);
        onNavbarTransformChange?.(0);
      }
      
      lastScrollPosition.current = scrollY;
    };    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle keyboard navigation that might bypass wheel events
      if (isHeroLocked && (e.key === 'Home' || e.key === 'PageUp' || e.key === 'ArrowUp')) {
        if (scrollAccumulator.current > 0) {
          // Reset to beginning if user tries to navigate up during animation
          scrollAccumulator.current = 0;
          setContentOpacity(1);
          onNavbarTransformChange?.(0);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (isHeroLocked) {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isHeroLocked) return;
      
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;
      
      // Simulate wheel event for touch
      if (Math.abs(deltaY) > 10) { // Minimum threshold for touch sensitivity
        const syntheticWheelEvent = {
          deltaY: deltaY * 2, // Amplify touch sensitivity
          preventDefault: () => e.preventDefault()
        } as WheelEvent;
        
        handleWheel(syntheticWheelEvent);
        touchStartY.current = currentY;
      }
    };

    // Add wheel listener for scroll accumulation
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Always add scroll listener for better detection
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
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
              Majukan UMKM<br />
              Indonesia Bersama
            </h1>
            
            <p className="hero-description">
              Platform digital all-in-one untuk 65+ juta UMKM Indonesia.<br />
              Marketplace hyperlocal, AI chatbot, dan solusi bisnis terintegrasi.
            </p>

            <div className="hero-cta-section">
              <button 
                className="hero-cta-button"
                onClick={handleJoinToday}
                aria-describedby="cta-badge"
              >
                Bergabung Sekarang
                <span className="cta-arrow">→</span>
              </button>
              
              <div className="hero-eligibility">
                <span className="eligibility-icon">🇮🇩</span>
                <span id="cta-badge" className="eligibility-text">Gratis untuk UMKM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;