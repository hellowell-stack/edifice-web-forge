
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, FileText, ArrowRight } from 'lucide-react';

const ProjectsPreview = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Summit Tower",
      category: "Commercial Construction",
      description: "A 15-story commercial complex with modern amenities and sustainable design.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80",
      slug: "summit-tower"
    },
    {
      id: 2,
      title: "Riverfront Bridge",
      category: "Infrastructure",
      description: "A 500-meter suspension bridge connecting vital commercial districts.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
      slug: "riverfront-bridge"
    }
  ];

  return (
    <section className="section-padding bg-white" id="projects-preview">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Our Construction Excellence</p>
          <p className="text-construction-gray">
            We take pride in our portfolio of successful projects across various sectors, demonstrating our expertise and commitment to quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-construction-yellow mb-2">
                  <Building size={18} />
                  <span className="text-sm font-medium">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
                <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-construction-yellow hover:text-white transition-colors">
                  <FileText size={16} />
                  <span className="font-medium">View Project Details</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
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

export default ProjectsPreview;
