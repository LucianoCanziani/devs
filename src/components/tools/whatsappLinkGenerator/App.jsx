import React from 'react';
import './styles.css';
import  WhatsappLinkGenerator  from './components/WhatsappLinkGenerator';
import Info  from './components/Info';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {

    return (
        <div>
            <div className='whatsapp-tool-cont'>
                <WhatsappLinkGenerator />
                <Info />
            </div>
            <ToastContainer />
        </div>
    );
};

export default App;