import React from 'react';
import Navbar from './Navbar';

function OrderForm(){
    var orderStyle = {
        textAlign: "center",
        fontStyle: "italic",
    }
    return(
        <div>
            <h3 style={orderStyle}>Order Your Keg Here!</h3>
            <p style={orderStyle}>Minimum of 2 kegs per order.</p>
            <form>
                <input type="text"
                id='brand'
                placeholder='Name of Brand'/>
                <input type="text"
                    id='flavor'
                    placeholder='Flavor' />
                <input type="text"
                    id='kegs'
                    placeholder='How Many Kegs' />
                <button type="submit" className="btn-btn">Place my order!</button>
            </form>
            <Navbar />
        </div>
    );
}

export default OrderForm;