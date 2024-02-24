import React, { FC } from 'react';
// Data
import data from '../../assets/dataBase/db.json';
// Styles
import './CandoCard.style.scss';
// Components
import SkillIcon from '../SkillIcon/SkillIcon.component';


type CandoCardProps = {}

const CandoCard: FC<CandoCardProps> = () => {
  
  return (
    <div className="CandoCard">
    
      <div className="container-title">
        <h2 id="title">What I can do</h2>
        <p id="subtitle">Expertise fields</p>
      </div>
      
      <div className="d-flex justify-content-start">
        <div className="container-field">
          <div className="field-title">
            <i className="fa-solid fa-desktop fa-sm" aria-hidden="true"></i>
            <h4>Frontend</h4>
          </div>
          <div className="field-content">
            <p>
              With a keen eye for design and usability, I create visually stunning and user-friendly websites. 
              I specialize in responsive web design, ensuring seamless experiences across various devices. 
              I'm experienced in using popular frontend frameworks like Angular and Reactvto build dynamic and interactive web applications.
            </p>
          </div>
        </div>
      </div>
          
      <div className="d-lg-flex justify-content-end" style={{marginBottom: '32px'}}>
        <div className="container-field">
          <div className="field-title">
            <i className="fa-solid fa-server fa-sm" aria-hidden="true"></i>
            <h4>Backend</h4>
          </div>
          <div className="field-content">
            <p>
              I have strong Backend skills that enable me to build robust and scalable web applications. 
              I am proficient in server-side programming languages such as NodeJS and Python. 
              I have expertise in API development and integration, allowing me to create seamless communication between Frontend and Backend systems.
            </p>
          </div>
        </div>
      </div>
      
      <div className="skills-section d-md-flex justify-content-center align-items-center">
        <div className="flip-card">
          <div className="front container-skills">
            <div className="skills-title">
              <i className="fa-solid fa-user-tie fa-sm" aria-hidden="true"></i>
              <h4>Soft Skills</h4>
            </div>
            <div className="skills-content">
              {}
              <SkillIcon />
            </div>
          </div>
          
          <div className="back container-skills">
            <div className="skills-title">
              <i className="fa-solid fa-terminal fa-sm" aria-hidden="true"></i>
              <h4>Hard Skills</h4>
            </div>
            <div className="skills-content">
              <SkillIcon />
            </div>
          </div>
        </div>
                
        <div className="container-skills" style={{marginBottom: '16px'}}>
          <div className="skills-title">
            <i className="fa-solid fa-download fa-sm" aria-hidden="true"></i>
            <h4>Learning Skills</h4>
          </div>
          <div className="skills-content">
            <SkillIcon />
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default CandoCard;
