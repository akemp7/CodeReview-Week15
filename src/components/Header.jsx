import React from 'react';
import { Link } from 'react-router-dom';
import kombucha1 from '../Assets/kombucha1.jpg';

function Header(){
    return(
        <div>
            <img src={kombucha1} />
            <Link to="/">Home</Link>
            <Link to="/list">Kombucha List</Link>
            <Link to="/order">Order Online</Link>
        </div>
        
    );
}

export default Header;
