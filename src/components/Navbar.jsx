import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/list">Kombucha List</Link>
            <Link to="/order">Order Online</Link>
        </div>
    );
}
export default Navbar;
