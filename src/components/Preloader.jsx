import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import NexigenLogo from './NexigenLogo';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const progressRef = useRef(null);
  const glowRef = useRef(null);
  const [percent, setPercent] = useState(0);

  const text = "NEXIGEN STUDIOS";

  useEffect(() => {
    // Lock body scroll during preloading
    document.body.style.overflow = 'hidden';

    // Letters array
    const letters = titleRef.current.querySelectorAll('.preloader-char');

    // Progress counter animation
    const counterObj = { val: 0 };
    const timeline = gsap.timeline({
      onComplete: () => {
        // Exit animation
        gsap.to(letters, {
          y: -50,
          opacity: 0,
          scale: 0.8,
          stagger: 0.02,
          duration: 0.6,
          ease: 'power3.inOut'
        });

        gsap.to(logoRef.current, {
          scale: 1.3,
          opacity: 0,
          duration: 0.6,
          ease: 'power4.in'
        });

        gsap.to(progressRef.current.parentNode, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.2
        });

        gsap.to(containerRef.current, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', // slide up reveal
          duration: 1,
          delay: 0.5,
          ease: 'power4.inOut',
          onComplete: () => {
            document.body.style.overflow = '';
            onComplete();
          }
        });
      }
    });

    // Animate logo in first, then letters
    timeline.fromTo(logoRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.0, ease: 'back.out(1.7)' }
    );

    timeline.fromTo(letters, 
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.05, ease: 'power4.out' },
      "-=0.5"
    );

    // Animate progress bar & percent
    timeline.to(counterObj, {
      val: 100,
      duration: 3,
      ease: 'power2.out',
      onUpdate: () => {
        const rounded = Math.floor(counterObj.val);
        setPercent(rounded);
        if (progressRef.current) {
          progressRef.current.style.width = `${rounded}%`;
        }
      }
    }, "-=1.0");

    // Glow effect pulsating
    gsap.to(glowRef.current, {
      opacity: 0.8,
      scale: 1.2,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => {
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="preloader-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#ffffff',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }}
    >
      {/* Background Energy Particle Glow */}
      <div 
        ref={glowRef}
        className="preloader-bg-glow"
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          opacity: 0.3,
          zIndex: 1
        }}
      />

      {/* Main Content Area */}
      <div 
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        {/* Animated Brand Logo */}
        <div ref={logoRef} style={{ marginBottom: '10px' }}>
          <NexigenLogo size={80} />
        </div>

        {/* Title */}
        <h1 
          ref={titleRef}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: '#0f172a',
            display: 'flex',
            overflow: 'hidden',
            textShadow: 'none',
            marginBottom: '10px'
          }}
        >
          {text.split("").map((char, index) => (
            <span 
              key={index} 
              className="preloader-char"
              style={{ 
                display: 'inline-block', 
                whiteSpace: char === ' ' ? 'pre' : 'normal',
                color: index >= 8 ? '#0066ff' : '#0f172a', // highlight STUDIOS in blue
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Progress Bar Container */}
        <div 
          style={{
            width: '280px',
            height: '2px',
            backgroundColor: 'rgba(15, 23, 42, 0.08)',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative',
            marginTop: '20px',
            boxShadow: '0 0 10px rgba(0, 102, 255, 0.05)'
          }}
        >
          {/* Progress fill */}
          <div 
            ref={progressRef}
            style={{
              width: '0%',
              height: '100%',
              backgroundColor: '#0066ff',
              boxShadow: '0 0 8px #0066ff, 0 0 20px #0066ff',
              transition: 'width 0.1s linear'
            }}
          />
        </div>

        {/* Percent readout */}
        <span 
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            color: '#0066ff',
            marginTop: '10px',
            opacity: 0.8,
            textShadow: '0 0 8px rgba(0, 102, 255, 0.2)'
          }}
        >
          {percent}%
        </span>
      </div>

      {/* Futuristic status detail */}
      <div 
        style={{
          position: 'absolute',
          bottom: '5vh',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: 'rgba(15, 23, 42, 0.3)',
          textTransform: 'uppercase',
          zIndex: 2
        }}
      >
        Initializing Systems // Nexigen 3D Engine
      </div>
    </div>
  );
}
