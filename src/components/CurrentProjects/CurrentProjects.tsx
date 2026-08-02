import React from 'react';
import Container from '../Common/Container';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import sectionIcon from '../../../assets/img/2.png';

interface CurrentProjectsProps {
  onOpenVolunteerModal?: () => void;
}

export const CurrentProjects: React.FC<CurrentProjectsProps> = () => {
  return (
    <section id="projects" className="py-5  bg-white relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-black font-heading text-[#595959] tracking-tight">
            Current Research & Innovations
          </h2>
        </div>

        <div className="space-y-10">
          {projectsData.map((project, idx) => (
            <div key={project.id} className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-pink-100">
                <img src={sectionIcon} alt="Section icon" className="w-6 h-6 object-contain" />
                <h3 className="text-xl sm:text-2xl font-heading text-pink-600">
                  {project.section}
                </h3>
              </div>

              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CurrentProjects;
