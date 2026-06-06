import React, { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Cinematic Initial Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Smooth scroll container */}
      <ReactLenis root>
        {/* Floating WhatsApp Support Button */}
        <WhatsAppButton />

        {/* Fixed 3D Canvas Background */}
        <ThreeBackground />

        {/* Global Nav */}
        <Navbar />

        {/* Main Content Layout */}
        <main style={{ position: 'relative', zIndex: 1 }}>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Pricing />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      </ReactLenis>
    </>
  );
}
