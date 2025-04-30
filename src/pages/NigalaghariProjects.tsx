
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, HardHat, Calendar } from 'lucide-react';

const NigalaghariProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Gabion Wall Construction",
      description: "This project involved constructing a series of gabion walls to stabilize the hill slope and prevent erosion. The gabion walls were designed to withstand heavy rainfall and provide long-term stability to the terrain.",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80",
      completionDate: "October 2023",
      features: [
        "Used locally sourced stone materials",
        "Integrated drainage system",
        "Designed for seismic stability",
        "Environmentally friendly solution"
      ]
    },
    {
      id: 2,
      title: "Stone Masonry Retaining Wall",
      description: "Construction of a traditional stone masonry retaining wall using local techniques and materials. This wall supports the hillside and prevents landslides while preserving the natural aesthetic of the area.",
      image: "https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?auto=format&fit=crop&q=80",
      completionDate: "August 2023",
      features: [
        "Hand-placed stone construction",
        "Mortar binding for extra strength",
        "Weep holes for water drainage",
        "Natural aesthetic integration"
      ]
    },
    {
      id: 3,
      title: "Drain Wall Construction",
      description: "A specialized drainage wall system designed to manage water runoff in the hilly terrain. The project addresses water management issues during monsoon season and helps prevent erosion and flooding.",
      image: "https://images.unsplash.com/photo-1621143759985-90a66d4a3b5f?auto=format&fit=crop&q=80",
      completionDate: "December 2023",
      features: [
        "Integrated water collection channels",
        "Strategic drainage points",
        "Reinforced concrete construction",
        "Erosion control measures"
      ]
    },
    {
      id: 4,
      title: "Plumb Concrete Wall",
      description: "Construction of a precisely vertical concrete wall to support a road expansion project. The wall provides crucial support while maximizing available space in a challenging terrain location.",
      image: "https://images.unsplash.com/photo-1590496793929-36417a3db4bc?auto=format&fit=crop&q=80",
      completionDate: "February 2024",
      features: [
        "Reinforced concrete structure",
        "Perfect vertical alignment",
        "High load-bearing capacity",
        "Textured surface finish"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-construction-blue py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nigalaghari Projects</h1>
          <Breadcrumb className="text-white/70">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Nigalaghari</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-construction-darkBlue mb-4">Completed Projects at Nigalaghari</h2>
            <p className="text-construction-gray">
              Our work at Nigalaghari focuses on addressing the unique challenges of the region through specialized wall construction techniques and quality infrastructure development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-construction-yellow mb-2">
                    <Building size={18} />
                    <span className="text-sm font-medium">Wall Construction</span>
                  </div>
                  <CardTitle className="text-2xl text-construction-darkBlue">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-construction-gray text-sm">
                    <Calendar size={14} />
                    <span>Completed: {project.completionDate}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-construction-gray mb-4">{project.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-construction-blue mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-construction-yellow mt-1">•</span>
                          <span>{feature}</span>
                        </li>
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

export default NigalaghariProjects;
