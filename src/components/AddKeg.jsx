import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function AddKeg(props) {
    let _name = null;
    let _brand = null;
    let _price = null;
    let _flavor = null;

    function handleSubmission(event) {
        event.preventDefault();
        props.onKegCreation({name: _name.value, brand: _brand.value, price: _price.value, flavor: _flavor.value, id: v4()});
        _name.value='';
        _brand.value='';
        _price.value='';
        _flavor.value='';
    }
        return(
            <div>
                <form onSubmit={handleSubmission}>
                    <input type="text"
                        id='name'
                        placeholder='name'
                        ref={(input) =>{_name = input;}}/>
                    <input type="text"
                        id='brand'
                        placeholder='brand'
                        ref={(input) => { _brand = input; }} />
                    <input type="text"
                        id='price'
                        placeholder='price'
                        ref={(input) => { _price = input; }} />
                    <input type="text"
                        id='flavor'
                        placeholder='flavor'
                        ref={(input) => { _flavor = input; }} />

                </form>
            </div>
        );
    }

AddKeg.propTypes = {
    onKegCreation: PropTypes.func
};

export default AddKeg;