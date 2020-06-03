import React from 'react';
import './ContinentCountrySearch.css';

const ContinentCountrySearch = (props) => {
  const { onSearchCountry } = props;

  let input = (
    <input
      type='text'
      id='countrySearch'
      name='countrySearch'
      className='countrySearchInput'
      onKeyUp={(e) => onSearchCountry(e.target.value)}/>
  );

  return (
    <React.Fragment>
      {input}
    </React.Fragment>
  );
};

export default ContinentCountrySearch;
