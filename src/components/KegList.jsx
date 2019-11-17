import React from 'react';
import Keg from './Keg';
import Navbar from './Navbar';

var MasterKegList = [
    {
        name: "Kombucha1",
        brand: "Carnivors unite",
        price: "$11",
        flavor: "Meat"

    },
    {
        name: "Kombucha2",
        brand: "Adventorous Hippies",
        price: "$9",
        flavor: "Kale"

    },
    {
        name: "Kombucha3",
        brand: "Meh",
        price: "$4",
        flavor: "Mild Dissapointment"

    },

]

function KegList(){
    var headerStyle = {
        textAlign: "center",
    }
    return(
        
            <div>
                <h3 style={headerStyle}>Our Current List</h3>
                <div>
               
                {MasterKegList.map((keg, index) =>
                    <Keg name={keg.name}
                        brand={keg.brand}
                        price={keg.price}
                        flavor={keg.flavor}
                        key={index} />

                )}
                <Navbar />
            </div>
        </div>
     
    );
}

export default KegList;