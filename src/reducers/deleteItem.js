const deleteReducer = (state = "", action) => {
  switch (action.type) {
    case "DELETED":
      return action.payload;

    default:
      return JSON.parse(localStorage.getItem("localData"));
  }
};

export default deleteReducer;
