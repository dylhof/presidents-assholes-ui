import React, { Component } from 'react';
import './App.css';
import {fetchPresidents} from './fetchPresidentsThunk';
import { connect } from 'react-redux';
import PresidentCardArea from './PresidentCardArea';

class App extends Component {
  componentDidMount() {
    this.props.fetchPresidents('http://localhost:3001/api/v1/presidents')
  }
  
  render() {
    return (
      <div className="App">
        <h1>Presidents of the United States of America || A List of Assholes</h1>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoading ? <div>Loading...</div> : <PresidentCardArea />}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  fetchPresidents: url => dispatch(fetchPresidents(url))
})

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
