import { BackGround, BackGroundImage, Header, ImageAlu, Lonceng, MabarImg2 } from "../styles/anto.style";
import Logo from "../asset/Logo.png"
import Loncenggg from "../asset/londde.png"
import ImgAlu from "../asset/Game_bg.png"



const HomePages =()=>{
    return (
        <>
        <BackGround>
            <Header>
                {/* <MabarImg2 src={Logo}/> */}
                <div> <MabarImg2 src={Logo}/></div>
                <div> <Lonceng src={Loncenggg}/> </div>
            </Header>           
        </BackGround>
        <BackGroundImage>
        {/* <ImageAlu/> */}
        </BackGroundImage>
        </>    
    );
}
export default HomePages;