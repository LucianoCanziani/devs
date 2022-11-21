import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <footer>
            &copy; {today.getFullYear()} Operation Dev. All rights reserved.
        </footer>
    );
};

export default Footer;