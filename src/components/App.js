import React, { Component } from 'react';
import SearchBar from './SearchBar';
import KEY from '../config';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
