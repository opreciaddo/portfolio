import React, { FC } from 'react';
// Styles
import './Sections.style.scss';
// Components
import HeroCard from '../HeroCard/HeroCard.component';
import CandoCard from '../CandoCard/CandoCard.component';
import JobCard from '../JobCard/JobCard.component';
import TrainedCard from '../TrainedCard/TrainedCard.component';
import ProjectsSection from '../ProjectsSection/ProjectsSection.component';
import Contact from '../Contact/Contact.component';


type SectionsProps = {}

const Sections: FC<SectionsProps> = () => {
  
  return (
    <div className="Sections container">
      <section id="profile" className='d-flex justify-content-center top-gap'>
        <HeroCard />
      </section>
      <section id="canDo" className="d-flex justify-content-start top-gap">
        <CandoCard />
      </section>
      <section id="contributedIn" className="d-flex justify-content-start top-gap">
        <JobCard />
      </section>
      <section id="trainedBy" className="d-flex justify-content-start top-gap">
        <TrainedCard />
      </section>
      <section id="projectsDone" className="d-flex justify-content-start top-gap">
        <ProjectsSection />
      </section>
      <section id="letsTalk" className="d-flex justify-content-start top-gap" style={{marginBottom: '0px'}}>
        <Contact />
      </section>
    </div>
  );
}

export default Sections;
