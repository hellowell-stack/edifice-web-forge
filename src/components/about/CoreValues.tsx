
import React from 'react';
import { Star, Award, Compass, Users, Leaf } from 'lucide-react';

const values = [
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
];

const CoreValues = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Core Values</h2>
          <p className="text-construction-gray">
            At Soyami Engineering and Construction Pvt. Ltd., our values guide every brick we lay, every road we build, and every future we shape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
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
  );
};

export default CoreValues;
