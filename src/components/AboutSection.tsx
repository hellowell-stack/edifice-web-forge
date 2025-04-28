
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Users, Award, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80" 
                alt="Engineering team" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-construction-blue text-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-center">
                  <span className="block text-4xl font-bold">25+</span>
                  <span className="text-sm font-medium">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="section-title">About BuildForge</h2>
            <p className="section-subtitle">Excellence in Engineering & Construction</p>
            
            <p className="mb-6 text-construction-gray">
              For over 25 years, BuildForge has been at the forefront of the construction and engineering industry, delivering projects that stand the test of time. We combine technical expertise with innovative solutions to create structures that are not just built well, but built with purpose.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-construction-blue p-2 rounded-full text-white">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-construction-blue">Quality Assurance</h4>
                  <p className="text-sm text-construction-gray">Rigorous standards at every project phase</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-construction-blue p-2 rounded-full text-white">
                  <Users size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-construction-blue">Expert Team</h4>
                  <p className="text-sm text-construction-gray">Industry-leading professionals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-construction-blue p-2 rounded-full text-white">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-construction-blue">Certified Excellence</h4>
                  <p className="text-sm text-construction-gray">ISO 9001 and industry certifications</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-construction-blue p-2 rounded-full text-white">
                  <Calendar size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-construction-blue">On-Time Delivery</h4>
                  <p className="text-sm text-construction-gray">Consistent project completion</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
