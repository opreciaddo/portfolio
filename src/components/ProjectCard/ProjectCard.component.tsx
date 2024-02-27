import React, { FC } from 'react';
// Pictures
import webready from '../../assets/pictures/webs/webReady.webp';
import angular from '../../assets/pictures/webs/angular.webp';
import react from '../../assets/pictures/webs/react.webp';
// Styles
import './ProjectCard.style.scss';


type ProjectCardProps = {
  projectObject: Projects;
}

interface Projects {
  id: number;
  name: string;
  desc: string;
  img: string;
  url: string;
}

interface Pictures {
  [index: string]: string;
  webready: string;
  angular: string;
  react: string;
}

const Picture: Pictures = {
  webready: webready,
  angular: angular,
  react: react
}

const ProjectCard: FC<ProjectCardProps> = ({ projectObject }) => {

  const { id, name, desc, img, url } = projectObject;

  return (
    <div className='ProjectCard'>
      <div className="card card-has-bg" style={{backgroundImage: `url(${Picture[img]})`}}>
        <a target="_blank" rel="noreferrer" href={url}>
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body"></div>
            <div className="card-footer">
              <h4 id="project-name" className="card-text">{name}</h4>
              <p id="project-desc" className="card-text">{desc}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
