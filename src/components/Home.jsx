import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/list">Kombucha List</Link>
        </div>
    );
}

export default Home;