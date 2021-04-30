import React, { Component } from 'react';
import axios from 'axios';
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
      () => this.requestCountries());
  }

  requestCountries = () => {
    let countries_query = `{ countries(filter: { currency: { regex:"^(${this.state.countries_initials})" } })
      { name emoji native continent { name } } }`;

    axios.post('https://countries.trevorblades.com/', {
      query: countries_query
    })
      .then(res => this.setState({ countries_info: res.data.data.countries }));
  }


  render() {
    let random_list_element = (
      <div>...Loading</div>
    );
    if (this.state.countries_info) {
      random_list_element = (
        <RandomList countries={this.state.countries_info} onClickContinent={this.props.onClickContinent}/>
      );
    }

    return (
      <React.Fragment>
        {random_list_element}
      </React.Fragment>
    );
  }
}

export default RandomContainer;
