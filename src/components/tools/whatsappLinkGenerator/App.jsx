import React from 'react';
import './styles.css';
import WhatsappLinkGenerator from './components/WhatsappLinkGenerator.jsx';
import Info from './components/Info.jsx';
import GeneratorTutorial from './components/GeneratorTutorial.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

    return (
        <main>
            <NavBar />
            <div className='whatsapp-tool-cont'>
                <WhatsappLinkGenerator />
                <Info />
            </div>
             <GeneratorTutorial /> 
            <Footer />
            <ToastContainer />
        </main>
    );
};

export default App;