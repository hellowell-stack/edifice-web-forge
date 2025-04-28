
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Award, Clock, Calendar, Building, Check } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-construction-blue">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80"
            alt="Engineering team meeting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BuildForge</h1>
            <p className="text-xl mb-4 text-gray-100">
              Building a legacy of excellence in construction and engineering.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="section-title">Our Company</h2>
              <p className="section-subtitle">Building Excellence Since 1998</p>
              
              <p className="mb-6 text-construction-gray">
                BuildForge was founded with a vision to redefine the standards of construction and engineering. For over 25 years, we've been delivering exceptional projects across commercial, industrial, and infrastructure sectors, earning a reputation for quality, reliability, and innovation.
              </p>
              
              <p className="mb-6 text-construction-gray">
                Our approach combines technical expertise with creative problem-solving, allowing us to tackle the most challenging projects with confidence. We believe in sustainable building practices, cutting-edge technology, and fostering strong client relationships built on trust and transparency.
              </p>
              
              <p className="text-construction-gray">
                Today, BuildForge stands as a leader in the industry, with a portfolio of successful projects that showcase our commitment to excellence and our ability to bring our clients' visions to life.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80" 
                    alt="Office building" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80" 
                    alt="Construction site" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="rounded-lg overflow-hidden col-span-2">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80" 
                    alt="Team meeting" 
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-construction-blue mb-2">25+</div>
              <p className="text-construction-gray font-medium">Years of Experience</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-construction-blue mb-2">500+</div>
              <p className="text-construction-gray font-medium">Projects Completed</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-construction-blue mb-2">120+</div>
              <p className="text-construction-gray font-medium">Team Members</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-construction-blue mb-2">98%</div>
              <p className="text-construction-gray font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission and Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-subtitle">The Principles That Guide Our Work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-construction-blue">
              <h3 className="text-2xl font-bold mb-4 text-construction-darkBlue">Our Mission</h3>
              <p className="text-construction-gray">
                Our mission is to deliver exceptional construction and engineering solutions that exceed client expectations, contribute positively to communities, and set new standards of excellence in the industry. We strive to create structures that are not only visually impressive and functionally superior but also sustainable and built to last for generations.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-construction-yellow">
              <h3 className="text-2xl font-bold mb-4 text-construction-darkBlue">Our Vision</h3>
              <p className="text-construction-gray">
                We aspire to be the premier construction and engineering firm, recognized globally for our innovative approach, technical expertise, and unwavering commitment to quality. We envision a future where BuildForge projects stand as landmarks of excellence, where our team members thrive professionally, and where our business practices contribute to a more sustainable built environment.
              </p>
            </div>
          </div>
          
          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-construction-darkBlue">Our Core Values</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-construction-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-construction-darkBlue">Integrity</h4>
                <p className="text-construction-gray">
                  We conduct business with honesty, transparency, and ethical standards that build trust with our clients, partners, and communities.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-construction-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-construction-darkBlue">Excellence</h4>
                <p className="text-construction-gray">
                  We pursue excellence in every aspect of our work, from planning and design to construction and project management.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-construction-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-construction-darkBlue">Teamwork</h4>
                <p className="text-construction-gray">
                  We believe in the power of collaboration, bringing together diverse talents and perspectives to achieve exceptional results.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-construction-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-construction-darkBlue">Reliability</h4>
                <p className="text-construction-gray">
                  We consistently deliver on our promises, meeting deadlines and budgets without compromising on quality or safety.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-construction-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-construction-darkBlue">Innovation</h4>
                <p className="text-construction-gray">
                  We embrace new technologies, methods, and ideas that advance the construction industry and deliver better outcomes for our clients.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-construction-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-construction-darkBlue">Sustainability</h4>
                <p className="text-construction-gray">
                  We are committed to environmentally responsible practices that minimize our ecological footprint and create healthier built environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle">The Experts Behind Our Success</p>
            <p className="text-construction-gray">
              Our company is led by a team of experienced professionals with decades of combined expertise in construction, engineering, and project management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-construction-darkBlue">Robert Johnson</h3>
                <p className="text-construction-yellow font-medium mb-4">Founder & CEO</p>
                <p className="text-construction-gray text-sm">
                  With over 30 years of experience in construction and engineering, Robert has led BuildForge from a small local contractor to a regional leader in the industry.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                  alt="COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-construction-darkBlue">Emily Chen</h3>
                <p className="text-construction-yellow font-medium mb-4">Chief Operations Officer</p>
                <p className="text-construction-gray text-sm">
                  Emily brings extensive expertise in project management and operational efficiency, ensuring that every BuildForge project is delivered with precision and excellence.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" 
                  alt="Chief Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-construction-darkBlue">Michael Rodriguez</h3>
                <p className="text-construction-yellow font-medium mb-4">Chief Engineer</p>
                <p className="text-construction-gray text-sm">
                  Michael's innovative approach to engineering challenges and deep technical knowledge has been instrumental in BuildForge's most complex and ambitious projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-construction-blue text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">
              Partner with BuildForge for your next construction or engineering project and experience the difference our expertise makes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-accent">
                Contact Us Today
              </a>
              <a href="/services" className="bg-white text-construction-blue hover:bg-construction-yellow hover:text-black font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-block">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
