
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building, Calendar, Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// This is a simple type definition for our project data
interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  slug: string;
  year: string;
  client: string;
  location?: string;
  value?: string;
  duration?: string;
  features?: string[];
  gallery?: string[];
}

// Mock project data that would normally come from an API
const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Summit Tower",
    category: "Commercial Construction",
    description: "A 15-story commercial complex with modern amenities and sustainable design features, located in the heart of the city.",
    fullDescription: "Summit Tower stands as a testament to modern architectural excellence and sustainable design. This 15-story commercial complex features premium office spaces, retail outlets, and recreational facilities, all designed with energy efficiency in mind. The building incorporates solar panels, rainwater harvesting systems, and smart climate control to minimize its environmental footprint while maximizing comfort for its occupants.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80",
    slug: "summit-tower",
    year: "2022",
    client: "Capital Enterprises Ltd.",
    location: "Central Business District, Kathmandu",
    value: "$25 million",
    duration: "36 months",
    features: [
      "15 stories of premium office and retail space",
      "LEED Gold certified sustainable design",
      "Smart building management system",
      "Underground parking for 200 vehicles",
      "Rooftop garden and recreational area"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 2,
    title: "Riverfront Bridge",
    category: "Infrastructure",
    description: "A 500-meter suspension bridge connecting vital commercial districts, designed to withstand extreme weather conditions.",
    fullDescription: "The Riverfront Bridge is a masterpiece of modern engineering, spanning 500 meters across the Bagmati River. This suspension bridge provides a vital link between two growing commercial districts, easing traffic congestion and reducing commute times. Designed to withstand extreme weather conditions, including monsoon floods and seismic activity, the bridge incorporates advanced materials and construction techniques to ensure durability and safety.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
    slug: "riverfront-bridge",
    year: "2021",
    client: "Municipal Development Authority",
    location: "Bagmati River Crossing, Lalitpur-Kathmandu",
    value: "$12 million",
    duration: "24 months",
    features: [
      "500-meter suspension bridge",
      "Earthquake-resistant design (up to 7.5 magnitude)",
      "LED lighting system powered by solar energy",
      "Pedestrian walkways with scenic viewpoints",
      "Integrated traffic management system"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 3,
    title: "Nexus Research Facility",
    category: "Industrial Engineering",
    description: "A state-of-the-art research facility with specialized laboratories and sustainable energy systems.",
    fullDescription: "The Nexus Research Facility represents the cutting edge of scientific infrastructure in Nepal. This comprehensive research complex houses multiple specialized laboratories, research spaces, and collaboration areas for scientists and innovators. The facility is powered by a hybrid renewable energy system, combining solar arrays and geothermal heat pumps to minimize environmental impact while ensuring uninterrupted power for sensitive equipment.",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80",
    slug: "nexus-research-facility",
    year: "2020",
    client: "SciTech Innovations Inc.",
    location: "Knowledge Park, Bhaktapur",
    value: "$18 million",
    duration: "30 months",
    features: [
      "10,000 sq. m of specialized laboratory space",
      "Class 100 clean rooms for nanotechnology research",
      "Hybrid renewable energy system",
      "Advanced waste management system",
      "Collaborative work spaces and conference facilities"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 4,
    title: "Metro Transit Hub",
    category: "Public Works",
    description: "A modern transit center integrating multiple transportation modes with passenger amenities and smart technology.",
    fullDescription: "The Metro Transit Hub is a cornerstone of urban development, designed to revolutionize public transportation in Kathmandu. This integrated facility connects bus routes, taxi services, and future metro lines in a single, user-friendly location. The hub features digital information displays, contactless ticketing systems, and comfortable waiting areas with retail and dining options. Built with accessibility as a priority, the facility ensures that public transportation is available to all citizens.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
    slug: "metro-transit-hub",
    year: "2019",
    client: "Urban Transit Authority",
    location: "Central Kathmandu",
    value: "$15 million",
    duration: "28 months",
    features: [
      "Integrated terminal for buses, taxis, and future metro lines",
      "Digital information and ticketing systems",
      "Retail and dining facilities",
      "Full accessibility for persons with disabilities",
      "Smart city integration with real-time transit data"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80"
    ]
  }
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the project that matches the slug
  const project = projectsData.find(p => p.slug === slug);
  
  // If no project found, show error message
  if (!project) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-8">Sorry, the project you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/projects')}>
          Return to Projects
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-80 md:h-96 bg-cover bg-center" 
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container-custom h-full flex flex-col justify-end pb-10">
            <div className="text-white">
              <div className="flex items-center gap-2 text-construction-yellow mb-2">
                <Building size={18} />
                <span>{project.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
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
                    <BreadcrumbPage>{project.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="container-custom py-10">
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-construction-darkBlue mb-6">Project Overview</h2>
            <p className="text-construction-gray leading-relaxed">{project.fullDescription}</p>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-construction-darkBlue mb-6">Project Details</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Client</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-construction-blue" />
                      {project.client}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Completion Year</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-construction-blue" />
                      {project.year}
                    </div>
                  </TableCell>
                </TableRow>
                {project.location && (
                  <TableRow>
                    <TableCell className="font-medium">Location</TableCell>
                    <TableCell>{project.location}</TableCell>
                  </TableRow>
                )}
                {project.value && (
                  <TableRow>
                    <TableCell className="font-medium">Project Value</TableCell>
                    <TableCell>{project.value}</TableCell>
                  </TableRow>
                )}
                {project.duration && (
                  <TableRow>
                    <TableCell className="font-medium">Duration</TableCell>
                    <TableCell>{project.duration}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          {project.features && project.features.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-construction-darkBlue mb-6">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-construction-gray">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-construction-darkBlue mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img src={image} alt={`${project.title} - Gallery ${index + 1}`} className="w-full h-48 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-center">
          <Link to="/projects" className="inline-flex items-center gap-2 text-construction-blue hover:text-construction-darkBlue transition-colors">
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
