
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/about/HeroSection';
import VisionMission from '../components/about/VisionMission';
import OurApproach from '../components/about/OurApproach';
import CoreValues from '../components/about/CoreValues';
import Management from '../components/about/Management';
import Equipment from '../components/about/Equipment';
import ProjectsPreview from '../components/about/ProjectsPreview';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionMission />
      <OurApproach />
      <CoreValues />
      <Management />
      <Equipment />
      <ProjectsPreview />
      <Footer />
    </div>
  );
};

export default About;
