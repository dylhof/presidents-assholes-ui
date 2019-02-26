import React from 'react';

export const PresidentCard = ({president}) => {
  return(
    <div className='card'>
      <h3 className='cardText'>Number: {president.number}</h3>
      <h3 className='cardText'>Name: {president.president}</h3>
      <p className='cardText'>Born: {president.birth_year}</p>
      <p className='cardText'>Died: {president.death_year}</p>
      <p className='cardText'>Took Office: {president.took_office}</p>
      <p className='cardText'>Left Office: {president.left_office}</p>
      <p className='cardText'>Party: {president.party}</p>
    </div>
  )
}
