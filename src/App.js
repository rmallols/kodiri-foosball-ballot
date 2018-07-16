import React, { Component } from 'react';
import './App.css';
import getTeams from './teams';
import getFixtures from './fixtures';

class App extends Component {

  constructor() {
    super();
    this.state = {
      teams: getTeams(),
      fixtures: getFixtures()
    }
  }

  componentDidMount() {
    this.setState({
      teams: getTeams()
    });
  }

  render() {
    let { teams, fixtures } = this.state;
    return (
      <div className="App">
        <div>
          Teams:
          {teams.map(team => team.country).join(', ')}
        </div>
        <div>
          Fixtures:
          {fixtures.map(fixture => fixture.round).join(', ')}
        </div>
      </div>
    );
  }
}

export default App;
