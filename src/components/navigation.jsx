import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navigation = () => (
    <div className="navigation">
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/members'}>Members</Link></li>
            <li><Link to={'/upgrades'}>Upgrades</Link></li>
        </ul>
    </div>
);

export default Navigation;

