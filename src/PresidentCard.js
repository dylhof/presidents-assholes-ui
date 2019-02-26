import React from 'react';

export const PresidentCard = ({president}) => {
  return(
    <div>
      <h3>Number: {president.number}</h3>
      <h3>Name: {president.president}</h3>
      <p>Born: {president.birth_year}</p>
      <p>Died: {president.death_year}</p>
      <p>Took Office: {president.took_office}</p>
      <p>Left Office: {president.left_office}</p>
      <p>Party: {president.party}</p>
    </div>
  )
}
