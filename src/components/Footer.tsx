
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-forest-green-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img 
                src="/placeholder.svg" 
                alt="CSC Investimentos Imobiliários" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Investimentos Imobiliários e Serviços Diversificados. 
              A nossa empresa é a sua solução para todos os projetos 
              no setor imobiliário e serviços complementares.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-elegant-gold-600 rounded-lg hover:bg-elegant-gold-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-elegant-gold-600 rounded-lg hover:bg-elegant-gold-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-elegant-gold-600 rounded-lg hover:bg-elegant-gold-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-elegant-gold-400 transition-colors">Início</Link></li>
              <li><Link to="/historia" className="text-gray-300 hover:text-elegant-gold-400 transition-colors">História</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-elegant-gold-400 transition-colors">Serviços</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-elegant-gold-400 transition-colors">Portfólio</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-elegant-gold-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-elegant-gold-400" />
                <span className="text-gray-300">+351 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-elegant-gold-400" />
                <span className="text-gray-300">geral@csc-investimentos.pt</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-elegant-gold-400" />
                <span className="text-gray-300">Lisboa, Portugal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 CSC - Investimentos Imobiliários. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-elegant-gold-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-elegant-gold-400 transition-colors">
                Termos e Condições
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
