import React, { FC } from 'react';
// Data
import data from '../../assets/dataBase/db.json';
// Styles
import './JobCard.style.scss';
// Components
import CompanyCard from '../CompanyCard/CompanyCard.component';


type JobCardProps = {}

const JobCard: FC<JobCardProps> = () => {

  const { companies } = data;

  return (
    <div className='JobCard'>
      <div className="container-title">
        <h2 id="title">Contributed in</h2>
        <p id="subtitle">Companies where I've worked</p>
      </div>
      
      <div className="container-companies">
        {
          /* CompanyCard Component */
          companies.map(company => <CompanyCard key={company.id} companyObject={company} />)
        }
      </div>
    </div>
  );
};

export default JobCard;
