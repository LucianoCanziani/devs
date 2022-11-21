import React from 'react';
import './styles.css';
import WhatsappLinkGenerator from './components/WhatsappLinkGenerator.jsx';
import Info from './components/Info.jsx';
/* import FrequentQuestions from './components/FrequentQuestions.jsx'; */
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

    return (
        <div>
            <NavBar />
            <div className='whatsapp-tool-cont'>
                <WhatsappLinkGenerator />
                <Info />
            </div>
           {/*  <FrequentQuestions /> */}
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default App;