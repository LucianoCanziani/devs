import React from 'react';
import './styles.css';
import { WhatsappLinkGenerator } from './components/WhatsappLinkGenerator.jsx';
import { Info } from './components/Info.jsx';
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