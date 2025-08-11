
import React from 'react';
import { 
  Home, 
  Hammer, 
  Briefcase, 
  Sparkles, 
  Palette, 
  Settings,
  Building2,
  Scale
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-corporate-blue-600" />,
      title: "Investimentos e Mediação Imobiliária",
      description: "Compra, venda, arrendamento e estratégias fix & flip para maximizar o seu investimento."
    },
    {
      icon: <Building2 className="w-10 h-10 text-corporate-blue-600" />,
      title: "Gestão de Projetos",
      description: "Acompanhamento completo de obras desde o planeamento até à execução final."
    },
    {
      icon: <Hammer className="w-10 h-10 text-corporate-blue-600" />,
      title: "Obras e Remodelações",
      description: "Construção tradicional e Light Steel Framing com acabamentos de qualidade superior."
    },
    {
      icon: <Scale className="w-10 h-10 text-corporate-blue-600" />,
      title: "Consultoria Jurídica e Financeira",
      description: "Parcerias com advogados, contabilistas e intermediários de crédito especializados."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-corporate-blue-600" />,
      title: "Limpeza e Manutenção",
      description: "Serviços completos de limpeza e manutenção para propriedades residenciais e comerciais."
    },
    {
      icon: <Palette className="w-10 h-10 text-corporate-blue-600" />,
      title: "Design e Homestaging",
      description: "Design de interiores, homestaging e modelação 3D para valorizar o seu imóvel."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-corporate-blue-600" />,
      title: "Contabilidade",
      description: "Gestão contabilística completa para particulares e empresas do setor imobiliário."
    },
    {
      icon: <Settings className="w-10 h-10 text-corporate-blue-600" />,
      title: "Outros Serviços",
      description: "Mudanças, aconselhamento e soluções personalizadas para as suas necessidades específicas."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Os Nossos Serviços</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Oferecemos soluções completas e integradas para todas as suas necessidades 
            no setor imobiliário e serviços complementares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-corporate-blue-50 rounded-lg group-hover:bg-corporate-blue-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-elegant-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-elegant-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contacto"
            className="btn-primary inline-flex items-center gap-2"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
