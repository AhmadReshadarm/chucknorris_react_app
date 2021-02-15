import React from "react";
import ApiCall from "./component/ApiCall";
import LocalData from "./component/LocalData";
import { useSelector, useDispatch } from "react-redux";
import { showLocal } from "./actions";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

function App() {
  const showLocalData = useSelector((state) => state.showLocal);
  const dispatch = useDispatch();

  return (
    <>
      <CSSTransition
        in={!showLocalData}
        timeout={500}
        unmountOnExit
        classNames="page-primary"
      >
        <Wrapper id="wrapper">
          <AlertAndWellcom id="alertWrapper">
            <ChuckImg src="./norissFavicon.png" alt="Chuck Noriss icon" />
            <AlertWellcomTxt id="alert">
              Wellcom to Chuck Noriss bad jokes page
            </AlertWellcomTxt>
          </AlertAndWellcom>
          <ApiCall />
          <Btn onClick={() => dispatch(showLocal(true))}>Show favorites</Btn>
        </Wrapper>
      </CSSTransition>
      <CSSTransition
        in={showLocalData}
        timeout={500}
        unmountOnExit
        classNames="page-secondary"
      >
        <LocalWrapper>
          <LocalData />
          <Btn onClick={() => dispatch(showLocal(false))}>Go back</Btn>
        </LocalWrapper>
      </CSSTransition>
    </>
  );
}

// styling

const LocalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-items: center;
  gap: 40px;
  padding-top: 80px;
  padding-bottom: 60px;
`;

const AlertAndWellcom = styled.div`
  width: 50%;
  height: 80px;
  border-radius: 10px;
  border: 1px solid #00adb5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  place-items: center;
  gap: 10px;
  box-shadow: 2px 2px 5px 3px #e8eaed;
  transition: 200ms;
`;

const AlertWellcomTxt = styled.p`
  font-size: 1.25rem;
`;

const ChuckImg = styled.img`
  width: 50px;
  height: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 30px;
`;

const Btn = styled.button`
  color: #00adb5;
  font-size: 1.5rem;
  padding: 10px 20px;
  &:hover {
    color: #ea4c89;
  }
`;

export default App;
