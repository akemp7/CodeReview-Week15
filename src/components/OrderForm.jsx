import React from 'react';
import Navbar from './Navbar';

function OrderForm(){
    return(
        <div>
            
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