
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Building Tomorrow's <span className="text-construction-yellow">Infrastructure</span> Today
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            We combine innovation, precision, and decades of expertise to deliver exceptional construction and engineering solutions with integrity and durability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/services" className="btn-accent flex items-center gap-2">
              <span>Our Services</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/projects" className="btn-primary">
              View Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
