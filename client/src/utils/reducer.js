const reducer = (state, action) => {
  switch(action.type){
    case 'setLocation': {
      return {
        ...state,
        location: action.data
      }
    }
    case 'setLoading': {
      return {
        ...state,
        loading: action.data
      }
    }
    case 'setError': {
      return {
        ...state,
        error: action.data
      }
    }
    case 'setEvents': {
      return {
        ...state,
        events: action.data
      }
    }
    default: return state
  }
}

export default reducer;