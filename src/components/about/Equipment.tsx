
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Construction, Hammer } from 'lucide-react';

const Equipment = () => {
  const equipments = [
    {
      id: 1,
      name: "Excavator JCB 3DX",
      description: "Heavy-duty excavator for digging and material handling with precision control.",
      icon: <Construction size={24} />,
      image: "https://images.unsplash.com/photo-1485786141704-59a8c852ffd7?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Concrete Mixer",
      description: "Self-loading concrete mixer with advanced mixing technology for consistent quality.",
      icon: <Wrench size={24} />,
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Bulldozer D5",
      description: "Powerful earthmoving equipment for site preparation and land clearing.",
      icon: <Hammer size={24} />,
      image: "https://images.unsplash.com/photo-1568099342324-a9acdbdb1223?auto=format&fit=crop&q=80"
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="equipment">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Our Equipment</h2>
          <p className="section-subtitle">Modern Machinery for Efficient Construction</p>
          <p className="text-construction-gray">
            We invest in state-of-the-art equipment to ensure precision, efficiency, and safety in all our construction projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipments.map((equipment) => (
            <Card key={equipment.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={equipment.image} 
                  alt={equipment.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-construction-blue">{equipment.icon}</span>
                  <h3 className="text-xl font-bold text-construction-darkBlue">{equipment.name}</h3>
                </div>
                <p className="text-construction-gray">{equipment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
