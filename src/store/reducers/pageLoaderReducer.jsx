const initialState = {
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'LOADING_PAGE':
    return { ...state, 
      loading: payload 
    }

  default:
    return state
  }
}
