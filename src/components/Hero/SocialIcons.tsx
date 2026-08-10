import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';

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
      icon: Facebook,
      href: 'https://www.facebook.com/risy.youth',
      bgClass: 'bg-[#1877F2] hover:bg-[#1664d6]',
      iconClass: 'text-white',
    },

    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/risy-youth/',
      bgClass: 'bg-[#0A66C2] hover:bg-[#0955a6]',
      iconClass: 'text-white',
    },
  ];

  const colorStyles =
    variant === 'light'
      ? 'text-white border-white/20'
      : 'text-white border-gray-200';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-xs ${colorStyles} ${s.bgClass}`}
          >
            <Icon className={`w-5 h-5 ${s.iconClass}`} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
