import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    var navStyling = {
        float: "left",
        display: "block",
        marginLeft: "200px",
        textAlign: "center",
        padding: "14px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "20px",
        color: "black",
    }
    return(
        <div>
            <div>
                <nav>
                    <Link style={navStyling} to="/">Home</Link>
                    <Link style={navStyling} to="/list">Kombucha List</Link>
                    <Link style={navStyling} to="/add">New Keg</Link>
                    <Link style={navStyling} to="/order">Order Online</Link>
                </nav>
            </div>
        </div>
    );
}
export default Navbar;
