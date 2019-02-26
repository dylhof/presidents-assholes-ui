import React from 'react';
import {PresidentCard} from './PresidentCard';
import {connect} from 'react-redux';

export const PresidentCardArea = ({presidents}) => {
  const jsxPresidentCards = presidents.map(president => {
    return <PresidentCard president={president}/>
  })

  return(
    <div>
      {jsxPresidentCards}
    </div>
  )
}

export const mapStateToProps = state => ({
  presidents: state.presidents
})

export default connect(mapStateToProps)(PresidentCardArea)