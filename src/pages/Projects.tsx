
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Building, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectSites = [
    {
      id: 1,
      title: "Nigalaghari Site",
      description: "Our primary construction site featuring gabion walls, stone masonry retaining walls, drain walls, and plumb concrete walls.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
      slug: "nigalaghari",
      projects: [
        "Gabion Wall Construction",
        "Stone Masonry Retaining Wall",
        "Drain Wall Construction",
        "Plumb Concrete Wall"
      ]
    },
    {
      id: 2,
      title: "Khotro Site",
      description: "Our secondary construction site focusing on gabion wall construction and related infrastructure.",
      image: "https://images.unsplash.com/photo-1605910347035-59a2a94ade85?auto=format&fit=crop&q=80",
      slug: "khotro",
      projects: [
        "Gabion Wall Construction"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-construction-blue py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <Breadcrumb className="text-white/70">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Projects</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-construction-darkBlue mb-4">Our Construction Sites</h2>
            <p className="text-construction-gray">
              Explore our projects across multiple locations, each designed to address specific infrastructure needs and environmental challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectSites.map((site) => (
              <Link 
                to={`/projects/${site.slug}`} 
                key={site.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={site.image} 
                    alt={site.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-construction-yellow mb-2">
                    <Building size={18} />
                    <span className="text-sm font-medium">Construction Site</span>
                  </div>
                  <h3 className="text-2xl font-bold text-construction-darkBlue mb-2 group-hover:text-construction-blue transition-colors">
                    {site.title}
                  </h3>
                  <p className="text-construction-gray mb-4">{site.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-construction-blue mb-2">Projects:</h4>
                    <ul className="space-y-1">
                      {site.projects.map((project, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-construction-yellow">•</span>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
