import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, HeartHandshake } from 'lucide-react';
import Button from '../Common/Button';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
  onNavigate: (href: string) => void;
  onOpenVolunteerModal: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
  onNavigate,
  onOpenVolunteerModal,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-white z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div>
              {/* Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-pink-500/20">
                    R
                  </div>
                  <span className="font-heading font-extrabold text-xl text-gray-900 tracking-tight">
                    RISY <span className="text-pink-500">Team</span>
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="mt-8 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.href);
                        onClose();
                      }}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-pink-50 text-pink-600 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-pink-500'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-pink-500' : 'text-gray-400'}`} />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-gray-100 mt-8 flex flex-col gap-3">
              <p className="text-xs text-gray-500 text-center font-sans">
                Research & Youth Development Organization
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  onClose();
                  onOpenVolunteerModal();
                }}
                className="w-full justify-center"
                icon={<HeartHandshake className="w-4 h-4" />}
              >
                Become a Volunteer
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
