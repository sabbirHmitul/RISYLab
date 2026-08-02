import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartHandshake, ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';
import Container from '../Common/Container';
import Button from '../Common/Button';
import SocialIcons from './SocialIcons';

interface HeroProps {
  onOpenVolunteerModal: () => void;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
    title: 'empowering youth research & action',
    tagline: 'Bridging empirical science with grassroots leadership to transform regional youth communities.',
  },
  {
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80',
    title: 'pioneering sustainable innovations',
    tagline: 'Incubating next-generation research fellows, STEM mentors, and ecological pioneers.',
  },
  {
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1920&q=80',
    title: 'global youth collaboration network',
    tagline: 'Fostering cross-border policy studies and social equity programs built for young visionaries.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenVolunteerModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative w-full min-h-[500px] h-[520px] bg-gray-950 overflow-hidden pt-20">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt="RISY Team Banner"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/75 to-gray-900/80 backdrop-blur-[1px]" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content matching Sketch layout */}
      <Container className="relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full py-4">
          {/* Left Side: Banner Tagline & Context */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 text-white space-y-2"
          >
            

          </motion.div>

          {/* Right Side Stacked (Sketch: "Youth" -> "Become V" -> Social Icons [f][insta][yt][in]) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 md:ml-auto w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-white space-y-3 shadow-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 backdrop-blur-md border border-pink-500/30 text-pink-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Research & Youth Organization</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/15 pb-2">
              <h2 className="text-3xl sm:text-2xl font-black font-heading tracking-wider text-white">
                Research & Innovation Society for Youth
              </h2>

            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenVolunteerModal}
                className="whitespace-nowrap"
              >
                Become Volunteer
              </Button>


            </div>
            <SocialIcons variant="light" />
          </motion.div>
        </div>
      </Container>

      {/* Slider Indicators */}
      <div className="absolute bottom-2 left-0 right-0 z-20">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-5 bg-pink-500' : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={prevSlide}
              className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors border border-white/10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors border border-white/10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
