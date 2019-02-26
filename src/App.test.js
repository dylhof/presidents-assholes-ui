import React from 'react';
import ReactDOM from 'react-dom';
import {App, mapDispatchToProps, mapStateToProps} from './App';
import { fetchPresidents } from './fetchPresidentsThunk';

jest.mock('./fetchPresidentsThunk')
fetchPresidents.mockReturnValue([{name: 'president'}])

describe('App', () => {
  describe('mapDispatchToProps', () => {
    it('should call dispatch with the fetchPresidents Thunk', () => {
      //setup
      const mockDispatch = jest.fn()
      const actionToDispatch = fetchPresidents('url')
      //execution
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchPresidents('url')
      //expectation
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with isLoading and an error', () => {
      //setup
      const mockState = {
        isLoading: false,
        error: 'Oh NO! There are no presidents',
        presidents: [{name: 'Gerry Ford'}]
      }
      const expected = {
        isLoading: false,
        error: 'Oh NO! There are no presidents'
      }
      //execution
      const result = mapStateToProps(mockState)
      //expectation
      expect(result).toEqual(expected)
    })
  })
  
})
