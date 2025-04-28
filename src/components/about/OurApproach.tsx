
import React from 'react';
import { Users, Award, Compass, Clock, Leaf } from 'lucide-react';

const approachItems = [
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
];

const OurApproach = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Approach</h2>
          <p className="section-subtitle">Building Trust, Quality, and a Better Future</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approachItems.map((item, index) => (
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
  );
};

export default OurApproach;
