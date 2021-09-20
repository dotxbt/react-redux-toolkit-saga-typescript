import styled from "styled-components";
interface Props {
    direction: string,
    alignItems: string,
}
export const ItemLayout = styled.div<Props>`
    padding: 10px 16px;
    margin: 16px;
    display: flex;
    flex-direction: ${p => p.direction?? "row"};
    align-items: ${p => p.alignItems?? "center" };
    background-color: rgba(55, 57, 66, 0.6);
    color: #FFF;
    border-radius: 16px;
    text-align: left;
    align-items: center;
`