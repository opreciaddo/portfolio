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
    </div>
  );
}

export default Sections;
