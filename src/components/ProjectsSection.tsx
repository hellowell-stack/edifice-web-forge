
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Gabion Wall Construction",
      category: "Nigalaghari Site",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80",
      link: "/projects/nigalaghari"
    },
    {
      id: 2,
      title: "Stone Masonry Retaining Wall",
      category: "Nigalaghari Site",
      image: "https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?auto=format&fit=crop&q=80",
      link: "/projects/nigalaghari"
    },
    {
      id: 3,
      title: "Drain Wall Construction",
      category: "Nigalaghari Site",
      image: "https://images.unsplash.com/photo-1621143759985-90a66d4a3b5f?auto=format&fit=crop&q=80",
      link: "/projects/nigalaghari"
    },
    {
      id: 4,
      title: "Gabion Wall Construction",
      category: "Khotro Site",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
      link: "/projects/khotro"
    }
  ];

  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Building Strength in Nepal's Terrain</p>
          <p className="text-construction-gray">
            Explore our portfolio of successful wall construction projects that demonstrate our commitment to quality, innovation, and environmental responsibility across different sites in Nepal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} to={project.link} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Project Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-construction-yellow font-medium mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project Details
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/projects" className="btn-primary">
            Explore All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
