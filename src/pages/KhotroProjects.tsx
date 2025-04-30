
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, HardHat, Calendar } from 'lucide-react';

const KhotroProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Gabion Wall Construction",
      description: "A comprehensive gabion wall project constructed to prevent landslides and provide stability to the Khotro region's vulnerable slopes. This project uses locally-sourced materials integrated with modern engineering techniques.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
      completionDate: "November 2023",
      features: [
        "Multi-tier gabion structure",
        "Heavy-duty wire mesh construction",
        "Integrated with natural landscape",
        "Strategic placement for maximum stability"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-construction-blue py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Khotro Projects</h1>
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
                <BreadcrumbPage>Khotro</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-construction-darkBlue mb-4">Completed Projects at Khotro</h2>
            <p className="text-construction-gray">
              Our Khotro site showcases our expertise in gabion wall construction, addressing the specific needs of this challenging terrain.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
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

export default KhotroProjects;
