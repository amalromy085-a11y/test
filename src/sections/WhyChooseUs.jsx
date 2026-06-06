import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Zap, GitBranch, Terminal, Shield, 
  HeartHandshake, Rocket, TrendingUp 
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Palette size={24} color="#0066ff" />,
      title: "Premium Custom Design",
      desc: "No templates. We design custom luxury visual layouts tailored exactly to your brand guidelines."
    },
    {
      icon: <Zap size={24} color="#0066ff" />,
      title: "Fast Performance",
      desc: "Optimized server responses, clean bundle files, and compressed asset loads. 90+ Lighthouse targets."
    },
    {
      icon: <GitBranch size={24} color="#0066ff" />,
      title: "Scalable Architecture",
      desc: "Modular structures designed for easy feature scaling. Clean components that grow with your company."
    },
    {
      icon: <Terminal size={24} color="#0066ff" />,
      title: "Modern Technologies",
      desc: "Using the best stack including React, Three.js, GSAP, and Node.js for robust interactive solutions."
    },
    {
      icon: <Shield size={24} color="#0066ff" />,
      title: "Secure Development",
      desc: "Rigorous standards protecting forms, transaction protocols, and client databases from vulnerability gaps."
    },
    {
      icon: <HeartHandshake size={24} color="#0066ff" />,
      title: "Dedicated Support",
      desc: "Direct agency communication channels, continuous server monitoring, and monthly system health audits."
    },
    {
      icon: <Rocket size={24} color="#0066ff" />,
      title: "Future-Ready Solutions",
      desc: "Modular setup allows fast integrations of AI models, automated pipelines, or client dashboard apps."
    },
    {
      icon: <TrendingUp size={24} color="#0066ff" />,
      title: "Business-Focused",
      desc: "We align visual art with conversions, focusing on usability flows that turn visitors into paying clients."
    }
  ];

  return (
    <section 
      id="why-choose-us"
      style={{
        padding: '120px 0',
        width: '100%',
        backgroundColor: '#f8fafc', // light off-white background
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Soft radial gradient */}
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
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
            Our Advantages
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
            Why Modern Brands Choose Nexigen
          </motion.h2>
        </div>

        {/* Feature Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '30px'
          }}
        >
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              style={{
                height: '100%'
              }}
            >
              <div 
                className="glass-panel"
                style={{
                  padding: '35px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  border: '1px solid rgba(15, 23, 42, 0.05)',
                  position: 'relative'
                }}
              >
                {/* Floating Glow Indicator */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(0, 102, 255, 0.06)',
                  border: '1px solid rgba(0, 102, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 10px rgba(0, 102, 255, 0.1)'
                }}>
                  {feat.icon}
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginTop: '10px'
                }}>
                  {feat.title}
                </h3>

                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
