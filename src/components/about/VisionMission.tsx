
import React from 'react';
import { Check } from 'lucide-react';

const VisionMission = () => {
  return (
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
  );
};

export default VisionMission;
