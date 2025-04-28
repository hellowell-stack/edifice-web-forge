
import React from 'react';
import { Building, Compass, Users } from 'lucide-react';

const managementItems = [
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
];

const Management = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Management</h2>
          <p className="text-construction-gray">
            Led by a dynamic group of experienced professionals who bring together expertise in engineering, project management, finance, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementItems.map((item, index) => (
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
  );
};

export default Management;
