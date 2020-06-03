import React from 'react';
import './RandomCard.css';

const RandomCard = (props) => {
  const { name, native, continent, flag, onClickContinent } = props;

  let flag_element = (
    <div className='flagContainer mr-2'>
      {flag}
    </div>
  );

  let continent_name;
  if (continent.includes('America')) {
    continent_name = 'Americas';
  } else {
    continent_name = continent;
  }

  let continent_element;
  if (continent === 'Antarctica') {
    continent_element = (
      <p>
        <u>{continent_name}</u>
      </p>
    );
  } else {
    continent_element = (
      <p className='card-link' onClick={() => onClickContinent(continent_name)}>
        <u>{continent_name}</u>
      </p>
    );
  }

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
        <p className='card-text'>
          <span className='font-weight-bold'>Continent: </span>
          {continent_element}
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

export default RandomCard;
