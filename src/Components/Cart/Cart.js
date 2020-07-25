import React, {Component} from 'react';
import CartHeader from './CartHeader' 
import CartItem from './CartItem'
import CartFooter from './CartFooter'
import CartDefault from './CartDefault'

class Cart extends Component {
 
    render() { 
        return (  
            <div className='container col my-1'>
                {
                 (this.props.cart.length === 0)? <CartDefault/> :
                  (
                    <div>
                        <CartHeader/>
                            {
                                this.props.cart.map(item=>{
                                    return(
                                        <CartItem key={item.id} 
                                                  item = {item} 
                                                  increaseQuantity = {this.props.increaseQuantity} 
                                                  decreaseQuantity = {this.props.decreaseQuantity} 
                                                  removeFromCart = {this.props.removeFromCart}
                                        />         
                                    )   
                                })
                            }
                            <hr/>
                        <CartFooter totalPrice = {this.props.totalPrice} productInfoReset = {this.props.productInfoReset}/>
                    </div>
                 )}   
            </div>
        );
    }
}
 
export default Cart;