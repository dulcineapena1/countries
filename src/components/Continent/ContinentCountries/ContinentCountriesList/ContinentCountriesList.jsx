import React from 'react';
import ContinentCountriesCard from '../ContinentCountriesCard';

const ContinentCountriesList = (props) => {
  const { countries } = props;

  let cards_list = (
    countries.map((country, k) => {
      return (
        <div key={k}>
          <ContinentCountriesCard
            name={country.name}
            native={country.native}
            flag={country.emoji}
            languages={country.languages}
            capital={country.capital}
            code={country.code}
            currency={country.currency}/>
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

export default ContinentCountriesList;
