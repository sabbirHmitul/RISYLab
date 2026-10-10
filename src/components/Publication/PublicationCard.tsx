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
      <span className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center shadow-lg z-10 font-heading group-hover:bg-pink-600 transition-colors duration-300">
        {String(index + 1).padStart(2, '0')}
      </span>

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
          <span className="text-pink-600 font-medium">{publication.journal}</span> · {publication.date ?? publication.year}
        </p>
        {publication.thanks && publication.thanks.length > 0 ? (
          <p className="text-xs text-gray-400">
            <span className="font-semibold text-gray-500">Thanks to:</span>{' '}
            {publication.thanks.map((name, i) => (
              <React.Fragment key={name}>
                {i > 0 && ', '}
                <span className="text-gray-600 font-medium">{name}</span>
              </React.Fragment>
            ))}
          </p>
        ) : (
          publication.authors.length > 0 && (
            <p className="text-xs text-gray-400">{publication.authors.join(', ')}</p>
          )
        )}

        <a
          href={`https://doi.org/${publication.doi}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-2 w-fit px-4 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:border-pink-500 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-300"
        >
          Read more
          <ArrowUpRight className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-gray-400 font-normal border-l border-gray-200 pl-2">
            DOI: {publication.doi}
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default PublicationCard;
