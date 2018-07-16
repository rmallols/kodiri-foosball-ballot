import React, { Component } from 'react';
import './App.css';
import getTeams from './teams';

class App extends Component {

  constructor() {
    super();
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    this.setState({ teams: getTeams() });
  }

  render() {
    return (
      <div className="App">
        Number of teams: {this.state.teams.length}
      </div>
    );
  }
}

export default App;
