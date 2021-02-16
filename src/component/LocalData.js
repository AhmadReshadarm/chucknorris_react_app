import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../actions";
import styled from "styled-components";

function Localdataitems() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  if (!items || items.length < 1) {
    return (
      <div>
        <h1>You don't have any favorites</h1>
      </div>
    );
  } else {
    return (
      <Itemswrapper>
        {items.map((item, index) => (
          <Card key={item.Id}>
            <Content className="item">
              {index + 1}. {item.data}
            </Content>
            <DeleteBtn onClick={() => dispatch(deleteItem(item.Id))}>
              <TrashCan
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 844.3 885.48"
                width="30"
                height="30"
                className="trash-can"
              >
                <path
                  id="bca7d782-7e31-494e-97b0-f49b8df7894d"
                  d="M666.1,1005.47H207l-.09-2.58L185,376H688.11Zm-453.94-5.34H661l21.64-618.85H190.52Z"
                  transform="translate(-172.06 -102.74)"
                />
                <g id="e7d5632f-8461-4dcf-9cd9-df8e3f64d5e2">
                  <rect
                    id="ad932c98-7027-4b28-8e73-a76d8a4136e0"
                    x="109.55"
                    y="389.37"
                    width="34.92"
                    height="432.12"
                  />
                  <rect
                    id="ae1e5d8b-7977-4a56-a24c-fbb057f76b38"
                    x="247.04"
                    y="389.37"
                    width="34.92"
                    height="432.12"
                  />
                  <rect
                    id="bffa0855-fc38-45cc-9e39-6daa1d3e4103"
                    x="384.53"
                    y="389.37"
                    width="34.92"
                    height="432.12"
                  />
                </g>
                <path
                  d="M979.84,560.05l-2.25-1.42L407.33,198.26,456.8,120l2.25,1.43L1029.3,481.78ZM414.69,196.6,978.18,552.69,1022,483.44,458.46,127.34Z"
                  transform="translate(-172.06 -102.74)"
                />
                <path
                  id="b31113e7-cae2-4653-b248-af5e4acb0a6c"
                  d="M842.16,169.21A102.53,102.53,0,0,0,685.89,270.7l27.19,17.18a80.9,80.9,0,1,1,77.26,48.84l27.19,17.19a102.53,102.53,0,0,0,24.65-184.7Z"
                  transform="translate(-172.06 -102.74)"
                />
              </TrashCan>
            </DeleteBtn>
          </Card>
        ))}
      </Itemswrapper>
    );
  }
}

const Itemswrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  row-gap: 2rem;
  column-gap: 2rem;
  padding-bottom: 20px;
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  width: 350px;
  height: 250px;
  border: 1px solid #00adb5;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 3px #e8eaed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: flex-start;
  &:hover {
    box-shadow: 3px 3px 3px 4px #e8eaed;
  }
`;

const Content = styled.p`
  font-size: 1.125rem;
  flex-basis: 65%;
  width: 100%;
  padding: 5px 10px;
`;

const DeleteBtn = styled.button`
  border: 1px solid #00adb5;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  place-items: center;
  place-self: flex-end;
  margin-right: 25px;
  &:hover {
    box-shadow: 0 0 2px 2px #e8eaed, inset 0 0 1px 1px #e8eaed;
    border-color: #ea4c89;
    .trash-can {
      fill: #ea4c89;
    }
  }
`;

const TrashCan = styled.svg`
  fill: #00adb5;
`;

export default Localdataitems;
