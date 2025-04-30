
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Handshake } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "Metropolis Development Corp",
      logo: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=300&h=150",
      industry: "Real Estate Development",
      projectCount: 12,
      testimonial: "BuildForge has been our trusted construction partner for over 5 years. Their attention to detail and commitment to quality have made them indispensable for our development projects."
    },
    {
      id: 2,
      name: "GreenPower Solutions",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300&h=150",
      industry: "Renewable Energy",
      projectCount: 8,
      testimonial: "Working with BuildForge on our renewable energy facilities has been a rewarding experience. Their innovative approach and technical expertise consistently deliver exceptional results."
    },
    {
      id: 3,
      name: "Urban Transit Authority",
      logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=300&h=150",
      industry: "Public Transportation",
      projectCount: 5,
      testimonial: "The infrastructure projects completed by BuildForge have significantly improved our transit capabilities. Their ability to work within budget constraints while maintaining high quality has been impressive."
    },
    {
      id: 4,
      name: "Highland Manufacturing",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=300&h=150",
      industry: "Manufacturing",
      projectCount: 7,
      testimonial: "Our manufacturing facilities built by BuildForge have enhanced our production efficiency by 30%. Their understanding of industrial requirements translated into perfectly designed spaces."
    },
    {
      id: 5,
      name: "Coastal Resorts Group",
      logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300&h=150",
      industry: "Hospitality",
      projectCount: 4,
      testimonial: "The attention to aesthetic detail combined with structural excellence makes BuildForge our preferred construction partner for all our luxury resort developments."
    },
    {
      id: 6,
      name: "NexGen Research Facilities",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=300&h=150",
      industry: "Research & Development",
      projectCount: 3,
      testimonial: "BuildForge's ability to understand and implement our specialized laboratory requirements was exceptional. Our research facilities are now world-class thanks to their expertise."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-construction-blue py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Clients</h1>
          <Breadcrumb className="text-white/70">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Clients</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-4">
              <Handshake size={48} className="text-construction-yellow" />
            </div>
            <h2 className="text-3xl font-bold text-construction-darkBlue mb-4">Trusted by Industry Leaders</h2>
            <p className="text-construction-gray">
              We take pride in our long-standing relationships with clients across various sectors. 
              Our commitment to excellence has earned us the trust of leading organizations who rely on 
              our expertise for their construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <div key={client.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-40 bg-gray-100 flex items-center justify-center p-6">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-construction-darkBlue mb-2">{client.name}</h3>
                  <div className="flex justify-between mb-4 text-sm text-construction-gray">
                    <span>{client.industry}</span>
                    <span>{client.projectCount} Projects</span>
                  </div>
                  <p className="italic text-construction-gray text-sm">"{client.testimonial}"</p>
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

export default Clients;
