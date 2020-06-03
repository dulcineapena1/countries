import React from 'react';
import ContinentNav from '../ContinentNav';
import ContinentCard from '../ContinentCard';
import ContinentCountriesList from '../ContinentCountries/ContinentCountriesList';
import ContinentCountrySearch from '../ContinentCountrySearch';

const MainContinent = (props) => {
  const { onChangeTab, activeTab, continentInfo, countries, onSearchCountry } = props;

  let nav = (
    <ContinentNav onChangeTab={onChangeTab} activeTab={activeTab}/>
  );

  let card = (
    <ContinentCard activeTab={activeTab} continentInfo={continentInfo}/>
  );

  let countries_list;
  if (countries) {
    countries_list = (
      <ContinentCountriesList countries={countries}/>
    );
  }

  let country_search;
  if (countries) {
    country_search = (
      <ContinentCountrySearch onSearchCountry={onSearchCountry}/>
    );
  }

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-12'>
          <div className='row'>
            <div className='col-12'>
              {nav}
            </div>
            <div className='col-12'>
              <div className='row'>
                <div className='col-8'>
                  <h1>{activeTab}</h1>
                  {card}
                </div>
                <div className='col-4'>
                  <div className='row'>
                    <div className='col-12'>
                      {country_search}
                    </div>
                    <div className='col-12'>
                      {countries_list}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainContinent;
