import React, { FC } from 'react';
// Styles
import './SkillIcon.style.scss';


type SkillIconProps = {}

const SkillIcon: FC<SkillIconProps> = () => {
  
  return (
    <div className="SkillIcon">
      <div className="skill-icon">
        <i className="fa-solid fa-people-group fa-xl" aria-hidden="true"></i>
      </div>
      <small className="skill-name">Leadership</small>
      <div className="skill-container">
        <div className="skill-level">
          <span className="skill-item">•</span>
          <span className="skill-item">•</span>
          <span>•</span>
        </div>
      </div>
    </div>
  );
}

export default SkillIcon;
