import React, { FC } from 'react';
// Pictures
import profilePicture from '../../assets/profile/profilePicture.webp';
// Styles
import './HeroCard.scss';

interface HeroCardProps {}

const HeroCard: FC<HeroCardProps> = () => (
  <div className='HeroCard'>

    <img src={profilePicture} alt="profile" className="profile-item" />
    <h1 className="profile-item">Omar Preciado</h1>
    <p id="profile-title" className="profile-item">Software Developer</p>

    <div id="icons" className="profile-item">
      <span><i className="fa-solid fa-laptop-code fa-xl" aria-hidden="true"></i></span>
      <span><i className="fa-solid fa-pencil fa-xl" aria-hidden="true"></i></span>
    </div>

    <p id="profile-description" className="profile-item">
      I am an engineer passionate about understanding how the things work and how can be improved. 
      The Programming subjects captured my interest since the beginning of my academic education. 
      That is why, my attention is focused to this field.
    </p>
  
  </div>
);

export default HeroCard;
