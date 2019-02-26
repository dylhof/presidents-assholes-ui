import { setLoading, setPresidents, setError } from './actions';

export const fetchPresidents = (url) => {
  return async (dispatch) => {
    try {
      console.log('into the try block')
      dispatch(setLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(setLoading(false))
      const data = await response.json()
      console.log(data)
      dispatch(setPresidents(data))
    } catch(error) {
      dispatch(setError('Whitehouse down'))
    }
  }
}