import React from 'react';
import RandomCard from '../RandomCard';

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
      {cards_list}
    </React.Fragment>
  );
};

export default RandomList;
