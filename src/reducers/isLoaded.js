const intialState = {
  data: "data",
  isLoaded: false,
  error: null,
};

const loadedReducer = (state = intialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoaded: false };
    case "LOADED":
      return {
        ...state,
        data: action.payload,
        isLoaded: true,
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default loadedReducer;
