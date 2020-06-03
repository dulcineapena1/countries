import React, { Component } from 'react';
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <Main/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
