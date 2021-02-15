export const showLocal = (state = false, action) => {
  switch (action.type) {
    case "SHOW_DATA":
      return true;
    case "SHOW_MAIN_PAGE":
      return false;
    default:
      return state;
  }
};

export default showLocal;
