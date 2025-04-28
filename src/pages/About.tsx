
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Award, Clock, Calendar, Building, Check, Leaf, Star, Compass } from 'lucide-react';

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Soyami Engineering</h1>
            <p className="text-xl mb-4 text-gray-100">
              Building a legacy of excellence in construction and engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-construction-blue">
              <h2 className="text-3xl font-bold mb-6 text-construction-darkBlue">Our Vision</h2>
              <p className="text-construction-gray">
                "To be a leading force in transforming Nepal's infrastructure with quality, innovation, and sustainability — building not just structures, but a stronger future for generations to come."
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-construction-yellow">
              <h2 className="text-3xl font-bold mb-6 text-construction-darkBlue">Our Mission</h2>
              <ul className="space-y-4 text-construction-gray">
                <li className="flex items-start gap-2">
                  <Check className="text-construction-blue mt-1 flex-shrink-0" />
                  <span>To deliver high-quality construction services that exceed client expectations through commitment, expertise, and continuous improvement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-construction-blue mt-1 flex-shrink-0" />
                  <span>To embrace technology and innovation to enhance project efficiency, safety, and durability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-construction-blue mt-1 flex-shrink-0" />
                  <span>To foster a culture of teamwork, respect, and professionalism among our employees, partners, and clients.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-construction-blue mt-1 flex-shrink-0" />
                  <span>To lead sustainable construction practices that respect the environment and support community development.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Approach</h2>
            <p className="section-subtitle">Building Trust, Quality, and a Better Future</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users />,
                title: "Client-First Philosophy",
                description: "We listen, understand, and deliver. Every project begins with understanding our client's vision and needs."
              },
              {
                icon: <Award />,
                title: "Commitment to Quality",
                description: "We never compromise on quality. From materials to skills, every detail reflects our dedication."
              },
              {
                icon: <Compass />,
                title: "Technology and Innovation",
                description: "We embrace modern machinery and smart techniques to improve efficiency, safety, and precision."
              },
              {
                icon: <Users />,
                title: "Skilled Teamwork",
                description: "Our engineers, supervisors, operators, and workers collaborate seamlessly for outstanding results."
              },
              {
                icon: <Clock />,
                title: "On-Time Delivery",
                description: "With careful planning and proactive management, we ensure every milestone is met without delay."
              },
              {
                icon: <Leaf />,
                title: "Sustainable Practices",
                description: "We focus on reducing waste, conserving resources, and promoting eco-friendly construction methods."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-construction-blue mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-construction-darkBlue">{item.title}</h3>
                <p className="text-construction-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-construction-gray">
              At Soyami Engineering and Construction Pvt. Ltd., our values guide every brick we lay, every road we build, and every future we shape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star />,
                title: "Integrity",
                description: "We act with honesty, fairness, and responsibility, building trust with our clients, partners, and community."
              },
              {
                icon: <Award />,
                title: "Excellence",
                description: "We are committed to delivering the highest standards of workmanship, ensuring quality in every project."
              },
              {
                icon: <Compass />,
                title: "Innovation",
                description: "We believe in continuous learning and adapting new technologies for smarter, sustainable solutions."
              },
              {
                icon: <Users />,
                title: "Teamwork",
                description: "We collaborate, respect, and support each other, knowing that strong teams build stronger results."
              },
              {
                icon: <Leaf />,
                title: "Sustainability",
                description: "We promote eco-friendly practices, ensuring our projects contribute positively to environment and society."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-construction-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-construction-darkBlue">{value.title}</h4>
                <p className="text-construction-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Management Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Management</h2>
            <p className="text-construction-gray">
              Led by a dynamic group of experienced professionals who bring together expertise in engineering, project management, finance, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass />,
                title: "Strategic Leadership",
                description: "Our management team sets clear goals, ensures strong planning, and drives the company towards sustainable growth and excellence."
              },
              {
                icon: <Building />,
                title: "Project Oversight",
                description: "From concept to completion, every project is personally overseen by our leaders to maintain quality, timelines, and client satisfaction."
              },
              {
                icon: <Users />,
                title: "Team Development",
                description: "We believe in empowering our people. Regular training, mentorship, and professional development are at the heart of our culture."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-construction-blue mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-construction-darkBlue">{item.title}</h3>
                <p className="text-construction-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
