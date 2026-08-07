import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Container from './Container';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, subtitle }) => {
  return (
    <section className="relative w-full bg-gray-950 overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Decorative glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-1.5 mb-5 text-xs font-medium text-gray-400">
            <span>Home</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-pink-300">{eyebrow}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-6 h-1 w-20 bg-pink-500 rounded-full mx-auto" />
        </motion.div>
      </Container>
    </section>
  );
};

export default PageHero;
