import React from 'react';
import RandomCard from '../RandomCard';

const RandomList = (props) => {
  const { countries } = props;

  let cards_list = (
    countries.map((country, k) => {
      return (
        <div key={k}>
          <RandomCard
            name={country.name}
            native={country.native}
            continent={country.continent.name}
            flag={country.emoji}/>
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
