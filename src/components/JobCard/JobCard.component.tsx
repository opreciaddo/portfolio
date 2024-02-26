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
        {/* <app-company-card id="1">
          <div className="container">
            <div className="company-logo">
              <img src="assets/pictures/logos/ge-logo.webp" alt="GE Digital" className="logoSquared">
            </div>
            <div className="container-info">
              <p id="company-name" className="card-text">GE Digital</p>
              <p id="company-position" className="card-text">UI Software Engineer</p>
              <p id="company-location" className="card-text">Remote</p>
              <p id="company-activities" className="card-text">Development of components and apps used for the transmission and distribution of electricity.</p>
            </div>
          </div>
        </app-company-card>
        <app-company-card id="2">
          <div className="container">
            <div className="company-logo">
              <img src="assets/pictures/logos/curzor-logo.webp" alt="Curzor" className="logoSized">
            </div>
            <div className="container-info">
              <p id="company-name" className="card-text">Curzor</p>
              <p id="company-position" className="card-text">JavaScript Developer</p>
              <p id="company-location" className="card-text">Remote</p>
              <p id="company-activities" className="card-text">Frontend and Backend development of apps for finance and manufacturing sectors.</p>
            </div>
          </div>
        </app-company-card>
        <app-company-card id="3">
          <div className="container">
            <div className="company-logo">
              <img src="assets/pictures/logos/itp-logo.webp" alt="ITP Aero" className="logoSized">
            </div>
            <div className="container-info">
              <p id="company-name" className="card-text">ITP Aero</p>
              <p id="company-position" className="card-text">Focal Point</p>
              <p id="company-location" className="card-text">Madrid &amp; Germany</p>
              <p id="company-activities" className="card-text">Development of macros and apps for automate design processes.</p>
            </div>
          </div>
        </app-company-card> */}
      </div>
    </div>
  );
};

export default JobCard;
