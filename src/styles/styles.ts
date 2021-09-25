import styled from "styled-components";
export const Button = styled.button`
  padding: 16px 24px;
  margin: 10px 20px;
  background-color: #ff0000;
  font-size: 16px;
  border-radius: 32px;
  border: none;
  color: #ffffff;
  font-weight: 600;
  transition: background 0.5s;
  :active {
    background-color: #9900ff;
  }
`;
export const TextCount = styled.h1`
  font-size: 10em;
  padding: 0px;
  margin: 0px;
`;

export const Box = styled.div`
  margin: 0 auto;
  padding: 74px 0px;
  align-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
`;

export const Tile = styled.div`
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: ${(props) =>
    props.theme.direction ? props.theme.direction : "row"};
  box-shadow: 10px 10px 5px #ff00cc;
  text-align: left;
  align-items: center;
  background-color: rgba(55, 57, 66, 0.6);
  color: #fff;
  border-radius: 16px;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  padding: 10px 16px;
  text-align: start;
  flex-direction: column;
  align-self: center flex-start;
`;
