import React, {Component} from 'react';


class CartHeader extends Component {
    render() { 
        return (  
            <div className='cart-upper p-2 row text-center d-flex mx-auto'>
                <div className='col'>
                    <h3>Product</h3>
                </div>
                <div className='col'>
                    <h3>Name of Product</h3>
                </div> 
                <div className='col'>
                    <h3>Price</h3>
                </div>
                <div className='col'>
                    <h3>Quantity</h3>
                </div>
                <div className='col'>
                    <h3>Remove</h3>
                </div>
                <div className='col'>
                    <h3>Total</h3>
                </div>
            </div>

        );
    }
}
 
export default CartHeader;