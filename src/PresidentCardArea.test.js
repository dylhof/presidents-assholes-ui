import React from 'react';
import {PresidentCardArea, mapStateToProps } from './PresidentCardArea';

describe('PresidentCardArea', () => {
  describe('mapStateToProps', () => {
    it('should return an object with presidents', () => {
      //setup
      const mockState = {
        isLoading: true,
        presidents: [{name: 'Big ol Garfield'}]
      }
      const expected = {
        presidents: [{name: 'Big ol Garfield'}]
      }
      //execution
      const result = mapStateToProps(mockState)
      //expectation
      expect(result).toEqual(expected)
    })
  })
})