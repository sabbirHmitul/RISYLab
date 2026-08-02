import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isImageOnRight = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-[28px] border border-gray-100 bg-gradient-to-br from-white via-pink-50/40 to-sky-50/50 p-4 sm:p-6 shadow-sm"
    >
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] gap-8 items-start">
        <div className={`space-y-4 ${isImageOnRight ? 'order-2 xl:order-2' : 'order-2 xl:order-1'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#595959] leading-tight">
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm sm:text-base font-sans leading-relaxed">
            {project.description}
          </p>

          <div className="pt-4 border-t border-gray-200 space-y-2 text-sm">
            <div className="text-gray-800 font-medium">
              <span className="font-bold text-gray-900">Team Lead:</span> {project.teamLead}
            </div>

            <div className="text-gray-700 font-medium">
              <span className="font-bold text-gray-900">Team Members:</span>{' '}
              {project.teamMembers.join(', ')}
            </div>
          </div>
        </div>

        <div className={`order-1 ${isImageOnRight ? 'xl:order-1' : 'xl:order-2'}`}>
          <div className="grid grid-cols-3 gap-3">
            {project.imageUrls.map((image, imageIndex) => (
              <div
                key={`${project.id}-${imageIndex}`}
                className={`overflow-hidden rounded-[20px] border border-white/70  shadow-sm ${imageIndex === 1 ? 'mt-8' : ''}`}
              >
                <img
                  src={image}
                  alt={`${project.title} ${imageIndex + 1}`}
                  className="h-40 sm:h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
