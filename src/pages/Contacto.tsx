
import React from 'react';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Contacto = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
