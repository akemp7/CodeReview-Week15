import React from 'react';
import Keg from './Keg'
import PropTypes from 'prop-types';

function KegControl(props) {
    return(
     <div>
        {props.MasterKegList.map((keg) =>
            <Keg
                name= {keg.name}
                brand= {keg.brand}
                price= {keg.price}
                flavor= {keg.flavor}
                key= {keg.id} />
                
        )}
    </div>
    );
}

KegControl.propTypes = {
    MasterKegList: PropTypes.array
};

export default KegControl;