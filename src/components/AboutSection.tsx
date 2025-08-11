
import React from 'react';
import { Users, Award, Target } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-elegant-gold-600" />,
      title: "Profissionalismo",
      description: "Compromisso com a excelência em cada projeto"
    },
    {
      icon: <Target className="w-8 h-8 text-elegant-gold-600" />,
      title: "Personalização",
      description: "Soluções adaptadas às suas necessidades específicas"
    },
    {
      icon: <Users className="w-8 h-8 text-elegant-gold-600" />,
      title: "Rede Sólida",
      description: "Contactos estratégicos para o seu sucesso"
    }
  ];

  return (
    <section id="historia" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">A Nossa História</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Desde 2019, construímos uma trajetória de sucesso no setor imobiliário, 
            sempre com foco na excelência e satisfação dos nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-heading font-semibold text-neutral-warm-900 mb-6">
              Liderança e Visão
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-elegant-gold-200">
                <h4 className="text-xl font-semibold text-forest-green-700 mb-3">Raquel Ferrage - CEO</h4>
                <p className="text-neutral-warm-600 leading-relaxed">
                  Com experiência consolidada desde 2019 no setor imobiliário, Raquel Ferrage lidera 
                  a CSC com uma visão estratégica e uma rede sólida de contactos profissionais, 
                  garantindo soluções completas para cada cliente.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-elegant-gold-200">
                <h4 className="text-xl font-semibold text-forest-green-700 mb-3">Fábio Sousa Ferrage</h4>
                <p className="text-neutral-warm-600 leading-relaxed">
                  Responsável pelo apoio à gestão e operações, Fábio garante que todos os projetos 
                  sejam executados com precisão e eficiência, mantendo os mais altos padrões de qualidade.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-elegant-gold-200">
              <h3 className="text-2xl font-heading font-semibold text-neutral-warm-900 mb-8">
                Os Nossos Valores
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-elegant-gold-50 rounded-lg">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-warm-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-neutral-warm-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
