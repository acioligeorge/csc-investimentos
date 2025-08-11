
import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border border-white/25 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="hero-title mb-6">
              CSC – Investimentos
              <br />
              <span className="text-blue-200">Imobiliários</span>
            </h1>
            <p className="hero-subtitle mb-8 max-w-2xl">
              A nossa empresa é a sua solução. Profissionalismo, personalização e uma rede sólida 
              de contactos para todos os seus projetos imobiliários.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#servicos"
                className="btn-primary inline-flex items-center gap-2 justify-center"
              >
                Descubra os nossos serviços
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+351"
                className="btn-secondary inline-flex items-center gap-2 justify-center"
              >
                <Phone size={20} />
                Contactar agora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
