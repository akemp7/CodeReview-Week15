import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
    return(
        <div>
            <ul>
                <li>Name: {props.name}</li>
                <li>Brand: {props.brand}</li>
                <li>Price: {props.price}</li>
                <li>Flavor: {props.flavor}</li>
            </ul>
        </div>
    );
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    flavor: PropTypes.string
};

export default Keg;