import React, { Component } from 'react';
import './App.css';
import {fetchPresidents} from './fetchPresidentsThunk';
import { connect } from 'react-redux';
import PresidentCardArea from './PresidentCardArea';
import {setPartyFilter} from './actions'

export class App extends Component {
  componentDidMount() {
    this.props.fetchPresidents('http://localhost:3001/api/v1/presidents')
  }
  
  filterByParty = (event) => {
    this.props.setPartyFilter(event.target.value)
  }
  render() {
    return (
      <div className="App">
        <h1 className='main-title'>Presidents of the United States of America || A List of Assholes</h1>
        <select onChange={this.filterByParty}>
          <option>No Party</option>
          <option>Federalist</option>
          <option>Democratic-Republican</option>
          <option>Whig</option>
          <option>Democratic</option>
          <option>Republican</option>
        </select>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoading ? <div>Loading...</div> : <PresidentCardArea />}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  fetchPresidents: url => dispatch(fetchPresidents(url)),
  setPartyFilter: party => dispatch(setPartyFilter(party))
})

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
