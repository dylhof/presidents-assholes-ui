import React, {Component } from 'react';
import {PresidentCard} from './PresidentCard';
import {connect} from 'react-redux';

export class PresidentCardArea ({presidents, party}) => {
  if (party) {
    const partyPresidents = presidents.filter(president => president.party == party)
    const jsxPresidentCards = partyPresidents.map(president => {
      return <PresidentCard key={president.number} president={president}/>
    })
    return jsxPresidentCards
  } else {
    const jsxPresidentCards = presidents.map(president => {
      return <PresidentCard key={president.number} president={president}/>
    })
    return jsxPresidentCards
  }

  return(
    <div className='card-area'>
      {jsxPresidentCards}
    </div>
  )
}

export const mapStateToProps = state => ({
  presidents: state.presidents,
  party: state.party
})

export default connect(mapStateToProps)(PresidentCardArea)