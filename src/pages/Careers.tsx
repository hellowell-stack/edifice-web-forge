
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GraduationCap, Users, Briefcase } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Civil Engineer",
      department: "Engineering",
      location: "Headquarters",
      type: "Full-time",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "Minimum 5 years experience in construction projects",
        "Professional Engineering license",
        "Strong leadership and project management skills",
        "Experience with AutoCAD and other design software"
      ]
    },
    {
      id: 2,
      title: "Project Manager",
      department: "Operations",
      location: "Field Offices",
      type: "Full-time",
      requirements: [
        "Bachelor's degree in Construction Management or related field",
        "7+ years of experience in construction project management",
        "PMP certification preferred",
        "Excellent communication and leadership skills",
        "Experience managing budgets of $5M+"
      ]
    },
    {
      id: 3,
      title: "Heavy Equipment Operator",
      department: "Field Operations",
      location: "Various Project Sites",
      type: "Full-time",
      requirements: [
        "High school diploma or equivalent",
        "3+ years experience operating excavators, bulldozers, or similar equipment",
        "Valid heavy equipment operation certification",
        "Clean driving record",
        "Ability to work in various weather conditions"
      ]
    },
    {
      id: 4,
      title: "Estimator",
      department: "Pre-Construction",
      location: "Headquarters",
      type: "Full-time",
      requirements: [
        "Bachelor's degree in Construction Management or Engineering",
        "3+ years experience in construction cost estimation",
        "Proficiency in estimation software",
        "Strong mathematical and analytical skills",
        "Knowledge of construction methods and materials"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-construction-blue py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Careers</h1>
          <Breadcrumb className="text-white/70">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Careers</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-4">
              <Users size={48} className="text-construction-yellow" />
            </div>
            <h2 className="text-3xl font-bold text-construction-darkBlue mb-4">Join Our Team</h2>
            <p className="text-construction-gray">
              At BuildForge, we're always looking for talented individuals who are passionate about 
              construction and share our commitment to excellence. Join us and be part of building 
              the future together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-construction-lightGray p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <GraduationCap size={40} className="text-construction-blue" />
              </div>
              <h3 className="text-xl font-bold text-construction-darkBlue mb-3">Professional Growth</h3>
              <p className="text-construction-gray">
                We invest in our employees through continuous training, mentorship programs, and career advancement opportunities.
              </p>
            </div>
            <div className="bg-construction-lightGray p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Briefcase size={40} className="text-construction-blue" />
              </div>
              <h3 className="text-xl font-bold text-construction-darkBlue mb-3">Exciting Projects</h3>
              <p className="text-construction-gray">
                Work on diverse, challenging projects that make a real impact on communities and infrastructure.
              </p>
            </div>
            <div className="bg-construction-lightGray p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-construction-blue" />
              </div>
              <h3 className="text-xl font-bold text-construction-darkBlue mb-3">Supportive Culture</h3>
              <p className="text-construction-gray">
                Join a collaborative team that values your input, celebrates diversity, and promotes work-life balance.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-construction-darkBlue mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-construction-blue mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-construction-gray mb-4">
                    <span className="bg-construction-lightBlue/10 text-construction-blue px-3 py-1 rounded-full">
                      {position.department}
                    </span>
                    <span className="bg-construction-lightGray px-3 py-1 rounded-full">
                      {position.location}
                    </span>
                    <span className="bg-construction-yellow/10 text-construction-darkBlue px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-construction-darkBlue mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-construction-gray space-y-1">
                      {position.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-4 bg-construction-blue text-white px-6 py-2 rounded hover:bg-construction-darkBlue transition-colors">
                    Apply Now
                  </button>
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

export default Careers;
