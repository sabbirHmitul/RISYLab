import React, { useState, useEffect } from 'react';
import { Menu, HeartHandshake, Sparkles } from 'lucide-react';
import Container from '../Common/Container';
import Button from '../Common/Button';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  onOpenVolunteerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVolunteerModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#mission' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Collaboration', href: '#collaboration' },
    { label: 'Contact', href: '#footer' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
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
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-pink-500 text-white flex items-center justify-center font-extrabold text-xl shadow-md shadow-pink-500/30 group-hover:scale-105 transition-transform duration-300">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl text-gray-900 tracking-tight flex items-center gap-1">
                RISY <span className="text-pink-500">Team</span>
                <Sparkles className="w-3.5 h-3.5 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-[10px] uppercase font-semibold text-gray-500 tracking-widest -mt-1">
                Research & Youth
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-50/80 p-1.5 rounded-full border border-gray-100">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenVolunteerModal}
            >
              Become Volunteer
            </Button>
          </div>

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
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenVolunteerModal={onOpenVolunteerModal}
      />
    </header>
  );
};

export default Navbar;
