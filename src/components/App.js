import React, { Component } from 'react';
import '../styles/App.css';
import Earthquakes from './EarthquakeList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">Earthquakes!</div>
          </div>
          <h2>Welcome to React</h2>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="earthquake-title">
          <p> This is a list of 8 Earthquakes occurring on the morning of July 14th across the United States.
          </p>
        </div>
        <Earthquakes/>
      </div>
    );
  }
}

export default App;
