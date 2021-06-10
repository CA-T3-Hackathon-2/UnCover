const formReducer = (state, action) => {
  switch(action.type){
    case 'setCategory': {
      return {
        ...state,
        category: action.data
      }
    }
    case 'setDateFrom': {
      return {
        ...state,
        dateFrom: action.data
      }
    }
    case 'setDateTo': {
      return {
        ...state,
        dateTo: action.data
      }
    }
    case 'setLocationDistance': {
      return {
        ...state,
        locationDistance: action.data
      }
    }
    case 'setPrice': {
      return {
        ...state,
        price: action.data
      }
    }
    default: return state
  }
}

export default formReducer;