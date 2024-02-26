import React, { FC } from 'react';
// Data
import data from '../../assets/dataBase/db.json';
// Styles
import './TrainedCard.style.scss';
// Components
import SchoolCard from '../SchoolCard/SchoolCard.component';


type TrainedCardProps = {}

const TrainedCard: FC<TrainedCardProps> = () => {

  const { schools } = data;

  return (
    <div className='TrainedCard'>
      <div className="container-title">
        <h2 id="title">Trained by</h2>
        <p id="subtitle">Institutions where I've studied</p>
      </div>
      <div className="container-schools">
        {
          schools.map(school => <SchoolCard key={school.id} schoolObject={school} />)
        }
      </div>
    </div>
  );
};

export default TrainedCard;
