
import React from 'react';
import { ExternalLink, Clock, CheckCircle } from 'lucide-react';

const PortfolioSection = () => {
  const completedProjects = [
    {
      title: "Reno WC Sintra",
      description: "Remodelação completa de casa de banho com acabamentos modernos",
      category: "Remodelação",
      status: "Concluído",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=500&h=300&fit=crop&crop=center"
    },
    {
      title: "Reno Total Apart Rio Mouro",
      description: "Renovação total de apartamento com design contemporâneo",
      category: "Renovação Total",
      status: "Concluído",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop&crop=center"
    },
    {
      title: "Limpeza de Piscina - Azeitão",
      description: "Manutenção e limpeza profissional de piscina residencial",
      category: "Manutenção",
      status: "Concluído",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=300&fit=crop&crop=center"
    }
  ];

  const ongoingProjects = [
    {
      title: "Mini Prédio Porto Salvo",
      description: "Construção de edifício residencial com 4 unidades habitacionais",
      category: "Construção",
      status: "Em Andamento",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop&crop=center"
    },
    {
      title: "Moradias LSF",
      description: "Construção de moradias em Light Steel Framing",
      category: "Light Steel Framing",
      status: "Em Andamento",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&h=300&fit=crop&crop=center"
    }
  ];

  const ProjectCard = ({ project, isOngoing = false }) => (
    <div className="card-service group overflow-hidden">
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
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
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="text-xs text-white bg-elegant-gold-600 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
      </div>
      
      <h3 className="text-xl font-heading font-semibold text-neutral-warm-900 mb-3">
        {project.title}
      </h3>
      
      <p className="text-neutral-warm-600 leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>
      
      <button className="text-forest-green-600 hover:text-forest-green-700 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
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
          <h3 className="text-2xl font-heading font-semibold text-neutral-warm-900 mb-8 text-center">
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
          <h3 className="text-2xl font-heading font-semibold text-neutral-warm-900 mb-8 text-center">
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
