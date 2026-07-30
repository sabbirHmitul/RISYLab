import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Mission from './components/Mission/Mission';
import ResearchArea from './components/ResearchArea/ResearchArea';
import CurrentProjects from './components/CurrentProjects/CurrentProjects';
import Collaboration from './components/Collaboration/Collaboration';
import Footer from './components/Footer/Footer';
import VolunteerModal from './components/VolunteerModal/VolunteerModal';

export default function App() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  const handleOpenVolunteerModal = () => {
    setIsVolunteerModalOpen(true);
  };

  const handleCloseVolunteerModal = () => {
    setIsVolunteerModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-pink-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenVolunteerModal={handleOpenVolunteerModal} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenVolunteerModal={handleOpenVolunteerModal} />

        {/* 2. Mission Section */}
        <Mission />

        {/* 3. Research & Human Development Area */}
        <ResearchArea onOpenVolunteerModal={handleOpenVolunteerModal} />

        {/* 4. Current Projects & Industries */}
        <CurrentProjects onOpenVolunteerModal={handleOpenVolunteerModal} />

        {/* 5. Collaboration & Strategic Partners */}
        <Collaboration onOpenVolunteerModal={handleOpenVolunteerModal} />
      </main>

      {/* Footer */}
      <Footer onOpenVolunteerModal={handleOpenVolunteerModal} />

      {/* Volunteer Modal Dialog */}
      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={handleCloseVolunteerModal}
      />
    </div>
  );
}
