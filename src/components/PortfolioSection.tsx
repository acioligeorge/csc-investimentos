
import React from 'react';
import { ExternalLink, Clock, CheckCircle } from 'lucide-react';

const PortfolioSection = () => {
  const completedProjects = [
    {
      title: "Reno WC Sintra",
      description: "Remodelação completa de casa de banho com acabamentos modernos",
      category: "Remodelação",
      status: "Concluído"
    },
    {
      title: "Reno Total Apart Rio Mouro",
      description: "Renovação total de apartamento com design contemporâneo",
      category: "Renovação Total",
      status: "Concluído"
    },
    {
      title: "Limpeza de Piscina - Azeitão",
      description: "Manutenção e limpeza profissional de piscina residencial",
      category: "Manutenção",
      status: "Concluído"
    }
  ];

  const ongoingProjects = [
    {
      title: "Mini Prédio Porto Salvo",
      description: "Construção de edifício residencial com 4 unidades habitacionais",
      category: "Construção",
      status: "Em Andamento"
    },
    {
      title: "Moradias LSF",
      description: "Construção de moradias em Light Steel Framing",
      category: "Light Steel Framing",
      status: "Em Andamento"
    }
  ];

  const ProjectCard = ({ project, isOngoing = false }) => (
    <div className="card-service group">
      <div className="flex items-start justify-between mb-4">
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
          isOngoing 
            ? 'bg-orange-100 text-orange-700' 
            : 'bg-green-100 text-green-700'
        }`}>
          {isOngoing ? (
            <div className="flex items-center gap-2">
              <Clock size={14} />
              {project.status}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <CheckCircle size={14} />
              {project.status}
            </div>
          )}
        </div>
        <span className="text-xs text-neutral-elegant-500 bg-neutral-elegant-100 px-2 py-1 rounded">
          {project.category}
        </span>
      </div>
      
      <h3 className="text-xl font-heading font-semibold text-neutral-elegant-900 mb-3">
        {project.title}
      </h3>
      
      <p className="text-neutral-elegant-600 leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>
      
      <button className="text-corporate-blue-600 hover:text-corporate-blue-700 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
        Ver detalhes
        <ExternalLink size={16} />
      </button>
    </div>
  );

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Portfólio</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos realizados e em desenvolvimento. 
            Cada projeto reflete o nosso compromisso com a qualidade e inovação.
          </p>
        </div>

        {/* Projetos Concluídos */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-neutral-elegant-900 mb-8 text-center">
            Projetos Concluídos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                isOngoing={false}
              />
            ))}
          </div>
        </div>

        {/* Projetos em Andamento */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-neutral-elegant-900 mb-8 text-center">
            Projetos em Andamento
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                isOngoing={true}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contacto"
            className="btn-primary inline-flex items-center gap-2"
          >
            Iniciar o Seu Projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
