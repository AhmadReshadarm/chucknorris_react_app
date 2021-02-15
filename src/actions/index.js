import axios from "axios";

// Api call action
export const loadData = () => (dispatch) => {
  dispatch({ type: "LOADING" });
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((res) => dispatch({ type: "LOADED", payload: res.data.value }))
    .catch((error) => dispatch({ error: error }));
};

// Page rout action
export const showLocal = (localPage) => {
  if (!localPage) {
    return { type: "SHOW_MAIN_PAGE" };
  } else {
    return { type: "SHOW_DATA" };
  }
};

// delete selected item by user form local storage the id comes from UI
export const deleteItem = (id) => {
  const items = JSON.parse(localStorage.getItem("localData"));
  localStorage.setItem(
    "localData",
    JSON.stringify(items.filter((data) => data.Id !== id))
  );
  return {
    type: "DELETED",
    payload: JSON.parse(localStorage.getItem("localData")),
  };
};
