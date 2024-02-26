import React, { FC } from 'react';
// Pictures
import ge from '../../assets/pictures/logos/ge-logo.webp';
import curzor from '../../assets/pictures/logos/curzor-logo.webp';
import itp from '../../assets/pictures/logos/itp-logo.webp';
// Styles
import './CompanyCard.style.scss';
// import logo from ''


type CompanyCardProps = {
  companyObject: Company;
}

interface Company {
  id: number;
  name: string;
  position: string;
  location: string;
  activities: string;
  logo: string;
}

interface Pictures {
  [index: string]: string;
  ge: string;
  curzor: string;
  itp: string;
}

const Picture: Pictures = {
  ge: ge,
  curzor: curzor,
  itp: itp
}

const CompanyCard: FC<CompanyCardProps> = ({ companyObject }) => {

  const { id, name, position, location, activities, logo } = companyObject;

  return (
    <div className='CompanyCard'>
      <div className='container'>
        <div className='company-logo'>
          <img src={Picture[logo]} alt={name} className={id > 1 ? 'logo-rectangle' : 'logo-square'} />
        </div>
        <div className='container-info'>
          <p id='company-name' className='card-text'>{name}</p>
          <p id='company-position' className='card-text'>{position}</p>
          <p id='company-location' className='card-text'>{location}</p>
          <p id='company-activities' className='card-text'>{activities}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
