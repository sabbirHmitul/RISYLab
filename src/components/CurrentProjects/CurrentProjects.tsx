import React from 'react';
import Container from '../Common/Container';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import sectionIcon from '../../../assets/img/2.webp';

interface CurrentProjectsProps {
  onOpenVolunteerModal?: () => void;
}

export const CurrentProjects: React.FC<CurrentProjectsProps> = () => {
  const sections = Array.from(new Set(projectsData.map((project) => project.section)));

  return (
    <section id="projects" className="py-5  bg-white relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-black font-heading text-[#595959] tracking-tight">
            Current Research & Innovations
          </h2>
        </div>

        <div className="space-y-10">
          {sections.map((section) => {
            const sectionProjects = projectsData.filter((project) => project.section === section);

            return (
              <div key={section} className="space-y-4">
                <div className="flex items-center pb-2 border-b border-pink-100">
                  <img src={sectionIcon} alt="Section icon" className="h-10 object-contain" />
                  <h3 className="text-2xl font-bold font-heading text-pink-600">{section}</h3>
                </div>

                <div className="space-y-6">
                  {sectionProjects.map((project, idx) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={idx}
                      imageOnLeft={projectsData.indexOf(project) % 2 === 0}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CurrentProjects;
