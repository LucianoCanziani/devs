import React from 'react';
import './styles.css';
import WhatsappLinkGenerator from './components/WhatsappLinkGenerator.jsx';
/* import Info from './components/Info.jsx'; */
import GeneratorTutorial from './components/GeneratorTutorial.jsx';
import ShortAndLong from './components/ShortAndLong.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

    return (
        <main>
            <NavBar />
            <div className='whatsapp-tool-cont'>
                <WhatsappLinkGenerator />
                <div style={{ width: "100%" }}>
                    <div className='info-cont'>
                        <h1>WhatsApp Link Generator</h1>
                        <h2>Create Custom Messages</h2>
                        <p>Are you looking to generate a <mark>WhatsApp</mark> link with a personalized message?</p>
                        <p>By just typing your phone number you can get a link that will lead your customers directly to your <mark>WhatsApp</mark> chat. You can also add a custom message to break the ice.</p>
                        <ul className='message-item-cont'>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0ab819" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                                <span>From click to chat</span>
                            </li>
                            <li className='message-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1a202a" className="bi bi-chat-dots" viewBox="0 0 16 16">
                                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>
                                <span>Custom messages</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <Info /> */}
            </div>
            <GeneratorTutorial />
            <ShortAndLong />
            <Footer />
            <ToastContainer />
        </main>
    );
};

export default App;