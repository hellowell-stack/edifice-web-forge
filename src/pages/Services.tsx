
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Wrench, Building, HardHat } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Commercial Construction",
      description: "Our commercial construction services encompass office buildings, retail spaces, hotels, and restaurants. We handle everything from initial design to final handover, ensuring your commercial space is built to the highest standards.",
      icon: Building,
      features: [
        "Custom design and architecture",
        "Interior buildouts and renovations",
        "Site development and preparation",
        "Green building and LEED certification",
        "Tenant improvements"
      ]
    },
    {
      id: 2,
      title: "Infrastructure Development",
      description: "We specialize in developing robust infrastructure that stands the test of time. Our team has extensive experience in roads, bridges, drainage systems, and public facilities that serve communities effectively.",
      icon: HardHat,
      features: [
        "Road construction and rehabilitation",
        "Bridge construction and maintenance",
        "Drainage and utility systems",
        "Public facilities and amenities",
        "Transportation infrastructure"
      ]
    },
    {
      id: 3,
      title: "Industrial Engineering",
      description: "Our industrial engineering solutions cater to manufacturing plants, warehouses, and specialized facilities. We focus on creating efficient, safe, and productive spaces that meet your operational requirements.",
      icon: Wrench,
      features: [
        "Manufacturing plant construction",
        "Warehouse and distribution centers",
        "Heavy machinery foundations",
        "Industrial renovations and upgrades",
        "Specialized facility construction"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-construction-blue py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <Breadcrumb className="text-white/70">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-construction-darkBlue mb-4">Comprehensive Construction Solutions</h2>
            <p className="text-construction-gray">
              At BuildForge, we offer a wide range of construction services tailored to meet your specific needs. 
              Our expertise spans across commercial, infrastructure, and industrial projects, 
              ensuring quality delivery at every step.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`order-2 ${service.id % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="bg-construction-lightGray rounded-lg p-8 h-full">
                    <service.icon size={48} className="text-construction-yellow mb-4" />
                    <h3 className="text-2xl font-bold text-construction-darkBlue mb-4">{service.title}</h3>
                    <p className="text-construction-gray mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-construction-yellow mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`order-1 ${service.id % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <img 
                    src={`https://images.unsplash.com/photo-${service.id === 1 ? '1541971875076-8980b734fc6e' : service.id === 2 ? '1474745056310-3643b3be1bfe' : '1504328345606-22bec7f686df'}?auto=format&fit=crop&q=80`} 
                    alt={service.title} 
                    className="rounded-lg w-full h-80 object-cover shadow-lg" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
