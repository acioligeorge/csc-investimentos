
import React from 'react';
import Navigation from '../components/Navigation';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const Servicos = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Servicos;
