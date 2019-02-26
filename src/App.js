import React, { Component } from 'react';
import './App.css';
import {fetchPresidents} from './fetchPresidentsThunk';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchPresidents('http://localhost:3001/api/v1/presidents')
  }
  
  render() {
    return (
      <div className="App">
        hello i'm still working
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  fetchPresidents: url => dispatch(fetchPresidents(url))
})

export default connect(null, mapDispatchToProps)(App);
