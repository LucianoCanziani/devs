import React from 'react';

const ShortAndLong = () => {

    return (
        <div className='section-wsp-cont2'>
            <h2 className='body-subtitle2'>Want a Shorter Link?</h2>
            <div className='media-cont'>
                <img className='bitly-img' src='/assets/bitly short url.webp' alt='Bitly short url' />
            </div>
            <div className='text-cont'>
                <p>You just created you first Whatsapp link message using our awesome tool but is to loooong and unesthetic?</p>
                <p>We are currenty working in a way to shortner our Whatsapp links.</p>
                <p>But don't worry! For now you can use the bitly services to create a shorter whatsapp link by clicking <a style={{margin: "0px", color:"#0058ff"}} href="https://bitly.com/#shorten_url" target="_blank">here</a> for free.</p>
            </div>
        </div>
    );
};

export default ShortAndLong;