
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Construction, Hammer } from 'lucide-react';

const Equipment = () => {
  const equipmentList = [
    {
      id: 1,
      name: "Excavator JCB 3DX",
      description: "Heavy-duty excavator for digging and material handling with precision control.",
      icon: <Construction size={24} />,
      image: "https://images.unsplash.com/photo-1485786141704-59a8c852ffd7?auto=format&fit=crop&q=80",
      specifications: [
        "Operating Weight: 8,150 kg",
        "Engine Power: 92 HP",
        "Max Digging Depth: 4.5m",
        "Bucket Capacity: 0.3 cubic meters"
      ]
    },
    {
      id: 2,
      name: "Concrete Mixer",
      description: "Self-loading concrete mixer with advanced mixing technology for consistent quality.",
      icon: <Wrench size={24} />,
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80",
      specifications: [
        "Capacity: 3.5 cubic meters",
        "Mixing Cycle: 55 seconds",
        "Max Concrete Output: 150 cubic meters/day",
        "Drum Rotation Speed: 0-14 rpm"
      ]
    },
    {
      id: 3,
      name: "Bulldozer D5",
      description: "Powerful earthmoving equipment for site preparation and land clearing.",
      icon: <Hammer size={24} />,
      image: "https://images.unsplash.com/photo-1568099342324-a9acdbdb1223?auto=format&fit=crop&q=80",
      specifications: [
        "Operating Weight: 16,000 kg",
        "Engine Power: 135 HP",
        "Blade Capacity: 3.8 cubic meters",
        "Max Speed: 10 km/h"
      ]
    },
    {
      id: 4,
      name: "Crane XCMG 25-ton",
      description: "Mobile crane for heavy lifting and precise placement of construction materials.",
      icon: <Construction size={24} />,
      image: "https://images.unsplash.com/photo-1482731215275-a1f151646268?auto=format&fit=crop&q=80",
      specifications: [
        "Maximum Lifting Capacity: 25 tons",
        "Maximum Boom Length: 45m",
        "Engine Power: 220 HP",
        "Counterweight: 4.5 tons"
      ]
    },
    {
      id: 5,
      name: "Asphalt Paver",
      description: "Efficient paving machine for road construction with smooth finish quality.",
      icon: <Wrench size={24} />,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80",
      specifications: [
        "Paving Width: 2.5m - 6.5m",
        "Paving Thickness: 5mm - 300mm",
        "Paving Speed: 0-20 m/min",
        "Hopper Capacity: 12 tons"
      ]
    },
    {
      id: 6,
      name: "Compactor Roller",
      description: "Soil compaction equipment for foundation work and road construction.",
      icon: <Hammer size={24} />,
      image: "https://images.unsplash.com/photo-1572827210291-42d5196a320c?auto=format&fit=crop&q=80",
      specifications: [
        "Operating Weight: 10,500 kg",
        "Drum Width: 2.1m",
        "Vibration Frequency: 25-35 Hz",
        "Engine Power: 110 HP"
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="bg-construction-blue py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Equipment</h1>
          <Breadcrumb className="text-white/70">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Equipment</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Modern Machinery</h2>
            <p className="section-subtitle">Tools for Efficient Construction</p>
            <p className="text-construction-gray">
              At Soyami Engineering, we invest in state-of-the-art equipment to ensure precision, efficiency, and safety in all our construction projects.
              Our fleet of modern machinery helps us deliver exceptional quality while maintaining project timelines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentList.map((equipment) => (
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
                  <p className="text-construction-gray mb-4">{equipment.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-construction-blue mb-2">Specifications:</h4>
                    <ul className="text-sm text-construction-gray list-disc pl-5 space-y-1">
                      {equipment.specifications.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipment;
