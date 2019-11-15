import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
    return(
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.brand}</li>
                <li>{props.price}</li>
                <li>{props.flavor}</li>
            </ul>
        </div>
    );
}

export default Keg;