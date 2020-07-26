import React,{Component} from 'react'

class CartItem extends Component {
    render() { 
        return ( 
            <div key = {this.props.item.id} className="p-2 col-12 d-md-flex  mx-auto font-weight-bolder text-center cart-item my-2">
                <div className='col-10 col-lg-2 my-auto mx-auto '>
                    <img src={this.props.item.img} className='mx-auto img-fluid' alt="product"/>
                </div>
                <div className='col-10  col-md-2 my-auto mx-auto mb-1'>
                    <p className='c-dark fs'>{this.props.item.name}</p>
                </div>
                <div className='col-10 col-md-2 my-auto mx-auto mb-1'>
                    <p className='c-dark fs'>${this.props.item.price.toFixed(2)}</p>
                </div>  
                <div className='col-10 col-md-2 my-auto mx-auto mb-1'>
                    <i className="fa fa-minus-square mx-1 fs" onClick={() =>{
                        this.props.decreaseQuantity(this.props.item.id)
                    }}></i>
                    <span className='num-style mx-1 mb-1'>{this.props.item.count}</span>
                     <i className="fa fa-plus-square mx-1 fs" onClick={() =>{
                        this.props.increaseQuantity(this.props.item.id)
                    }}></i>                                 
                </div>
                <div className='col-10 col-md-2 my-auto mx-auto'>
                    <i className="fa fa-trash danger mb-1 mt-1 fs" onClick={() => {
                        this.props.removeFromCart(this.props.item.id)
                    }}></i>
                </div>
                <div className='col-10 col-md-2 my-auto mx-auto '>
                    <p className='c-dark fs'>${this.props.item.total.toFixed(2)}</p>
                </div>
            </div>    
         );
    }
}
export default CartItem;