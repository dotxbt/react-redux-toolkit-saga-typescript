import styled from "styled-components";
interface Props {
  direction: string;
  alignItems: string;
}
export const ItemLayout = styled.div<Props>`
  padding: 8px 16px;
  margin: 20px 16px;
  display: flex;
  flex-direction: ${(p) => p.direction ?? "row"};
  align-items: ${(p) => p.alignItems ?? "center"};
  background-color: rgba(22,22,22,0.8);
  color: #fff;
  border-radius: 16px;
  text-align: left;
  align-items: center;
`;
