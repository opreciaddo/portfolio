import React, { FC } from 'react';
// Data
import data from '../../assets/dataBase/db.json';
// Styles
import './ProjectsSection.style.scss';
// Components
import ProjectCard from '../ProjectCard/ProjectCard.component';


type ProjectsSectionProps = {}

const ProjectsSection: FC<ProjectsSectionProps> = () => {

  const { projects } = data;

  return (
    <div className='ProjectsSection'>
      <div className="container-title">
        <h2 id="title">Projects done</h2>
        <p id="subtitle">Design &amp; Code that I've developed</p>
      </div>
      <div className="container-projects">
        {
          projects.map(project => <ProjectCard key={project.id} projectObject={project} />)
        }
      </div>
    </div>
  );
};

export default ProjectsSection;
