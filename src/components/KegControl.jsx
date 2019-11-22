import React from 'react';
import AddKeg from './AddKeg';
import KegList from './KegList';
import PropTypes from 'prop-types';

function KegControl(props) {
    return(
        <div>
            <KegList MasterKegList={props.MasterKegList} />
        </div>
    );
}

export default KegControl;