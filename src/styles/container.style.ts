import styled from "styled-components";

export const DeviceContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  flex-grow: 1;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
  background-image: linear-gradient(
    to bottom right,
    #110022,
    #100021,
    #000011
  );
`;
