import React from 'react';
import ContinentNav from '../ContinentNav';
import ContinentCard from '../ContinentCard';
import ContinentCountriesList from '../ContinentCountries/ContinentCountriesList';

const MainContinent = (props) => {
  const { onChangeTab, activeTab, continentInfo, countries } = props;

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
                    <div>
                      Search bar
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
