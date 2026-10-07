import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Container from '../Common/Container';
import Logo from '../Common/Logo';
import MobileMenu from './MobileMenu';
import type { Page } from '../../App';

interface NavbarProps {
  onOpenVolunteerModal: () => void;
  currentPage: Page;
  onNavigate: (href: string) => void;
}

const navItems: { label: string; href: string; page?: Page }[] = [
  { label: 'Home', href: '/', page: 'home' },
  { label: 'Research', href: '/research', page: 'research' },
  { label: 'Team', href: '/team', page: 'team' },
  { label: 'Publication', href: '/publication', page: 'publication' },
  { label: 'News', href: '/news', page: 'news' },
  { label: 'Contact', href: '/#footer' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenVolunteerModal, currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy (only meaningful while on the home page)
      if (currentPage !== 'home') return;

      const sections = ['home', 'mission', 'research', 'projects', 'collaboration', 'footer'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const isItemActive = (item: (typeof navItems)[number]) => {
    if (item.label === 'Contact') return currentPage === 'home' && activeSection === 'footer';
    if (item.label === 'Home') return currentPage === 'home' && activeSection !== 'footer';
    return currentPage === item.page;
  };

  const handleNavigate = (href: string) => {
    onNavigate(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100'
          : 'bg-transparent py-5'
        }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('/');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <Logo
              className="group-hover:scale-[1.02] transition-transform duration-300"
              imageClassName="group-hover:scale-105 transition-transform duration-300"
              titleClassName="text-gray-900"
              subtitleClassName="text-gray-500"
            />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-50/80 p-1.5 rounded-full border border-gray-100">
            {navItems.map((item) => {
              const isActive = isItemActive(item);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.href);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                      ? 'bg-white text-pink-600 font-semibold shadow-xs'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>



          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-2xl text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        isItemActive={isItemActive}
        onNavigate={handleNavigate}
        onOpenVolunteerModal={onOpenVolunteerModal}
      />
    </header>
  );
};

export default Navbar;
