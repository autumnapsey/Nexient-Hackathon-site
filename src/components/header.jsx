import React from 'react';
import logo from '../logo.svg';
import '../index.css';

const Header = () => (
    <div className="header">
        <img src={logo} className="background" alt="logo" />
        <h2 className="title">Aurene Wardens</h2>
    </div>
);

export default Header;

