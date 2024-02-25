import React, { FC } from 'react';
// Styles
import './SkillIcon.style.scss';


type SkillIconProps = {
  skillObject: Skill;
}

interface Skill {
  id: number;
  snippet: string;
  name: string;
  level: number;
}

const SkillIcon: FC<SkillIconProps> = ({ skillObject }) => {
  
  const { id, snippet, name, level } = skillObject;
  
  // Loop para Skill Level points
  let skillLevels = [<span key={'a'}>•</span>, <span key={'b'}>•</span>, <span key={'c'}>•</span>];
  
  for (let i = 0; i < level; i++) {
    
    const skillItem = <span key={i} className="skill-item">•</span>;
    skillLevels.splice(i, 1, skillItem);
  }

  return (
    <div className="SkillIcon">
      <div className="skill-icon">
        {
          /* Condicional para renderizar Iconos */
          snippet.slice(0,3) === 'alt' 
            ? <img src={snippet.split('_')[1]} alt={name} /> 
            : <i className={`${snippet} fa-xl`} aria-hidden="true"></i>
        }
      </div>
      <small className="skill-name">{name}</small>
      <div className="skill-container">
        <div className="skill-level">
          {
            skillLevels
          }
        </div>
      </div>
    </div>
  );
}

export default SkillIcon;
