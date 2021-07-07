import React,{Component} from 'react'

class CartItem extends Component {
    render() { 
        const {id, img, name, price, count, total} = this.props.item
        return ( 
            <div key = {id} className="p-2 col-12 d-md-flex  mx-auto font-weight-bolder text-center cart-item my-2">
                <div className='col-10 col-lg-2 my-auto mx-auto '>
                    <img src={img} className='mx-auto img-fluid' alt="product"/>
                </div>
                <div className='col-10  col-md-2 my-auto mx-auto mb-1'>
                    <p className='c-dark fs'>{name}</p>
                </div>
                <div className='col-10 col-md-2 my-auto mx-auto mb-1'>
                    <p className='c-dark fs'>${price.toFixed(2)}</p>
                </div>  
                <div className='col-10 col-md-2 my-auto mx-auto mb-1'>
                    <i className="fa fa-minus-square mx-1 fs" onClick={() =>{
                        this.props.decreaseQuantity(id)
                    }}></i>
                    <span className='num-style mx-1 mb-1'>{count}</span>
                     <i className="fa fa-plus-square mx-1 fs" onClick={() =>{
                        this.props.increaseQuantity(id)
                    }}></i>                                 
                </div>
                <div className='col-10 col-md-2 my-auto mx-auto'>
                    <i className="fa fa-trash danger mb-1 mt-1 fs" onClick={() => {
                        this.props.removeFromCart(id)
                    }}></i>
                </div>
                <div className='col-10 col-md-2 my-auto mx-auto '>
                    <p className='c-dark fs'>${total.toFixed(2)}</p>
                </div>
            </div>    
         );
    }
}
export default CartItem;