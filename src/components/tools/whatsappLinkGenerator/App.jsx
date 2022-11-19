import React, { useState } from 'react';
import './styles.css';
import WhatsappLinkGenerator from './components/WhatsappLinkGenerator';
/* import CopyLink from './components/CopyLink'; */
import Info from './components/Info';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
    const [fullLink, setFullLink] = useState("")
    const OpenLink = (link) => {
        setFullLink(link)
    }

    return (
        <div>
            <div className='whatsapp-tool-cont'>
                <WhatsappLinkGenerator /* OpenLink={OpenLink} */ />
                <Info />
            </div>
            {/* <div className='whatsapp-tool-cont2'>
                { <CopyLink link={fullLink} /> }
                <div className="maquetadoHidden"><div className='info-cont'></div></div>

            </div> */}
            <ToastContainer />
        </div>
    );
};

export default App;