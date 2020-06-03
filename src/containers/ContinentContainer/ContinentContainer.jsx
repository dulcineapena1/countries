import React, { Component } from 'react';
import MainContinent from '../../components/Continent/MainContinent';

class ContinentContainer extends Component {
  state = {
    active_tab: '',
    continent_info: null,
    countries_in_continent_info: null,
  }

  componentDidMount = () => {
    this.setState({ active_tab: this.props.activeTab },
      () => this.requestContinentInfo())
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.activeTab !== this.props.activeTab) {
      this.setState({ active_tab: this.props.activeTab },
        () => this.requestContinentInfo());
    }
  }

  requestContinentInfo = () => {
    let query = `http://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&format=json&exintro=&rvsection=0&rvparse&titles=${this.state.active_tab}`

    fetch(query)
      .then(res => res.json())
      .then(res => {
        let summary = res.query.pages[Object.keys(res.query.pages)[0]].extract;
        this.setState({ continent_info: summary });
        this.requestCountriesInfo();
      })
  }

  requestCountriesInfo = () => {
    const countries_code = {
      'Europe': ['EU'],
      'Africa': ['AF'],
      'Asia': ['AS'],
      'Oceania': ['OC'],
      'Americas': ['NA', 'SA']
    }

    let selected_country_code = countries_code[this.state.active_tab].join('", "');

    let countries_in_continent_query = `{ countries(filter:{continent:{in:["${selected_country_code}"] } }) {
  	   name emoji native languages { name } capital code currency } }`

    fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ query: countries_in_continent_query })
    })
      .then(res => res.json())
      .then(res => this.setState({ countries_in_continent_info: res.data.countries }));
  }

  render() {
    let main_continent_element = (
      // loader
      <div>...Loading</div>
    );
    if (this.state.continent_info) {
      main_continent_element = (
        <MainContinent
          onChangeTab={this.props.onChangeTab}
          activeTab={this.props.activeTab}
          continentInfo={this.state.continent_info}
          countries={this.state.countries_in_continent_info}/>
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
