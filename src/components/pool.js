import idk from "../assets/png/idk.png"
import idk_mb from "../assets/png/idk_mb.png"
import intro from "../assets/png/bg_intro.png"
import intro_mb from "../assets/png/bg_intro_mb.png"
import mint from "../assets/png/bg_mint.gif"
import mint_mb from "../assets/png/bg_mint_mb.gif"

import { isMobile } from "react-device-detect"


export default function Pool() {

    

    const bg = isMobile ? idk_mb : idk;
    const bg2 = isMobile ? intro_mb : intro;
    const bg3 = isMobile ? mint_mb : mint;


    return(
        <div>
            <img src={bg} style={{width: "100vw"}}/>
            <img src={bg2} style={{width: "100vw", height: "80%"}}/>
            <img src={bg3} style={{width: "100vw"}}/>

        </div> 
    )
}