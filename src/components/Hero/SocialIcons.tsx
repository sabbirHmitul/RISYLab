import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const SocialIcons: React.FC<SocialIconsProps> = ({
  className = '',
  variant = 'light',
}) => {
  const socials = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://www.facebook.com/risy.youth',
    },

    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/company/risy-youth/',
    },
  ];

  const colorStyles =
    variant === 'light'
      ? 'bg-white/10 hover:bg-pink-500 text-white hover:text-white border-white/20'
      : 'bg-gray-100 hover:bg-pink-500 text-gray-700 hover:text-white border-gray-200';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className={`w-11 h-11 rounded-2xl backdrop-blur-md border flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-xs ${colorStyles}`}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
