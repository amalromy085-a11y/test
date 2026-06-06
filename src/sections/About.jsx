import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, Target, Users, Award } from 'lucide-react';

export default function About() {
  const containerRef = useRef(null);

  // Track scroll progress of the About container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Grow the timeline line from 0% to 100% of height
  const scaleY = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);

  const timelineItems = [
    {
      icon: <Users size={24} color="#ffffff" />,
      title: "Who We Are",
      subtitle: "A Collective of Visionary Creators",
      text: "Nexigen Studios is a boutique digital agency combining award-winning design aesthetics with cutting-edge engineering. We design high-end web platforms that help premium brands establish an extraordinary digital presence.",
      align: "left"
    },
    {
      icon: <Eye size={24} color="#ffffff" />,
      title: "Our Vision",
      subtitle: "Pioneering the Next Era of the Web",
      text: "We believe the future of web design is immersive, 3D-driven, and emotionally engaging. Our vision is to blur the line between utility and cinematic storytelling, creating digital worlds that users love to explore.",
      align: "right"
    },
    {
      icon: <Target size={24} color="#ffffff" />,
      title: "Our Mission",
      subtitle: "Engineering Digital Masterpieces",
      text: "To build premium, highly scalable, and custom-tailored digital solutions that solve real business challenges. We don't believe in templates; we craft bespoke systems designed from the ground up for maximum visual impact.",
      align: "left"
    },
    {
      icon: <Award size={24} color="#ffffff" />,
      title: "Why Nexigen Studios?",
      subtitle: "The Signature Luxury Standard",
      text: "We bring meticulous Apple-level design quality, pixel-perfect responsiveness, smooth animations, and solid performance. We don't just build websites; we create modern masterpieces for modern businesses.",
      align: "right"
    }
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      style={{
        position: 'relative',
        padding: '120px 0',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#f8fafc'
      }}
    >
      {/* Background Radial Glow */}
      <div 
        className="radial-glow" 
        style={{ top: '10%', left: '-10%', transform: 'scale(1.2)' }} 
      />
      <div 
        className="radial-glow" 
        style={{ bottom: '15%', right: '-10%', transform: 'scale(1.2)' }} 
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        
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
            Our Story
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
              color: '#0f172a'
            }}
          >
            Crafting the Future of Web Experience
          </motion.h2>
        </div>

        {/* Timeline Content */}
        <div style={{ position: 'relative', width: '100%', minHeight: '800px', marginTop: '40px' }} className="timeline-container">
          
          {/* Central Vertical Line (Timeline Path) */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              height: '100%',
              backgroundColor: 'rgba(15, 23, 42, 0.05)',
              borderRadius: '2px',
            }}
            className="timeline-central-line"
          >
            {/* Scroll-Linked Growing Line */}
            <motion.div 
              style={{
                scaleY,
                originY: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#0066ff',
                borderRadius: '2px',
                boxShadow: '0 0 10px #0066ff, 0 0 20px #0066ff'
              }}
            />
          </div>

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: item.align === 'left' ? 'flex-start' : 'flex-end',
                  alignItems: 'center',
                  position: 'relative',
                  width: '100%',
                }}
                className={`timeline-row row-${item.align}`}
              >
                
                {/* Node on central line */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    border: '2px solid #0066ff',
                    boxShadow: '0 0 12px rgba(0, 102, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                  }}
                  className="timeline-node"
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0f172a' }} />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: item.align === 'left' ? -60 : 60,
                    y: 20
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    y: 0
                  }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{
                    width: '45%',
                  }}
                  className="timeline-card-wrapper"
                >
                  <div 
                    className="glass-panel"
                    style={{
                      padding: '40px',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '15px'
                    }}
                  >
                    {/* Glowing Accent */}
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(0, 102, 255, 0.05)',
                      border: '1px solid rgba(0, 102, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {React.cloneElement(item.icon, { color: '#0066ff' })}
                    </div>

                    <span style={{ 
                      fontSize: '0.8rem', 
                      color: '#0066ff', 
                      fontWeight: 600, 
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase'
                    }}>
                      {item.subtitle}
                    </span>

                    <h3 style={{ 
                      fontFamily: 'var(--font-display)', 
                      fontSize: '1.75rem', 
                      fontWeight: 700, 
                      color: '#0f172a' 
                    }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: '0.95rem', margin: 0 }}>
                      {item.text}
                    </p>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-central-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-node {
            left: 20px !important;
            transform: translate(-50%, -50%) !important;
          }
          .timeline-row {
            justify-content: flex-end !important;
            padding-left: 45px !important;
          }
          .timeline-card-wrapper {
            width: 100% !important;
          }
          .timeline-container {
            margin-top: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
