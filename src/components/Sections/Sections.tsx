import React, { FC } from 'react';
// Styles
import './Sections.scss';
// Components
import HeroCard from '../HeroCard/HeroCard';

interface SectionsProps {}

const Sections: FC<SectionsProps> = () => (
  <div className="Sections container">
    <section id="profile" className='d-flex justify-content-center top-gap'>
      <HeroCard />
    </section>
  </div>
);

export default Sections;
