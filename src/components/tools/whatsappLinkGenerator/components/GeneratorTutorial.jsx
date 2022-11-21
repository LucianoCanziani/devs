import React from 'react';

const GeneratorTutorial = () => {

    return (
        <div className='section-wsp-cont'>
            <h2 className='body-subtitle'>Generator Tutorial</h2>
            <div className='media-cont'>
                <iframe
                    /* width="560" height="315" */
                    width="560" height="315"
                    src="https://www.youtube.com/embed/HIlm4MBFCWU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
            <div className='text-cont'>
                <p>How Does Whatsapp Link Generator Work?</p>
                <p>You just have to select your country code, area code, and your full phone number. Remember to just add numbers in the phone input.</p>
                <p>The message input is optional, but you can add a predefined text that your customers will see when they contact you.</p>
                <p>We support all the letters A-Z, special characters like "@", and all the Whatsapp emojis.</p>
            </div>

        </div>
    );
};

export default GeneratorTutorial;