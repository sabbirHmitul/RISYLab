import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  imagePosition: 'left' | 'right';
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, imagePosition, index }) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 mb-8 last:mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Image Side */}
        <div
          className={`lg:col-span-6 ${
            isImageLeft ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-72 w-full bg-gray-900 shadow-sm">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Side: Heading, Text, Team Lead, Team Members */}
        <div
          className={`lg:col-span-6 space-y-4 ${
            isImageLeft ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 leading-tight">
            {project.title}
          </h3>

          {/* Text / Description */}
          <p className="text-gray-600 text-sm sm:text-base font-sans leading-relaxed">
            {project.description}
          </p>

          {/* Team Info */}
          <div className="pt-4 border-t border-gray-100 space-y-2 text-sm">
            <div className="text-gray-800 font-medium">
              <span className="font-bold text-gray-900">Team Lead:</span> {project.teamLead}
            </div>

            <div className="text-gray-700 font-medium">
              <span className="font-bold text-gray-900">Team Members:</span>{' '}
              {project.teamMembers.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
