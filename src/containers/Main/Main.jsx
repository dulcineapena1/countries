import React, { Component } from 'react';
import RandomContainer from '../RandomCountriesContainer';
import ContinentContainer from '../ContinentContainer';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-4'>
            <RandomContainer/>
          </div>
          <div className='col-8'>
            <ContinentContainer/> 
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Main;
