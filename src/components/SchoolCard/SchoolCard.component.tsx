import React, { FC } from 'react';
// Pictures
import udemy from '../../assets/pictures/logos/udemy-logo.webp';
import uc3m from '../../assets/pictures/logos/uc3m-logo.webp';
import upq from '../../assets/pictures/logos/upq-logo.webp';
// Styles
import './SchoolCard.style.scss';


type SchoolCardProps = {
  schoolObject: School
}

interface School {
  id: number;
  name: string;
  title: string;
  logo: string;
}

interface Pictures {
  [index: string]: string;
  udemy: string;
  uc3m: string;
  upq: string;
}

const Picture: Pictures = {
  udemy: udemy,
  uc3m: uc3m,
  upq: upq
}

const SchoolCard: FC<SchoolCardProps> = ({ schoolObject }) => {

  const { id, name, title, logo } = schoolObject;

  return (
    <div className='SchoolCard'>
      <div className="container">
        <div className="school-logo">
          <img src={Picture[logo]} alt="Udemy" className={id > 2 ? 'logo-rectangle' : 'logo-square'} />
        </div>
        <div className="container-info">
          <h4 id="school-name" className="card-text">{name}</h4>
          <p id="school-title" className="card-text">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
