import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.details) {
      alert("Please fill in Name, Email and Project Details.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Compile and encode form details for WhatsApp redirection
    const messageText = `Hello Nexigen Studios,\n\nI want to start a project:\n\n*Name:* ${formState.name}\n*Email:* ${formState.email}\n*Phone:* ${formState.phone || 'N/A'}\n*Company:* ${formState.company || 'N/A'}\n\n*Project Details:* ${formState.details}`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappLink = `https://wa.me/918921026848?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact"
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
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            Get In Touch
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
            Let's Build Something Extraordinary
          </motion.h2>
        </div>

        {/* Large Premium Glass Panel */}
        <div 
          className="glass-panel"
          style={{
            padding: '50px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 50px rgba(0, 102, 255, 0.05)'
          }}
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px'
                }}
              >
                {/* Inputs Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '30px'
                }}>
                  {/* Name Input */}
                  <div style={{ position: 'relative' }} className="form-group">
                    <User size={16} style={{ position: 'absolute', left: '0', bottom: '12px', color: 'rgba(15, 23, 42, 0.3)' }} />
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Your Name *"
                      style={{
                        width: '100%',
                        padding: '12px 10px 12px 30px',
                        background: 'none',
                        border: 'none',
                        borderBottom: '1px solid rgba(15, 23, 42, 0.1)',
                        color: 'var(--color-text)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.4s ease'
                      }}
                      className="contact-input"
                    />
                  </div>

                  {/* Email Input */}
                  <div style={{ position: 'relative' }} className="form-group">
                    <Mail size={16} style={{ position: 'absolute', left: '0', bottom: '12px', color: 'rgba(15, 23, 42, 0.3)' }} />
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="Your Email *"
                      style={{
                        width: '100%',
                        padding: '12px 10px 12px 30px',
                        background: 'none',
                        border: 'none',
                        borderBottom: '1px solid rgba(15, 23, 42, 0.1)',
                        color: 'var(--color-text)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.4s ease'
                      }}
                      className="contact-input"
                    />
                  </div>

                  {/* Phone Input */}
                  <div style={{ position: 'relative' }} className="form-group">
                    <Phone size={16} style={{ position: 'absolute', left: '0', bottom: '12px', color: 'rgba(15, 23, 42, 0.3)' }} />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      style={{
                        width: '100%',
                        padding: '12px 10px 12px 30px',
                        background: 'none',
                        border: 'none',
                        borderBottom: '1px solid rgba(15, 23, 42, 0.1)',
                        color: 'var(--color-text)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.4s ease'
                      }}
                      className="contact-input"
                    />
                  </div>

                  {/* Company Input */}
                  <div style={{ position: 'relative' }} className="form-group">
                    <Building size={16} style={{ position: 'absolute', left: '0', bottom: '12px', color: 'rgba(15, 23, 42, 0.3)' }} />
                    <input 
                      type="text" 
                      name="company"
                      value={formState.company}
                      onChange={handleInputChange}
                      placeholder="Company / Organization"
                      style={{
                        width: '100%',
                        padding: '12px 10px 12px 30px',
                        background: 'none',
                        border: 'none',
                        borderBottom: '1px solid rgba(15, 23, 42, 0.1)',
                        color: 'var(--color-text)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.4s ease'
                      }}
                      className="contact-input"
                    />
                  </div>
                </div>

                {/* Details TextArea */}
                <div style={{ position: 'relative', marginTop: '10px' }} className="form-group">
                  <MessageSquare size={16} style={{ position: 'absolute', left: '0', top: '12px', color: 'rgba(15, 23, 42, 0.3)' }} />
                  <textarea 
                    name="details"
                    required
                    rows={4}
                    value={formState.details}
                    onChange={handleInputChange}
                    placeholder="Describe Your Project * (e.g. scope, budget, timeline targets)"
                    style={{
                      width: '100%',
                      padding: '12px 10px 12px 30px',
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid rgba(15, 23, 42, 0.1)',
                      color: 'var(--color-text)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none',
                      transition: 'border-color 0.4s ease',
                      fontFamily: 'var(--font-sans)'
                    }}
                    className="contact-input"
                  />
                </div>

                {/* Submit Button */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 102, 255, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                    type="submit"
                    style={{
                      padding: '16px 45px',
                      backgroundColor: '#0066ff',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '30px',
                      fontWeight: 600,
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      boxShadow: '0 0 15px rgba(0, 102, 255, 0.3)',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                    className="interactive-item"
                  >
                    <span>{isSubmitting ? "Orchestrating..." : "Transmit Inquiry"}</span>
                    <Send size={16} />
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              // Success Message State
              <motion.div 
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 20 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '40px 0',
                  gap: '20px'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 102, 255, 0.1)',
                  border: '2px solid #0066ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0066ff',
                  boxShadow: '0 0 25px rgba(0, 102, 255, 0.3)',
                  marginBottom: '10px'
                }}>
                  <CheckCircle2 size={40} />
                </div>
                
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--color-text)'
                }}>
                  Transmission Received
                </h3>

                <p style={{
                  maxWidth: '450px',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-muted)',
                  margin: 0
                }}>
                  Thank you, <strong style={{ color: 'var(--color-text)' }}>{formState.name}</strong>. Your project specifications have been securely logged. An agency partner will reach out within 24 hours.
                </p>

                <button 
                  onClick={() => {
                    setFormState({ name: '', email: '', phone: '', company: '', details: '' });
                    setIsSubmitted(false);
                  }}
                  style={{
                    padding: '10px 24px',
                    backgroundColor: 'rgba(15, 23, 42, 0.03)',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    color: 'var(--color-text)',
                    fontWeight: 600,
                    marginTop: '20px'
                  }}
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      <style>{`
        .contact-input:focus {
          border-bottom-color: #0066ff !important;
          box-shadow: 0 1px 0 #0066ff;
        }
        @media (max-width: 576px) {
          .glass-panel {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
