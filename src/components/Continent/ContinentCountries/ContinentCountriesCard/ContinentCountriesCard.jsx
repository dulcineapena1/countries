import React from 'react';

const ContinentCountriesCard = (props) => {
  const { name, native, flag, languages, capital, code, currency } = props;

  let flag_element = (
    <div className='flagContainer mr-2'>
      {flag}
    </div>
  );

  let languages_list = (
    languages.map((lang, k) => {
      return (
        <div key={k}>
          {lang.name}
        </div>
      )
    })
  );

  let card = (
    <div className='card m-2'>
      <div className='card-body p-3'>
        <div className='d-flex'>
          {flag_element}
          <h5 className='card-title font-weight-bold'>{name}</h5>
        </div>
        <p className='card-text mb-1'>
          <span className='font-weight-bold'>Native name: </span>
          {native}
        </p>
        <p className='card-text mb-1'>
          <span className='font-weight-bold'>Languages: </span>
        </p>
        {languages_list}
        <p className='card-text mb-1'>
          <span className='font-weight-bold'>Capital: </span>
          {capital}
        </p>
        <p className='card-text mb-1'>
          <span className='font-weight-bold'>Code: </span>
          {code}
        </p>
        <p className='card-text mb-1'>
          <span className='font-weight-bold'>currency: </span>
          {currency}
        </p>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {card}
    </React.Fragment>
  );
};

export default ContinentCountriesCard;
