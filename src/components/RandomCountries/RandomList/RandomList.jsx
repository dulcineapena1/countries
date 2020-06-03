import React from 'react';
import RandomCard from '../RandomCard';
import './RandomList.css';

const RandomList = (props) => {
  const { countries, onClickContinent } = props;

  let cards_list = (
    countries.map((country, k) => {
      return (
        <div key={k}>
          <RandomCard
            name={country.name}
            native={country.native}
            continent={country.continent.name}
            flag={country.emoji}
            onClickContinent={onClickContinent}/>
        </div>
      )
    })
  );

  return (
    <React.Fragment>
      <h2>Random Countries</h2>
      <div className='listContainer'>
        {cards_list}
      </div>
    </React.Fragment>
  );
};

export default RandomList;
