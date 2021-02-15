import { v4 as uuidv4 } from "uuid";

// add to local favorite
export const addTofavorite = () => {
  let userData = document.getElementById("userData").innerText;
  let dataExist = localStorage.getItem("localData");
  const localData = [].concat(JSON.parse(localStorage.getItem("localData")));
  let exist = false;
  let counter = 0;

  // Check for local files otherwise create it
  if (!dataExist) {
    localStorage.setItem(
      "localData",
      JSON.stringify([{ Id: uuidv4(), data: userData }])
    );
    return (newAdd) => {
      newAdd({ type: "ADD_TO", payload: "Added to your favorites" });
      setTimeout(
        () => newAdd({ type: "REMOVE_NEW_ADD_ALERT", payload: null }),
        100
      );
    };
  }

  // check if user data already exist
  function matchUserData() {
    if (counter < localData.length) {
      if (userData.indexOf(localData[counter].data) === -1) {
        exist = false;
        counter += 1;
        matchUserData();
      } else {
        exist = true;
      }
    } else {
      exist = false;
    }
  }
  matchUserData();

  // add new user data to local storage or show alert by existenc of data
  if (!exist) {
    if (localData.length < 10) {
      const addToLocal = [].concat(localData);
      addToLocal.push({ Id: uuidv4(), data: userData });
      localStorage.setItem("localData", JSON.stringify(addToLocal));
      exist = false;
      return (newAdd) => {
        newAdd({ type: "ADD_TO", payload: "Added to your favorites" });
        setTimeout(
          () => newAdd({ type: "REMOVE_NEW_ADD_ALERT", payload: null }),
          100
        );
      };
    } else {
      return (error) => {
        error({
          type: "ADD_ALERT_MAX",
          error: "You have reached the maximam amount of the favorite jokes",
        });
        setTimeout(() => error({ type: "REMOVE_ALERT_MAX", error: null }), 100);
      };
    }
  } else {
    return (error) => {
      error({
        type: "ADD_ALERT_EXIST",
        error: "Already added to your favorites!",
      });
      setTimeout(() => error({ type: "REMOVE_ALERT_EXIST", error: null }), 100);
    };
  }
};
