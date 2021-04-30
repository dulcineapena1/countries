import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RandomContainer from '../RandomCountriesContainer';
import ContinentContainer from '../ContinentContainer';

class Main extends Component {
  state = {
    active_tab: '',
  }


  componentDidMount = () => {
    let url_params = this.props.match.params.continent;

    if (this.props.match.params && url_params) {
      this.changeTab(url_params);
    } else {
      this.changeTab('Africa');
    }
  }

  changeTab = (tab) => {
    this.setState({ active_tab: tab },
      () => this.updateHistory());
  }

  updateHistory = () => {
    this.props.history.push(`/continents/${this.state.active_tab}`);
  }

  render() {
    let random_countries_element = (
      <RandomContainer onClickContinent={this.changeTab}/>
    );

    let continent_element;
    if (this.state.active_tab.length) {
      continent_element = (
        <ContinentContainer onChangeTab={this.changeTab} activeTab={this.state.active_tab}/>
      );
    }

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

export default withRouter(Main);
