import React, { FC } from 'react';
// Styles
import './Sections.style.scss';
// Components
import HeroCard from '../HeroCard/HeroCard.component';
import CandoCard from '../CandoCard/CandoCard.component';


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
        
      </section>
      <section id="trainedBy" className="d-flex justify-content-start top-gap">
        
      </section>
      <section id="projectsDone" className="d-flex justify-content-start top-gap">
        
      </section>
      <section id="letsTalk" className="d-flex justify-content-start top-gap" style={{marginBottom: '0px'}}>
        
      </section>
    </div>
  );
}

export default Sections;
