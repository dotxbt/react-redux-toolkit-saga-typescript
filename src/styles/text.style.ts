import styled from "styled-components";
interface Props {
    size?: string,
    padding?: string,
    margin?: string,
}
export const TextTitle = styled.p<Props>`
    font-size: ${p => p.size ?? "24px"};
    margin: ${p => p.margin ?? "0px"};
    padding: ${p => p.padding ?? "0px"};
`