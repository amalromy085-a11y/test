import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 0,
      name: "Jeevan Sunny",
      role: "CEO, Gym at your Home",
      text: "Nexigen Studios completely revamped our online booking platform. The premium glassmorphic UI and smooth layout transition made it incredibly easy for clients to sign up for home training. Our subscription conversion rate shot up by 40%!",
      stars: 5,
      avatar: "J"
    },
    {
      id: 1,
      name: "Bekson Davis",
      role: "MD, Easter Car Wash",
      text: "We wanted a clean, professional web application for our car wash booking telemetry. Nexigen built a custom backend wrapped in a luxury visual panel that our customers absolutely love using. Exceptional engineering quality.",
      stars: 5,
      avatar: "B"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials"
      style={{
        padding: '120px 0',
        width: '100%',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '650px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background Soft radial gradient */}
      <div 
        className="radial-glow"
        style={{ top: '20%', left: '30%', transform: 'scale(1.2)' }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1, width: '100%' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '0.85rem',
              color: '#0066ff',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
            }}
          >
            Feedbacks
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              marginTop: '10px',
              color: 'var(--color-text)'
            }}
          >
            Endorsed by Industry Leaders
          </motion.h2>
        </div>

        {/* 3D Stack Carousel */}
        <div 
          style={{
            position: 'relative',
            height: '380px',
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
            perspective: '1200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          className="carousel-3d-container"
        >
          {testimonials.map((test, index) => {
            // Calculate spatial offset relative to active card
            const diff = index - activeIndex;
            
            // Handle looping display (for 3 elements, offset should be -1, 0, 1)
            let offset = diff;
            if (diff < -1) offset += testimonials.length;
            if (diff > 1) offset -= testimonials.length;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible) return null;

            // Compute styles based on spatial offset
            const rotateY = offset * -35;
            const xOffset = offset * 260; // pixel separation
            const zOffset = isActive ? 100 : -100;
            const scale = isActive ? 1 : 0.85;
            const opacity = isActive ? 1 : 0.4;

            return (
              <motion.div
                key={test.id}
                animate={{
                  x: xOffset,
                  scale: scale,
                  opacity: opacity,
                  rotateY: rotateY,
                  z: zOffset,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 22
                }}
                onClick={() => {
                  if (!isActive) setActiveIndex(test.id);
                }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  maxWidth: '520px',
                  height: '280px',
                  cursor: isActive ? 'default' : 'pointer',
                  transformStyle: 'preserve-3d',
                  zIndex: isActive ? 10 : 5
                }}
                className="carousel-card-wrapper"
              >
                <div 
                  className="glass-panel"
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: '35px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: isActive ? '1px solid rgba(0, 102, 255, 0.3)' : '1px solid rgba(15, 23, 42, 0.06)',
                    boxShadow: isActive ? '0 15px 35px rgba(0, 102, 255, 0.08)' : 'none',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.4)'
                  }}
                >
                  {/* Decorative Elements */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(test.stars)].map((_, i) => (
                        <Star key={i} size={14} color="#0066ff" fill="#0066ff" />
                      ))}
                    </div>
                    <Quote size={30} color="#0066ff" style={{ opacity: 0.2 }} />
                  </div>

                  {/* Feedback Text */}
                  <p style={{
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    lineHeight: 1.6,
                    color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                    fontStyle: 'italic',
                    margin: '15px 0'
                  }}>
                    "{test.text}"
                  </p>

                  {/* Author Detail */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* Fake avatar badge */}
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0066ff, #00d9ff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      boxShadow: '0 4px 10px rgba(0, 102, 255, 0.3)'
                    }}>
                      {test.avatar}
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--color-text)', fontSize: '0.95rem', fontWeight: 600 }}>{test.name}</h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{test.role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Control Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
          <button
            onClick={handlePrev}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.03)',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text)',
              cursor: 'pointer'
            }}
            className="interactive-item"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.03)',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text)',
              cursor: 'pointer'
            }}
            className="interactive-item"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .carousel-card-wrapper {
            max-width: 290px !important;
            height: 320px !important;
          }
          .carousel-3d-container {
            height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
