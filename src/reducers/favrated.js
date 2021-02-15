const intialState = {
  data: "",
  error: null,
};

const favReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO":
      return {
        ...state,
        data: action.payload,
      };
    case "REMOVE_NEW_ADD_ALERT":
      return { ...state, data: action.payload };
    case "ADD_ALERT_MAX":
      return {
        ...state,
        error: action.error,
      };
    case "ADD_ALERT_EXIST":
      return {
        ...state,
        error: action.error,
      };
    case "REMOVE_ALERT_MAX":
      return { ...state, error: null };
    case "REMOVE_ALERT_EXIST":
      return { ...state, error: null };
    default:
      return { ...state };
  }
};

export default favReducer;
