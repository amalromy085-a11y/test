import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, ShoppingCart, Paintbrush, ShieldCheck, 
  Cpu, Layers, AppWindow, Cloud, ArrowRight, X 
} from 'lucide-react';

// Individual 3D Glass Tilt Card Component
function TiltCard({ service, onClick }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to the card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Convert to percentage rotation (max 15 degrees)
    const factor = 15;
    const rotateX = -(y / (rect.height / 2)) * factor;
    const rotateY = (x / (rect.width / 2)) * factor;

    setCoords({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: '1000px',
        cursor: 'pointer',
        height: '100%'
      }}
    >
      <motion.div
        animate={{
          rotateX: coords.x,
          rotateY: coords.y,
          scale: isHovered ? 1.05 : 1,
          translateZ: isHovered ? 20 : 0
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.8 }}
        className="glass-panel"
        style={{
          padding: '40px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          border: isHovered ? '1px solid rgba(0, 102, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
          transformStyle: 'preserve-3d',
          boxShadow: isHovered ? '0 20px 40px rgba(0, 102, 255, 0.15)' : 'none'
        }}
      >
        {/* Animated reflection overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at ${isHovered ? 'var(--mouse-x, 50%) var(--mouse-y, 50%)' : '50% 50%'}, rgba(255, 255, 255, 0.06) 0%, transparent 60%)`,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div style={{ transform: 'translateZ(40px)', zIndex: 2 }}>
          {/* Icon Badge */}
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: isHovered ? 'linear-gradient(135deg, #0066ff, #00d9ff)' : 'rgba(0, 102, 255, 0.05)',
            border: isHovered ? 'none' : '1px solid rgba(0, 102, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '25px',
            transition: 'background 0.4s ease, border-color 0.4s ease',
            boxShadow: isHovered ? '0 8px 20px rgba(0, 102, 255, 0.3)' : 'none'
          }}>
            {React.cloneElement(service.icon, { color: isHovered ? '#ffffff' : '#0066ff' })}
          </div>

          <h3 style={{
            fontSize: '1.4rem',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'var(--color-text)',
            marginBottom: '15px'
          }}>
            {service.title}
          </h3>

          <p style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.5,
          }}>
            {service.shortDesc}
          </p>
        </div>

        {/* Bottom CTA */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          marginTop: '30px', 
          transform: 'translateZ(30px)',
          color: isHovered ? '#0066ff' : 'var(--color-text-muted)',
          fontWeight: 600,
          fontSize: '0.85rem',
          transition: 'color 0.3s ease'
        }}>
          <span>Explore Details</span>
          <ArrowRight size={14} style={{ 
            transform: isHovered ? 'translateX(5px)' : 'none', 
            transition: 'transform 0.3s ease' 
          }} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 'custom-web',
      icon: <Code2 size={28} color="#ffffff" />,
      title: "Custom Web Development",
      shortDesc: "Bespoke high-performance websites hand-coded for luxury branding and unmatched speed.",
      longDesc: "We build tailored websites from the ground up using React, Next.js, and modern tools. We avoid heavy template systems, ensuring your site is blazing fast, perfectly secure, and fully customized to your business operations. Every interaction is coded for extreme visual responsiveness.",
      features: ["React & Next.js Architecture", "Tailored Custom Integrations", "Optimized Loading Speed (95+)", "SEO Semantic Structuring"]
    },
    {
      id: 'ecom',
      icon: <ShoppingCart size={28} color="#ffffff" />,
      title: "E-Commerce Solutions",
      shortDesc: "Scalable online stores with immersive shopping layouts and friction-free user checkouts.",
      longDesc: "Transform online shopping into a cinematic, high-conversion brand experience. We integrate Shopify, custom Stripe flows, and headless CMS frameworks to develop e-commerce storefronts that combine high-end design aesthetics with robust transactional stability.",
      features: ["Headless Commerce Integration", "Seamless Stripe Checkouts", "Immersive Product 3D Previews", "Dynamic Inventory Pipelines"]
    },
    {
      id: 'uiux',
      icon: <Paintbrush size={28} color="#ffffff" />,
      title: "UI/UX Design",
      shortDesc: "Apple-level interactive designs focused on user psychology and pixel perfection.",
      longDesc: "We craft digital interfaces that feel fluid and alive. Through deep analysis of user flows, wireframing, and interactive high-fidelity prototyping, we design experiences that simplify complex operations while offering a luxury visual feel.",
      features: ["Figma Design Systems", "Interactive Prototyping", "User Behavior Analysis", "Premium Brand Visuals"]
    },
    {
      id: 'branding',
      icon: <ShieldCheck size={28} color="#ffffff" />,
      title: "Branding & Identity",
      shortDesc: "Cohesive future-focused branding, logo systems, and visual guidelines.",
      longDesc: "Create an unforgettable brand presence. We design visual systems, typography guidelines, logos, and digital brand books that establish authority and resonate with high-end clientele.",
      features: ["Brand Voice & Positioning", "Logo Design & Identity", "Modern Color Palettes", "Comprehensive Asset Kits"]
    },
    {
      id: 'mgmt-sys',
      icon: <Layers size={28} color="#ffffff" />,
      title: "Business Systems",
      shortDesc: "Tailored enterprise solutions, internal portals, CRM and ERP software integrations.",
      longDesc: "We build internal business systems that automate manual tasks. From client portals to bespoke inventory engines, we construct cloud systems that unify your operations under a clean, secure glassmorphism interface.",
      features: ["Bespoke CRM Modules", "Secure Employee Portals", "Database Engineering", "Third-Party ERP Connectors"]
    },
    {
      id: 'ai-powered',
      icon: <Cpu size={28} color="#ffffff" />,
      title: "AI-Powered Solutions",
      shortDesc: "Innovative AI integration, LLM-based tools, smart agents, and automated analytics.",
      longDesc: "Inject future-ready capability into your website. We design custom AI chat systems, semantic search, generative content pipelines, and predictive algorithms that make your site smarter and more engaging.",
      features: ["LLM API Orchestrations", "Smart AI Agents", "Semantic Vector Search", "Data-Driven Recommendations"]
    },
    {
      id: 'web-apps',
      icon: <AppWindow size={28} color="#ffffff" />,
      title: "Web Applications",
      shortDesc: "Feature-rich interactive applications engineered for scalability and high performance.",
      longDesc: "Full-stack web application development. We build scalable backend databases, API systems, and real-time stateful frontends that enable users to accomplish complex digital tasks smoothly on any device.",
      features: ["State-Driven Web Clients", "Secure User Authentications", "Websocket Real-Time Sync", "REST/GraphQL Middleware"]
    },
    {
      id: 'cloud-platforms',
      icon: <Cloud size={28} color="#ffffff" />,
      title: "Cloud-Based Platforms",
      shortDesc: "Secure cloud infrastructure, microservices, serverless frameworks, and global hosting.",
      longDesc: "Deploy your digital assets securely on the global cloud. We architect AWS/Vercel pipelines, serverless functions, database scaling rules, and content delivery networks (CDNs) to keep your website online 100% of the time.",
      features: ["AWS/Vercel Deployments", "Global CDN Distribution", "Automated Scalability Limits", "High-Security Firewalls"]
    }
  ];

  return (
    <section 
      id="services"
      style={{
        padding: '120px 0',
        width: '100%',
        backgroundColor: '#ffffff', // pure white background
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Soft radial gradient */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        
        {/* Section Title */}
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
            Capabilities
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
            Bespoke Services for Digital Leaders
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px',
            position: 'relative'
          }}
        >
          {servicesData.map((service) => (
            <TiltCard 
              key={service.id} 
              service={service} 
              onClick={() => setSelectedService(service)} 
            />
          ))}
        </div>

      </div>

      {/* Detailed Service Overlay Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setSelectedService(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                width: '100%',
                maxWidth: '650px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '40px'
              }}
              className="glass-panel"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(15, 23, 42, 0.05)',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text)'
                }}
              >
                <X size={18} />
              </button>

              {/* Icon */}
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #0066ff, #00d9ff)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                boxShadow: '0 8px 25px rgba(0, 102, 255, 0.4)'
              }}>
                {React.cloneElement(selectedService.icon, { color: '#ffffff' })}
              </div>

              {/* Info */}
              <h3 style={{
                fontSize: '2rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                color: 'var(--color-text)',
                marginBottom: '15px'
              }}>
                {selectedService.title}
              </h3>

              <p style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                marginBottom: '30px'
              }}>
                {selectedService.longDesc}
              </p>

              {/* Features List */}
              <h4 style={{
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#0066ff',
                fontWeight: 700,
                marginBottom: '15px'
              }}>
                Scope of Deliverables
              </h4>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '15px'
              }}>
                {selectedService.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'rgba(0, 102, 255, 0.03)',
                      border: '1px solid rgba(0, 102, 255, 0.08)',
                      padding: '12px 18px',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--color-text)'
                    }}
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#0066ff',
                      boxShadow: '0 0 8px #0066ff'
                    }} />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
