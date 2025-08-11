
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/historia', label: 'História' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/contacto', label: 'Contacto' }
  ];

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-warm-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo e Nome da Empresa */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/c03e1008-e97b-479a-bd17-2d7b257d4078.png" 
              alt="CSC Investimentos Imobiliários" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-forest-green-800 leading-tight">CSC - Investimentos</span>
              <span className="text-sm text-neutral-warm-600 leading-tight">Imobiliários e Serviços Diversificados</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActivePage(item.href)
                    ? 'text-forest-green-600 font-semibold'
                    : 'text-neutral-warm-800 hover:text-forest-green-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="btn-primary text-sm"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-warm-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-warm-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block py-3 font-medium transition-colors duration-200 ${
                  isActivePage(item.href)
                    ? 'text-forest-green-600 font-semibold'
                    : 'text-neutral-warm-800 hover:text-forest-green-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="btn-primary text-sm inline-block mt-4"
              onClick={() => setIsOpen(false)}
            >
              Contactar
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
