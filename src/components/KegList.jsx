import React from 'react';
import Keg from './Keg';

var MasterKegList = [
    {
        name: "K1",
        brand: "Carnivors unite",
        price: "$11",
        flavor: "Meat"

    },
    {
        name: "K2",
        brand: "Adventorous Hippies",
        price: "$9",
        flavor: "Kale"

    },
    {
        name: "K3",
        brand: "Meh",
        price: "$4",
        flavor: "Mild Dissapointment"

    },

]

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