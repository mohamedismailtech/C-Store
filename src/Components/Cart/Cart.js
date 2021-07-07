import React, {Component} from 'react';
import CartHeader from './CartHeader' 
import CartItem from './CartItem'
import CartFooter from './CartFooter'
import CartDefault from './CartDefault'

class Cart extends Component {
 
    render() { 
        console.log(this.props)
        return (  
            <div className='container col my-1'>
                {
                 (this.props.cart.length === 0)? <CartDefault/> :
                  (
                    <div>
                        <CartHeader/>
                        <div className='row'>
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
                        </div>
                        <hr/>
                        <CartFooter totalPrice = {this.props.totalPrice}
                                    isAuthenticated = {this.props.isAuthenticated}
                                    productInfoReset = {this.props.productInfoReset}
                                    checkOutHandler = {this.props.checkOutHandler}
                                    history = {this.props.history}
                        />
                    </div>
                 )}   
            </div>
        );
    }
}
 
export default Cart;