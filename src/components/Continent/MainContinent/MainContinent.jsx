import React from 'react';
import ContinentNav from '../ContinentNav';
import ContinentCard from '../ContinentCard';

const MainContinent = (props) => {
  const { onChangeTab, activeTab, continentInfo } = props;

  let nav = (
    <ContinentNav onChangeTab={onChangeTab} activeTab={activeTab}/>
  );

  let card = (
    <ContinentCard activeTab={activeTab} continentInfo={continentInfo}/>
  );

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
                  Search section
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
