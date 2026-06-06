import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import NexigenLogo from './NexigenLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-choose-us', label: 'Why Us' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      setScrolled(window.scrollY > 50);

      // Section spy to highlight current link
      const scrollPos = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          padding: scrolled ? '15px 5%' : '25px 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'padding 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(15, 23, 42, 0.05)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        {/* Logo with magnetic effect wrapper */}
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          onClick={() => scrollToSection('hero')}
        >
          <NexigenLogo size={32} />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '0.05em',
            background: 'linear-gradient(to right, #0f172a, #475569)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            NEXIGEN<span style={{ color: '#0066ff', WebkitTextFillColor: 'initial' }}>.</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="desktop-only">
          <ul style={{ display: 'flex', gap: '25px', listStyle: 'none', alignItems: 'center' }}>
            {navItems.map((item) => (
              <li key={item.id} style={{ position: 'relative' }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? '#0066ff' : '#475569',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    fontWeight: activeSection === item.id ? 600 : 500,
                    letterSpacing: '0.03em',
                    padding: '8px 0',
                    position: 'relative',
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: '#0066ff',
                        boxShadow: '0 0 8px #0066ff'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 102, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            style={{
              padding: '10px 22px',
              backgroundColor: '#0066ff',
              color: '#ffffff',
              border: 'none',
              borderRadius: '25px',
              fontWeight: 600,
              fontSize: '0.9rem',
              boxShadow: '0 0 10px rgba(0, 102, 255, 0.2)',
            }}
          >
            Start Project
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#0f172a',
            display: 'none', // Managed in CSS media queries, but set in style just in case
            cursor: 'pointer'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '25px'
            }}
          >
            <ul style={{ listStyle: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: activeSection === item.id ? '#0066ff' : '#0f172a',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              style={{
                padding: '12px 30px',
                backgroundColor: '#0066ff',
                color: '#ffffff',
                border: 'none',
                borderRadius: '30px',
                fontWeight: 600,
                fontSize: '1rem',
                marginTop: '20px',
                boxShadow: '0 0 15px rgba(0, 102, 255, 0.3)'
              }}
            >
              Start Project
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 992px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
