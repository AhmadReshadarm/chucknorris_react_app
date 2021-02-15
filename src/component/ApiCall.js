import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTofavorite } from "../actions/Addtofavorite";
import { loadData } from "../actions";
import styled, { keyframes } from "styled-components";
let errorLimit = false;
let oneTime = true;
const ApiCall = () => {
  //
  //
  //
  //
  //
  let ApiData = useSelector((state) => state.Loaded);
  let addedToLocal = useSelector((state) => state.faved);
  const dispatch = useDispatch();

  if (oneTime) {
    dispatch(loadData());
    oneTime = false;
  }

  // Call Api every 5 sec
  useEffect(() => {
    const intervalId = setInterval(() => {
      return dispatch(loadData());
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  //
  //
  //
  // show alert if maximum or data exist and remove it after 1 sec
  const alertWrapperEl = document.getElementById("alertWrapper");
  const alertEl = document.getElementById("alert");
  if (addedToLocal.error && !errorLimit) {
    // -----------
    errorLimit = true;
    alertEl.innerText = addedToLocal.error;
    alertEl.style.color = "#ea4c89";
    alertWrapperEl.style.border = "1px solid #ea4c89";
    // ----------
    setTimeout(() => {
      alertEl.innerText = "Wellcom to Chuck Noriss bad jokes page";
      alertWrapperEl.style.border = "1px solid #00adb5";
      alertEl.style.color = "";
      errorLimit = false;
    }, 2000);
  }
  //
  //
  //
  //  new add alert
  if (addedToLocal.data) {
    alertEl.innerText = addedToLocal.data;
    alertEl.style.color = "#ea4c89";
    alertWrapperEl.style.border = "1px solid #ea4c89";
    setTimeout(() => {
      alertEl.innerText = "Wellcom to Chuck Noriss bad jokes page";
      alertWrapperEl.style.border = "1px solid #00adb5";
      alertEl.style.color = "";
      errorLimit = false;
    }, 2000);
  }

  //
  //
  //
  // render condetion
  if (ApiData.error) {
    return <div>Error: {ApiData.error.message}</div>;
  } else if (!ApiData.isLoaded) {
    return (
      <LoadingWrapperCard>
        <LoadingWrraper>
          <LoadingCard>
            <LoadingInner></LoadingInner>
          </LoadingCard>
          <LoadingCard>
            <LoadingInner></LoadingInner>
          </LoadingCard>
          <LoadingCard>
            <LoadingInner></LoadingInner>
          </LoadingCard>
        </LoadingWrraper>
      </LoadingWrapperCard>
    );
  } else {
    return (
      <CardWrapper>
        <ContentWrraper>
          <Content id="userData">{ApiData.data}</Content>
        </ContentWrraper>
        <ButtonSaperator>
          <Button onClick={() => dispatch(addTofavorite())}>
            <Heart
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              role="img"
              width="24"
              heigth="24"
              className="fav-icon"
            >
              <path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path>
            </Heart>
          </Button>
        </ButtonSaperator>
      </CardWrapper>
    );
  }
};

//
//
//
// styling

// Animations
const NextLoadAnimation = keyframes`
  0%{
    box-shadow: inset 0 0 0 0 rgba(225,225,225,0.3) ,2px 2px 5px 3px #e8eaed;
  }
  100%{
    box-shadow: inset 650px 0 0 0 rgba(225,225,225,0.3),2px 2px 5px 3px #e8eaed;
  }
`;

const LoadAnimation = keyframes`
  0% {
    left: -1px;
    width:80px;
    opacity:.2;
  }
  50%{
    opacity:1;
  }
  100% {
    left: 94%;
    width:40px;
    opacity: .1;
  }
`;

// Wrappers

const CardWrapper = styled.div`
  width: 50%;
  height: 50vh;
  border-radius: 10px;
  border: 1px solid #00adb5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  place-items: center;
  box-shadow: 2px 2px 5px 3px #e8eaed;
  animation: ${NextLoadAnimation} 5s infinite ease-in;
  backdrop-filter: blur(40px);
`;

const LoadingWrapperCard = styled.div`
  width: 50%;
  height: 50vh;
  border-radius: 10px;
  border: 1px solid #00adb5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  place-items: center;
  box-shadow: 2px 2px 5px 3px #e8eaed;
`;

const LoadingWrraper = styled.div`
  width: 90%;
`;

const LoadingInner = styled.div`
  width: 80px;
  height: 15px;
  background: rgba(225, 225, 225, 0.4);
  border-radius: 2px;
  animation: ${LoadAnimation} 0.9s infinite ease-in-out;
  position: absolute;
  backdrop-filter: blur(40px);
`;

const LoadingCard = styled.div`
  width: 100%;
  height: 15px;
  box-shadow: 0 3px 3px 3px rgba(225, 225, 225, 0.6);
  position: relative;
  margin: 30px 0 30px 0;
  opacity: 0.9;
`;

const ContentWrraper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
`;

const ButtonSaperator = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  place-items: center;
  padding-bottom: 15px;
`;

// contents

const Button = styled.button`
  border-radius: 50%;
  padding: 5px;
  display: flex;
  justify-content: center;
  place-items: center;
  background: transparent;
  outline: none;
  border: 1px solid #00adb5;
  transition: border 200ms;
  &:hover {
    border: 1px solid #ea4c89;
    .fav-icon {
      fill: #ea4c89;
    }
  }
`;

const Heart = styled.svg`
  fill: #00adb5;
  transition: fill 200ms;
`;

const Content = styled.p`
  font-size: 1.25rem;
`;

export default ApiCall;

// // experment ---------------------------------------------

// const callApi = () => {
//   const intervalID = setInterval(() => {
//     return dispatch(loadData());
//   }, 3000);
//   return () => clearInterval(intervalID);
// };
// callApi();
//--------------------------------------------------------------
