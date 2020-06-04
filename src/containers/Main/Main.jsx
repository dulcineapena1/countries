import React, { Component } from 'react';
import RandomContainer from '../RandomCountriesContainer';
import ContinentContainer from '../ContinentContainer';

class Main extends Component {
  state = {
    active_tab: 'Africa',
  }

  changeTab = (tab) => {
    this.setState({ active_tab: tab });
  }

  render() {
    let random_countries_element = (
      <RandomContainer onClickContinent={this.changeTab}/>
    );

    let continent_element = (
      <ContinentContainer onChangeTab={this.changeTab} activeTab={this.state.active_tab}/>
    );

    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-12'>
            <div className='row'>
              <h1 className='font-weight-bold pl-3'>Continents</h1>
            </div>
            <div className='row'>
              <div className='col-12 col-md-3 mb-3 mb-md-0'>
                {random_countries_element}
              </div>
              <div className='col-12 col-md-9'>
                {continent_element}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
