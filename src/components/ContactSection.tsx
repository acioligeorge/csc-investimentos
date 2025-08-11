
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Mensagem enviada com sucesso! Entraremos em contacto brevemente.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-elegant-gold-600" />,
      title: "Telefone",
      details: "+351 XXX XXX XXX",
      link: "tel:+351"
    },
    {
      icon: <Mail className="w-6 h-6 text-elegant-gold-600" />,
      title: "Email",
      details: "geral@csc-investimentos.pt",
      link: "mailto:geral@csc-investimentos.pt"
    },
    {
      icon: <MapPin className="w-6 h-6 text-elegant-gold-600" />,
      title: "Localização",
      details: "Lisboa, Portugal",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6 text-elegant-gold-600" />,
      title: "Horário",
      details: "Seg-Sex: 9h-18h",
      link: "#"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Contacte-nos</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Pronto para iniciar o seu projeto? Entre em contacto connosco para uma 
            consulta personalizada e descubra como podemos ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-heading font-semibold text-neutral-warm-900 mb-8">
              Informações de Contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-neutral-warm-50 rounded-xl hover:bg-elegant-gold-50 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-elegant-gold-50 rounded-lg group-hover:bg-elegant-gold-100 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-warm-900">{info.title}</h4>
                    <p className="text-neutral-warm-600">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-card border border-elegant-gold-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-neutral-warm-900 mb-4">
                Resposta Rápida Garantida
              </h4>
              <p className="text-neutral-warm-600 leading-relaxed">
                Comprometemo-nos a responder a todas as consultas no prazo de 24 horas. 
                Para situações urgentes, não hesite em contactar-nos diretamente por telefone.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-warm-900 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-warm-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-warm-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-warm-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-warm-900 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-warm-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="+351 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-warm-900 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-warm-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="mediacao">Mediação Imobiliária</option>
                    <option value="obras">Obras e Remodelações</option>
                    <option value="gestao">Gestão de Projetos</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="design">Design e Homestaging</option>
                    <option value="limpeza">Limpeza e Manutenção</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-warm-900 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-warm-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Descreva o seu projeto ou necessidade..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
