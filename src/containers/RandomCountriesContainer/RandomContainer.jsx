import React, { Component } from 'react';
import RandomList from '../../components/RandomCountries/RandomList';

class RandomContainer extends Component {
  state = {
    countries_initials: 'A|B',
    countries_info: null,
  };

  componentDidMount = () => {
    let randomInitials = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + '|' +
      String.fromCharCode(65 + Math.floor(Math.random() * 26));

    this.setState({ countries_initials: randomInitials },
      () => { this.requestCountries(); });
  }

  requestCountries = () => {
    let countries_query = `{ countries(filter: { currency: {regex:"^(${this.state.countries_initials})" } })` +
      `{ name emoji native continent { name } } }`;

    fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ query: countries_query })
    })
      .then(res => res.json())
      .then(res => this.setState({ countries_info: res.data.countries }));
  }


  render() {
    let random_list_element = (
      // Show loader
      <div>...Loading</div>
    );
    if (this.state.countries_info) {
      random_list_element = (<RandomList countries={this.state.countries_info}/>);
    }

    return (
      <React.Fragment>
        {random_list_element}
      </React.Fragment>
    );
  }
}

export default RandomContainer;
