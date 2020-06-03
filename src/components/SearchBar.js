import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // TODO: Add callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segement">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              // onChange={event => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
