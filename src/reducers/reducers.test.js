import { loadingReducer, errorReducer, presidentsReducer } from './reducers';

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = false;
    //execution
    const result = loadingReducer(undefined, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should return the set Loading', () => {
    //setup
    const expected = true;
    const mockAction = {type: 'SET_LOADING', isLoading: true};
    //execution
    const result = loadingReducer(undefined, mockAction);
    //expectation
    expect(result).toEqual(expected);
  })
})

describe('errorReducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = '';
    //execution
    const result = errorReducer(undefined, {});
    //expectation
    expect(result).toEqual(expected);
  })

  it('should set the error', () => {
    //setup
    const expected = 'Whitehouse Down';
    const mockAction = {type: 'SET_ERROR', error: 'Whitehouse Down'};
    //execution
    const result = errorReducer(undefined, mockAction);
    //expectation
    expect(result).toEqual(expected);
  })
})

describe('presidentsReducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = []
    //execution
    const result = presidentsReducer(undefined, {})
    //expectation
    expect(result).toEqual(expected)
  });

  it('should set the array of presidents', () => {
    //setup
    const mockPresidents = [{number: 1, name: 'Georgy Boy'}]
    const mockAction = {type: 'SET_PRESIDENTS', presidents: mockPresidents}
    //execution
    const result = presidentsReducer(undefined, mockAction)
    //expectation
    expect(result).toEqual(mockPresidents)
  })
})