import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "4,999",
      desc: "Perfect for small businesses and personal brands.",
      features: ["5-page website", "Mobile responsive", "Basic SEO setup", "1 month support", "Contact form", "Google Analytics"],
      off: ["Custom animations", "Priority support"],
      popular: false
    },
    {
      name: "Growth",
      price: "6,999",
      desc: "Ideal for growing businesses ready to scale.",
      features: ["10-page website", "Mobile responsive", "Full SEO setup", "3 months support", "Custom animations", "CMS integration", "Performance optimization"],
      off: ["Priority support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Full-scale solutions for ambitious brands.",
      features: ["Unlimited pages", "Mobile responsive", "Advanced SEO", "6 months support", "Custom animations", "Priority support", "Dedicated account manager"],
      off: [],
      popular: false
    }
  ];

  const handlePlanSelection = (planName, planPrice) => {
    const waNum = "918921026848";
    const baseMsg = planPrice === "Custom"
      ? `Hi! I'm interested in the Enterprise plan. Let's discuss a custom quote.`
      : `Hi! I'm interested in the ${planName} plan (₹${planPrice}). Can we get started?`;
    
    const encodedMsg = encodeURIComponent(baseMsg);
    const waLink = `https://wa.me/${waNum}?text=${encodedMsg}`;
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="pricing"
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
          top: '30%',
          right: '10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.04) 0%, transparent 60%)',
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
            Pricing
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
            Transparent Pricing Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              marginTop: '15px',
              maxWidth: '500px',
              margin: '15px auto 0 auto'
            }}
          >
            No hidden fees. Pick the plan that fits your goals.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{
                height: '100%',
                display: 'flex'
              }}
            >
              <div 
                className="glass-panel"
                style={{
                  padding: '45px 35px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '24px',
                  position: 'relative',
                  border: plan.popular 
                    ? '2px solid #0066ff' 
                    : '1px solid rgba(15, 23, 42, 0.06)',
                  boxShadow: plan.popular 
                    ? '0 20px 45px rgba(0, 102, 255, 0.1)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.02)',
                  backgroundColor: plan.popular 
                    ? 'rgba(255, 255, 255, 0.9)' 
                    : 'rgba(255, 255, 255, 0.65)'
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#0066ff',
                    color: '#ffffff',
                    padding: '6px 18px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 12px rgba(0, 102, 255, 0.3)'
                  }}>
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Card Top */}
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    marginBottom: '10px'
                  }}>
                    {plan.name}
                  </h3>
                  
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '25px',
                    minHeight: '40px'
                  }}>
                    {plan.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '30px' }}>
                    {plan.price !== "Custom" ? (
                      <>
                        <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0066ff', marginRight: '4px' }}>₹</span>
                        <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-text)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                          {plan.price}
                        </span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginLeft: '6px' }}>/project</span>
                      </>
                    ) : (
                      <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-text)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                        Custom
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', backgroundColor: 'rgba(15, 23, 42, 0.08)', marginBottom: '30px' }} />

                  {/* Features List */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
                    {plan.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(0, 102, 255, 0.1)',
                          color: '#0066ff'
                        }}>
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                    {plan.off.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--color-text-muted)', opacity: 0.5 }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(15, 23, 42, 0.05)',
                          color: 'var(--color-text-muted)'
                        }}>
                          <X size={12} strokeWidth={3} />
                        </span>
                        <span style={{ textDecoration: 'line-through' }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handlePlanSelection(plan.name, plan.price)}
                  style={{
                    width: '100%',
                    padding: '14px 0',
                    borderRadius: '14px',
                    border: plan.popular ? 'none' : '2px solid var(--color-text)',
                    backgroundColor: plan.popular ? '#0066ff' : 'transparent',
                    color: plan.popular ? '#ffffff' : 'var(--color-text)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    boxShadow: plan.popular ? '0 8px 20px rgba(0, 102, 255, 0.2)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                  className="interactive-item"
                >
                  Get Started →
                </motion.button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
