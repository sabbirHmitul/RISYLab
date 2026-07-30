import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Sparkles, HeartHandshake } from 'lucide-react';
import Container from '../Common/Container';
import SocialIcons from '../Hero/SocialIcons';

interface FooterProps {
  onOpenVolunteerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVolunteerModal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#mission' },
    { label: 'Research Units', href: '#research' },
    { label: 'Current Projects', href: '#projects' },
    { label: 'Collaboration', href: '#collaboration' },
  ];

  return (
    <footer id="footer" className="bg-gray-950 text-white pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-800">
          {/* Col 1: Logo & About */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-pink-500 text-white flex items-center justify-center font-extrabold text-xl shadow-lg shadow-pink-500/20">
                R
              </div>
              <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                RISY <span className="text-pink-500">Team</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm font-sans leading-relaxed max-w-md">
              RISY Team is an interdisciplinary Research & Youth Development Organization dedicated to empowering young researchers, advancing technological literacy, and building sustainable community frameworks.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase text-gray-500 tracking-wider block mb-3">
                Follow Our Publications & Media
              </span>
              <SocialIcons variant="light" />
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <p>© {new Date().getFullYear()} RISY Team Organization. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-2xl bg-gray-900 hover:bg-pink-500 hover:text-white text-gray-400 transition-all flex items-center gap-1 border border-gray-800"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
