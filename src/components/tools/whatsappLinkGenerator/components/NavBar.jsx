import React from 'react';

const NavBar = () => {

    return (
        <nav className="NavBar">
            <a href="https://www.operationdev.com/" className="logo-link"><img src="/Arimo.png" height="50px" width="43px" alt="Operation Dev Logo" /></a>
            <div>
                <a href="https://www.operationdev.com/">Home</a>
                <a href="https://www.operationdev.com/blog/">Blog</a>
                <a href="https://www.operationdev.com/tools/">Tools</a>
            </div>
        </nav>
    );
};

export default NavBar;