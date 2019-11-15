import React from 'react';
import Keg from './Keg';

function KegList(){
    return(
        <div>
            {MasterKegList.map((keg, index) =>
            <Keg name={keg.name}
                brand={keg.brand}
                price={keg.price}
                flavor={keg.flavor}
                key={index} />
                
                )}
        </div>
    );
}

export default KegList;