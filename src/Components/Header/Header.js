import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="heade-container">
            <img src={logo} alt="" className="logo" />
        </div>
    );
};

export default Header;