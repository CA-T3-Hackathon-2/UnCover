const reducer = (state, action) => {
  switch (action.type) {
    case "setLocation": {
      return {
        ...state,
        location: action.data,
      };
    }
    case "setLoading": {
      return {
        ...state,
        loading: action.data,
      };
    }
    case "setError": {
      return {
        ...state,
        error: action.data,
      };
    }
    case "setEvents": {
      return {
        ...state,
        events: action.data,
      };
    }
    case "setCategory": {
      return {
        ...state,
        category: action.data,
      };
    }
    case "setDateFrom": {
      return {
        ...state,
        dateFrom: action.data,
      };
    }
    case "setDateTo": {
      return {
        ...state,
        dateTo: action.data,
      };
    }
    case "setLocationDistance": {
      return {
        ...state,
        locationDistance: action.data,
      };
    }
    case "setPrice": {
      return {
        ...state,
        price: action.data,
      };
    }
    case "setHamburgerOpen": {
      return {
        ...state,
        hamburgerOpen: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
