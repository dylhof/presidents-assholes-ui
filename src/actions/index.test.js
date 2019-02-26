import { setLoading, setError, setPresidents } from './index';

describe('actions', () => {
  it('should have a type of SET_LOADING and an isLoading bool', () => {
    //setup
    const expectedAction = {
      type: 'SET_LOADING',
      isLoading: true
    }
    //execution
    const result = setLoading(true)
    //expectation
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_ERROR and an error message', () => {
    //setup
    const mockError = 'No presidents currently found'
    const expectedAction = {
      type: 'SET_ERROR',
      error: mockError
    };
    //execution
    const result = setError(mockError);
    //expectation
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_PRESIDENTS and an array of presidents', () => {
    //setup
    const mockPresidents = [{name: 'Licoln Logs'}]
    const expectedAction = {
      type: 'SET_PRESIDENTS',
      presidents: mockPresidents
    }
    //execution
    const result = setPresidents(mockPresidents)
    //expectation
    expect(result).toEqual(expectedAction)
  })
})