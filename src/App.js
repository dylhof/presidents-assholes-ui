import React, { Component } from 'react';
import './App.css';
import {fetchPresidents} from './fetchPresidentsThunk';

class App extends Component {
  componentDidMount() {
    fetchPresidents('http://localhost:3001/api/v1/presidents')
  }
  
  render() {
    return (
      <div className="App">
        hello i'm still working
      </div>
    );
  }
}

export default App;
