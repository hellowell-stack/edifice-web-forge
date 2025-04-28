
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/about/HeroSection';
import VisionMission from '../components/about/VisionMission';
import OurApproach from '../components/about/OurApproach';
import CoreValues from '../components/about/CoreValues';
import Management from '../components/about/Management';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionMission />
      <OurApproach />
      <CoreValues />
      <Management />
      <Footer />
    </div>
  );
};

export default About;
