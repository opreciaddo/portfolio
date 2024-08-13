import React, { FC } from 'react';
// Pictures
import profilePicture from '../../assets/pictures/profile/profilePicture.webp';
// Styles
import './HeroCard.style.scss';


type HeroCardProps = {}

const HeroCard: FC<HeroCardProps> = () => {
  
  return (
    <div className='HeroCard'>

      <img src={profilePicture} alt="profile" className="profile-item" />
      <h1 className="profile-item">Omar Preciado</h1>
      <p id="profile-title" className="profile-item">Software Engineer</p>

      <div id="icons" className="profile-item">
        <span><i className="fa-solid fa-laptop-code fa-xl" aria-hidden="true"></i></span>
        <span><i className="fa-solid fa-pencil fa-xl" aria-hidden="true"></i></span>
      </div>

      <p id="profile-description" className="profile-item">
        I'm an engineer passionate about creating new software. 
        Throughout my 5 years of development experience, 
        I've worked from startups to big companies, building products from
        the ground up or implementing new features.
        I consider myself creative and efficient.
      </p>
  
    </div>
  );
}

export default HeroCard;
