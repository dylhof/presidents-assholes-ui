import * as actions from './actions';

export const fetchPresidents = (url) => {
  return async (dispatch) => {
    try {
      dispatch(actions.setLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(actions.setLoading(false))
      const data = await response.json()
      console.log(data)
      dispatch(actions.setPresidents(data))
    } catch(error) {
      dispatch(actions.setError('Whitehouse down'))
    }
  }
}