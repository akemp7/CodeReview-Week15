import React from 'react';
import Keg from './Keg';
import Navbar from './Navbar';
import kombucha2 from '../Assets/kombucha2.jpg'

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
        name: "Kombucha3 ***THIS ONE IS THE MOST PALATABLE***",
        brand: "Meh",
        price: "$4",
        flavor: "Mild Dissapointment"

    },

]

function KegList(){
    var headerStyle = {
        textAlign: "center",
    }

    var imageStyle = {
        width: "40%",
        height: "300px",
        float: "right",
        paddingRight: "10%"
    }
    return(
        
            <div>
                <h3 style={headerStyle}>Our Current List</h3>
                <img style={imageStyle} src={kombucha2} />
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