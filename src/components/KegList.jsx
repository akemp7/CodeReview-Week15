import React from 'react';
import Keg from './Keg';
import Navbar from './Navbar';
import kombucha2 from '../Assets/kombucha2.jpg'

var MasterKegList = []

function KegList(){
    var headerStyle = {
        textAlign: "center",
    }

    var imageStyle = {
        width: "40%",
        height: "300px",
        float: "right",
        paddingRight: "10%",
        paddingTop: "5%",
    }
    return(
        
            <div>
            <Navbar />
                <h3 style={headerStyle}>Our Current List</h3>
                <img style={imageStyle} src={kombucha2} />
                <hr/>
                <div>
               
                {MasterKegList.map((keg, index) =>
                    <Keg name={keg.name}
                        brand={keg.brand}
                        price={keg.price}
                        flavor={keg.flavor}
                        key={index} />

                )}
                
            </div>
        </div>
     
    );
}

export default KegList;