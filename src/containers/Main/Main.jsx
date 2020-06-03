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
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-4'>
            <RandomContainer/>
          </div>
          <div className='col-8'>
            <ContinentContainer onChangeTab={this.changeTab} activeTab={this.state.active_tab}/>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Main;
