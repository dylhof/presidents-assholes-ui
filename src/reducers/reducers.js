export const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case 'SET_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const errorReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_ERROR':
      return action.error;
    default:
      return state;
  }
}

export const presidentsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_PRESIDENTS':
      return action.presidents;
    default:
      return state;
  }
}