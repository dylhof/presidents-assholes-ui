import { setLoading, setPresidents, setError } from './actions';

export const fetchPresidents = (url) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(setLoading(false))
      const data = await response.json()
      dispatch(setPresidents(data))
    } catch(error) {
      dispatch(setError('Whitehouse down'))
    }
  }
}