import React from 'react';
import ContinentNav from '../ContinentNav';
import ContinentCard from '../ContinentCard';
import ContinentCountriesList from '../ContinentCountries/ContinentCountriesList';
import ContinentCountrySearch from '../ContinentCountrySearch';
import './MainContinent.css';

const MainContinent = (props) => {
  const { onChangeTab, activeTab, continentSummary, countries, onSearchCountry } = props;

  let nav = (
    <ContinentNav onChangeTab={onChangeTab} activeTab={activeTab}/>
  );

  let card = (
    <ContinentCard activeTab={activeTab} continentSummary={continentSummary}/>
  );

  let countries_list = (
    <div>...Loading</div>
  );
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
            <div className='infoContainer'>
              <div className='col-12 p-4'>
                <div className='row'>
                  <div className='col-12 col-md-8'>
                    <h1>{activeTab}</h1>
                    {card}
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className='row'>
                      <div className='col-12'>
                        {country_search}
                      </div>
                      <div className='col-12 pl-0'>
                        {countries_list}
                      </div>
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
