
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectDetail from '../components/projects/ProjectDetail';

const ProjectDetailPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectDetail />
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
