export const setLoading = isLoading => ({
  type: 'SET_LOADING',
  isLoading
})

export const setError = error => ({
  type: 'SET_ERROR',
  error
})

export const setPresidents = presidents => ({
  type: 'SET_PRESIDENTS',
  presidents
})

export const setPartyFilter = party => ({
  type: 'SET_PARTY_FILTER',
  party
})