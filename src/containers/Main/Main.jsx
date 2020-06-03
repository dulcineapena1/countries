import React, { Component } from 'react';
import RandomContainer from '../RandomCountriesContainer';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-4'>
            <RandomContainer/>
          </div>
          <div className='col-8'> col8
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Main;
