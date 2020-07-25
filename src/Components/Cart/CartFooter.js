import React, {Component} from 'react';
import Paypal from '../Paypal'

class CartFooter extends Component {   
    render() { 
        return (  
            <div className='p-5 row text-uppercase'>
                <div className='col-6'>
                    <h4 className='mr-2 d-inline p-0 my-0'>Total:</h4>
                    <h4 className=' d-inline'>$ {this.props.totalPrice.toFixed(2)}</h4>
                </div>
                <div className='col-6'>
                    <ul className='nav justify-content-end'>
                        {/* <button type="button" className="btn btn-dark px-3">
                            CheckOut
                        </button> */}
                        <Paypal totalPrice = {this.props.totalPrice} productInfoReset= {this.props.productInfoReset} history = {History}/>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default CartFooter;