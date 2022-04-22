
import discord from "../assets/jpg/discord.png"
import medium from "../assets/jpg/medium.png"
import twitter from "../assets/jpg/twitter.png"
import { isMobile } from "react-device-detect"

function Socials() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return(
        [(isMobile ?
            <div style={{
                display: 'flex', 
                flexDirection: 'row',
                textAlign: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '75px',
            }} key="1">
                <img onClick = {() => openInNewTab('https://discord.gg/eEjpdKCfMb')}
                    alt="discord" src={discord} style={{ margin: 'auto', height: '45%' }} />
                <img  onClick = {() => openInNewTab('https://jpegd.io/')}
                    alt="medium" src={medium} style={{ margin: 'auto', height: '45%' }} />
                <img onClick = {() => openInNewTab('https://twitter.com/wagmisaurs')}
                    alt="twitter" src={twitter} style={{ margin: 'auto', height: '45%' }} />
            </div>
        :
        <div style={{
            display: 'flex', 
            flexDirection: 'row',
            textAlign: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '175px',
        }} key="2">
            <img onClick = {() => openInNewTab('https://discord.gg/eEjpdKCfMb')}
                    alt="discord" src={discord} style={{ cursor: 'pointer', margin: 'auto', height: '45%' }} />
                <img  onClick = {() => openInNewTab('https://jpegd.io/')}
                    alt="medium" src={medium} style={{ cursor: 'pointer', margin: 'auto', height: '45%' }} />
                <img onClick = {() => openInNewTab('https://twitter.com/wagmisaurs')}
                    alt="twitter" src={twitter} style={{ cursor: 'pointer', margin: 'auto', height: '45%' }} />
        </div>
        )]
    )
}

export default Socials
