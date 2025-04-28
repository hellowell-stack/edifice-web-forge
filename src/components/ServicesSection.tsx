
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Construction, Hammer, Wrench, Tools, Layers } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Construction",
      description: "Full-service commercial construction delivering office buildings, retail spaces, and industrial facilities with precision and durability.",
      link: "/services#commercial"
    },
    {
      icon: <Construction className="h-8 w-8" />,
      title: "Industrial Engineering",
      description: "Specialized engineering solutions for manufacturing plants, warehouses, and industrial facilities with focus on efficiency and safety.",
      link: "/services#industrial"
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Renovation & Retrofitting",
      description: "Modernizing existing structures while preserving their integrity, improving functionality, energy efficiency, and aesthetic appeal.",
      link: "/services#renovation"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Infrastructure Development",
      description: "Building reliable infrastructure projects including roads, bridges, water systems, and public facilities for communities.",
      link: "/services#infrastructure"
    },
    {
      icon: <Tools className="h-8 w-8" />,
      title: "Project Management",
      description: "Comprehensive project management services ensuring your project is completed on time, within budget, and to specification.",
      link: "/services#management"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Architectural Design",
      description: "Innovative architectural design services that balance aesthetics, functionality, and sustainability for modern building needs.",
      link: "/services#design"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive Solutions for Every Project</p>
          <p className="text-construction-gray">
            We offer a wide range of construction and engineering services, delivered with the highest standards of quality, safety, and innovation to meet your specific project needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-construction-blue"
            >
              <div className="text-construction-blue mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-construction-darkBlue">{service.title}</h3>
              <p className="mb-6 text-construction-gray">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-construction-blue font-semibold hover:text-construction-yellow flex items-center gap-1"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

export default ServicesSection;
