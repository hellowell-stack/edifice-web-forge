
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Building, HardHat, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80" 
                alt="Construction in rural Nepal" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-construction-blue text-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-center">
                  <span className="block text-4xl font-bold">10+</span>
                  <span className="text-sm font-medium">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="section-title">About Soyami Construction</h2>
            <p className="section-subtitle">Excellence in Wall Construction & Stability</p>
            
            <p className="mb-6 text-construction-gray">
              Established to meet the unique construction challenges of Nepal's hilly terrain, Soyami Construction specializes in building robust structures that withstand the test of time and nature. Our focus on gabion walls, stone masonry, and concrete structures has made us a trusted partner for communities seeking reliable infrastructure solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-construction-blue p-2 rounded-full text-white">
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-construction-blue">Quality Assurance</h4>
                  <p className="text-sm text-construction-gray">Strict standards for materials and execution</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-construction-blue p-2 rounded-full text-white">
                  <HardHat size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-construction-blue">Expert Team</h4>
                  <p className="text-sm text-construction-gray">Locally trained professionals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-construction-blue p-2 rounded-full text-white">
                  <Building size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-construction-blue">Environmental Focus</h4>
                  <p className="text-sm text-construction-gray">Sustainable construction practices</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-construction-blue p-2 rounded-full text-white">
                  <Calendar size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-construction-blue">Timely Delivery</h4>
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
