import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import NexigenLogo from '../components/NexigenLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    agency: [
      { label: "About Us", target: "about" },
      { label: "Capabilities", target: "services" },
      { label: "Why Us", target: "why-choose-us" },
      { label: "Pricing", target: "pricing" },
      { label: "Testimonials", target: "testimonials" }
    ],
    contact: [
      { label: "Email: nexigenstudios@gmail.com", href: "mailto:nexigenstudios@gmail.com", icon: <Mail size={12} /> },
      { label: "Phone: +91 8921026848", href: "tel:+918921026848", icon: <Phone size={12} /> },
      { label: "Studio: Kollam, Kerala", icon: <MapPin size={12} /> }
    ]
  };

  return (
    <footer 
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid rgba(15, 23, 42, 0.08)',
        padding: '80px 0 30px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative gradient glowing mesh background */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '200px',
          background: 'linear-gradient(to top, rgba(0, 102, 255, 0.08) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        {/* Main Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1.5fr',
            gap: '60px',
            marginBottom: '60px'
          }}
          className="footer-grid"
        >
          {/* Logo & Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <NexigenLogo size={28} />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.2rem',
                letterSpacing: '0.05em',
                color: 'var(--color-text)'
              }}>
                NEXIGEN<span style={{ color: '#0066ff' }}>.</span>
              </span>
            </div>
            
            <p style={{ fontSize: '0.85rem', maxWidth: '300px', margin: 0 }}>
              Crafting premium visual journeys and immersive digital products for high-growth enterprises worldwide.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <a href="#" className="footer-social-icon" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.02)',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-muted)',
                transition: 'all 0.3s'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="footer-social-icon" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.02)',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-muted)',
                transition: 'all 0.3s'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="footer-social-icon" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.02)',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-muted)',
                transition: 'all 0.3s'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ color: 'var(--color-text)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Sitemap
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.agency.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => {
                      const el = document.getElementById(link.target);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-text-muted)',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    className="footer-link-btn"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ color: 'var(--color-text)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Inquiries
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {footerLinks.contact.map((link, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  <span style={{ color: '#0066ff' }}>{link.icon}</span>
                  {link.href ? (
                    <a href={link.href} style={{ color: 'inherit' }} className="footer-link-btn">{link.label}</a>
                  ) : (
                    <span>{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(15, 23, 42, 0.08)',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            &copy; {currentYear} Nexigen Studios. All rights reserved. Made for premium experiences.
          </span>
          
          <button
            onClick={handleScrollTop}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.02)',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text)',
              cursor: 'pointer'
            }}
            className="interactive-item"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-social-icon:hover {
          background-color: #0066ff !important;
          border-color: #0066ff !important;
          color: #ffffff !important;
          box-shadow: 0 0 15px rgba(0, 102, 255, 0.4);
        }
        .footer-link-btn:hover {
          color: #0066ff !important;
          transform: translateX(4px);
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}
