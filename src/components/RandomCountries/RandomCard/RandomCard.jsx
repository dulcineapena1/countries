import React from 'react';
import './RandomCard.css';

const RandomCard = (props) => {
  const {name, native, continent, flag} = props;

  let flag_element = (
    <div className='flagContainer mr-2'>
      {flag}
    </div>
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
        <p class='card-text'>
          <span className='font-weight-bold'>Continent: </span>
          <a href='#' className='card-link'><u>{continent}</u></a>
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
