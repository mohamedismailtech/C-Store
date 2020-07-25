import React,{Component} from 'react'

class CartItem extends Component {
    render() { 
        return ( 
            <div key = {this.props.item.id} className="p-2 row d-flex mx-auto font-weight-bolder text-center cart-item my-2">
                <div className='col  my-auto'>
                    <img src={this.props.item.img} className='mx-auto' alt="product"/>
                </div>
                <div className='col  my-auto'>
                    <p className='c-dark '>{this.props.item.name}</p>
                </div>
                <div className='col my-auto'>
                    <p className='c-dark'>${this.props.item.price.toFixed(2)}</p>
                </div>
                <div className='col my-auto'>
                    <i className="fa fa-minus-square mx-1" onClick={() =>{
                        this.props.decreaseQuantity(this.props.item.id)
                    }}></i>
                    <span className='num-style mx-1'>{this.props.item.count}</span>
                    <i className="fa fa-plus-square mx-1" onClick={() =>{
                        this.props.increaseQuantity(this.props.item.id)
                    }}></i>                                 
                </div>
                <div className='col my-auto'>
                    <i className="fa fa-trash danger" onClick={() => {
                        this.props.removeFromCart(this.props.item.id)
                    }}></i>
                </div>
                <div className='col my-auto'>
                    <p className='c-dark'>${this.props.item.total.toFixed(2)}</p>
                </div>
            </div>    
         );
    }
}
export default CartItem;