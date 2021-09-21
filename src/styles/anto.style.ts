import styled from "styled-components";
import ImgAlu from "../asset/Game_bg.png"

// background untuk percobaan template
export const BackGround = styled.div`
    padding: 2em;
    background-color : rgba(36, 39, 49, 0.94);
`;


export const Header = styled.div`
    padding: 0em;
    display:flex ;
    justify-content : space-between;
`;

// mabar image
export const MabarImg = styled.h1`
    background-position: absolute;
    padding-left: 2.87%;
    padding-right: 64.16%;
    padding-top: 124.54%;
    padding-bottom: -143.21%;
    background: linear-gradient(90deg, #D51F40 0%, #F37024 100%);
    transform: matrix(0.94, -0.34, -0.34, -0.94, 0, 0);
`;

// mabar image
export const MabarImg2 = styled.img`
    width: 80px;
    height: 24px;
`;
// mabar text
export const MabarText = styled.h1`
    background: #FFFFFF;
`; 

// lonceng 
export const Lonceng =  styled.img`
    position: absolute;
    width: 20px;
    height: 17.5px;
    background: #DDD8D8;
`;

// background untuk percobaan template
export const BackGroundImage = styled.div`
    /* width: 375px; */
    height:538px;
    background-image: url(${ImgAlu});
    background-repeat: no-repeat;
    background-size: cover;

`;

export const ImageAlu =  styled.img`
padding: 0em;
background-image: url(${ImgAlu});
background: linear-gradient(360deg, #1D1D20 9.11%, rgba(29, 29, 32, 0.941293) 17.13%, rgba(29, 29, 32, 0.888237) 25.13%, rgba(29, 29, 32, 0.71522) 32.05%, rgba(29, 29, 32, 0) 51.49%);
`;

// lonceng merah
export const LoncengMerah =  styled.h1`
    background: linear-gradient(131.42deg, #D51F40 46.48%, #E24134 62.51%, #E8542E 74.36%, #F37024 83.78%);
    box-shadow: -2px 2px 4px rgba(213, 31, 64, 0.8);
    position: absolute;
    left: 54.17%;
    right: 8.33%;
    top: 12.5%;
    bottom: 50%;
`;

