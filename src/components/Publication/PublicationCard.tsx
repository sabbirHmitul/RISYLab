import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Publication } from '../../types/publication';

interface PublicationCardProps {
  publication: Publication;
  index: number;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col sm:flex-row gap-6 bg-white rounded-[28px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-4 sm:p-5"
    >
      {publication.badge && (
        <div className="absolute -top-3 -left-3 z-10">
          {/* Graduation cap sitting on the badge */}
          <svg
            aria-hidden="true"
            viewBox="0 0 44 22"
            className="absolute -top-[15px] left-1/2 -translate-x-1/2 w-11 h-[22px] -rotate-12 drop-shadow"
          >
            <path d="M22 1 L43 8 L22 15 L1 8 Z" fill="#0ea5e9" />
            <path d="M22 1 L43 8 L22 9.5 L1 8 Z" fill="#38bdf8" />
            <path d="M22 8 L36 10.5 L36 18" stroke="#0369a1" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <circle cx="36" cy="19" r="1.8" fill="#0369a1" />
          </svg>
          <span className="relative min-w-10 h-10 px-2 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center shadow-lg font-heading group-hover:bg-pink-600 transition-colors duration-300">
            {publication.badge}
          </span>
        </div>
      )}

      <div className="sm:w-56 shrink-0 h-40 sm:h-auto rounded-2xl overflow-hidden bg-gray-100">
        <img loading="lazy" decoding="async"
          src={publication.imageUrl}
          alt={publication.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-2 py-1">
        <h3 className="text-lg sm:text-xl font-bold font-heading text-gray-900 leading-snug group-hover:text-pink-600 transition-colors">
          {publication.url ? (
            <a href={publication.url} target="_blank" rel="noreferrer" className="hover:underline">
              {publication.title}
            </a>
          ) : (
            publication.title
          )}
        </h3>
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-700">Publication:</span>{' '}
          <span className="text-pink-600 font-medium">{publication.journal}</span> {(publication.date ?? publication.year) && <> · {publication.date ?? publication.year}</>}
        </p>
        {publication.thanks && publication.thanks.length > 0 ? (
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-500">Thanks to:</span>{' '}
            {publication.thanks.map((name, i) => (
              <React.Fragment key={name}>
                {i > 0 && ', '}
                <span className="text-gray-500 font-medium">{name}</span>
              </React.Fragment>
            ))}
          </p>
        ) : (
          publication.authors.length > 0 && (
            <p className="text-xs text-gray-400">{publication.authors.join(', ')}</p>
          )
        )}

        <a
          href={publication.doi ? `https://doi.org/${publication.doi}` : publication.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-2 w-fit px-4 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:border-pink-500 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-300"
        >
          Read more
          <ArrowUpRight className="w-3.5 h-3.5" />
          {publication.doi && (
            <span className="hidden sm:inline text-gray-400 font-normal border-l border-gray-200 pl-2">
              DOI: {publication.doi}
            </span>
          )}
        </a>
      </div>
    </motion.div>
  );
};

export default PublicationCard;
