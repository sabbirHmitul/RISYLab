import React from 'react';
import Container from '../Common/Container';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';

interface CurrentProjectsProps {
  onOpenVolunteerModal?: () => void;
}

export const CurrentProjects: React.FC<CurrentProjectsProps> = () => {
  const sectionXProjects = projectsData.filter((p) => p.section === 'Section X');
  const sectionYProjects = projectsData.filter((p) => p.section === 'Section Y');

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-gray-900 tracking-tight">
            Current Research & Innovations
          </h2>
        </div>

        {/* Section X (2 Projects with Image on Left Side) */}
        <div className="mb-20">
          <div className="mb-8 pb-3 border-b border-pink-100 flex items-center justify-between">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900">
              Section X
            </h3>
          </div>

          <div className="space-y-8">
            {sectionXProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                imagePosition="left"
                index={idx}
              />
            ))}
          </div>
        </div>

        {/* Section Y (2 Projects with Image on Right Side) */}
        <div>
          <div className="mb-8 pb-3 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900">
              Section Y
            </h3>
          </div>

          <div className="space-y-8">
            {sectionYProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                imagePosition="right"
                index={idx}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CurrentProjects;
