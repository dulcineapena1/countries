import React, { Component } from 'react';
import MainContinent from '../../components/Continent/MainContinent';

class ContinentContainer extends Component {
  state = {
    active_tab: 'Africa',
    continent_info: null,
  }

  componentDidMount = () => {
    this.requestContinentInfo();
  }

  changeTab = (tab) => {
    this.setState({ active_tab: tab },
      () => this.requestContinentInfo());
  }

  requestContinentInfo = () => {
    let query = `http://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&format=json&exintro=&rvsection=0&rvparse&titles=${this.state.active_tab}`

    fetch(query)
      .then(res => res.json())
      .then(res => {
        let summary = res.query.pages[Object.keys(res.query.pages)[0]].extract;
        this.setState({ continent_info: summary });
      })
  }


  render() {
    let main_continent_element = (
      // loader
      <div>...Loading</div>
    );
    if (this.state.continent_info) {
      main_continent_element = (
        <MainContinent
          onChangeTab={this.changeTab}
          activeTab={this.state.active_tab}
          continentInfo={this.state.continent_info}/>
      );
    }

    return (
      <React.Fragment>
        {main_continent_element}
      </React.Fragment>
    );
  }
}

export default ContinentContainer;
