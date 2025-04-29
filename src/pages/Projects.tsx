
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Building } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Summit Tower",
      category: "Commercial Construction",
      description: "A 15-story commercial complex with modern amenities and sustainable design features, located in the heart of the city.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80",
      slug: "summit-tower",
      year: "2022",
      client: "Capital Enterprises Ltd."
    },
    {
      id: 2,
      title: "Riverfront Bridge",
      category: "Infrastructure",
      description: "A 500-meter suspension bridge connecting vital commercial districts, designed to withstand extreme weather conditions.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
      slug: "riverfront-bridge",
      year: "2021",
      client: "Municipal Development Authority"
    },
    {
      id: 3,
      title: "Nexus Research Facility",
      category: "Industrial Engineering",
      description: "A state-of-the-art research facility with specialized laboratories and sustainable energy systems.",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80",
      slug: "nexus-research-facility",
      year: "2020",
      client: "SciTech Innovations Inc."
    },
    {
      id: 4,
      title: "Metro Transit Hub",
      category: "Public Works",
      description: "A modern transit center integrating multiple transportation modes with passenger amenities and smart technology.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
      slug: "metro-transit-hub",
      year: "2019",
      client: "Urban Transit Authority"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a 
                href={`/projects/${project.slug}`} 
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-construction-yellow mb-2">
                    <Building size={18} />
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-construction-darkBlue mb-2 group-hover:text-construction-blue transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-construction-gray mb-4">
                    <span>Year: {project.year}</span>
                    <span>Client: {project.client}</span>
                  </div>
                  <p className="text-construction-gray">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
