import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Mission from './components/Mission/Mission';
import ResearchArea from './components/ResearchArea/ResearchArea';
import CurrentProjects from './components/CurrentProjects/CurrentProjects';
import Collaboration from './components/Collaboration/Collaboration';
import Footer from './components/Footer/Footer';
import VolunteerModal from './components/VolunteerModal/VolunteerModal';
import TeamPage from './components/Team/TeamPage';
import PublicationPage from './components/Publication/PublicationPage';
import NewsPage from './components/News/NewsPage';

export type Page = 'home' | 'team' | 'publication' | 'news';

const getPageFromPath = (pathname: string): Page => {
  if (pathname.startsWith('/team')) return 'team';
  if (pathname.startsWith('/publication')) return 'publication';
  if (pathname.startsWith('/news')) return 'news';
  return 'home';
};

export default function App() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const currentPage = getPageFromPath(currentPath);

  const handleOpenVolunteerModal = () => {
    setIsVolunteerModalOpen(true);
  };

  const handleCloseVolunteerModal = () => {
    setIsVolunteerModalOpen(false);
  };

  // Sync with browser back/forward navigation
  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Lightweight client-side navigation — no router dependency needed.
  const navigate = useCallback((href: string) => {
    const [rawPath, hash] = href.split('#');
    const path = rawPath || '/';
    const isSamePage = path === window.location.pathname;

    if (!isSamePage) {
      window.history.pushState({}, '', href);
      setCurrentPath(path);
      requestAnimationFrame(() => {
        if (hash) {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'auto' });
        }
      });
      return;
    }

    // Already on the target page — just smooth-scroll to the section.
    window.history.replaceState({}, '', href);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        const navOffset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-pink-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenVolunteerModal={handleOpenVolunteerModal}
        currentPage={currentPage}
        onNavigate={navigate}
      />

      {/* Main Content Sections */}
      <main>
        {currentPage === 'team' && <TeamPage />}
        {currentPage === 'publication' && <PublicationPage />}
        {currentPage === 'news' && <NewsPage />}
        {currentPage === 'home' && (
          <>
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
          </>
        )}
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
