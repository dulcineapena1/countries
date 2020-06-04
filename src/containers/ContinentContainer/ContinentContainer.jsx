import React, { Component } from 'react';
import MainContinent from '../../components/Continent/MainContinent';

class ContinentContainer extends Component {
  state = {
    active_tab: '',
    continent_info: null,
    countries_in_continent_info: null,
    active_country_filter: false,
    filtered_country: null,
  }

  componentDidMount = () => {
    this.setState({ active_tab: this.props.activeTab },
      () => this.requestContinentInfo());
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.activeTab !== this.props.activeTab) {
      this.setState({ active_tab: this.props.activeTab, countries_in_continent_info: null,
        active_country_filter: false },
        () => this.requestContinentInfo());
    }
  }

  requestContinentInfo = () => {
    let query = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&format=json&exintro=&titles=${this.state.active_tab}`

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

  onSearchCountry = (value) => {
    if (value.length) {
      this.setState({ active_country_filter: true });
    } else {
      this.setState({ active_country_filter: false });
    }

    let filter_countries = this.state.countries_in_continent_info.filter((country) => {
      return (country.name.toLowerCase().includes(value.toLowerCase()))
    });

    this.setState({ filtered_country: filter_countries });
  }

  render() {
    let countries;
    if (this.state.active_country_filter) {
      countries = (this.state.filtered_country);
    } else {
      countries = (this.state.countries_in_continent_info);
    }

    let main_continent_element = (
      <div>...Loading</div>
    );
    if (this.state.continent_info) {
      main_continent_element = (
        <MainContinent
          onChangeTab={this.props.onChangeTab}
          activeTab={this.props.activeTab}
          continentSummary={this.state.continent_info}
          countries={countries}
          onSearchCountry={this.onSearchCountry}/>
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
