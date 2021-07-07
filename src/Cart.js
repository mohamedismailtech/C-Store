import React, {Component} from 'react';

class Cart extends Component {
    state = {
        totalPrice:1000
    }
    //check out handle
    checkOutHanlder = () => {

        // Working on it
        if (this.props.isAuthenticated){ 
        toast.success('The purchase was completed successfully! (Just testing not working yet!)',{
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        document.location.reload()
        } else {
            toast.warn('Please login!',{
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            this.props.history.push('/login')
        }

    }

    render() { 
        console.log(this.props)
        return (  
            <div className='container col my-1'>
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
                    {
                        this.props.cart.map(item=>{
                            return(
                                <div key = {item.id} className="p-2 row d-flex mx-auto font-weight-bolder text-center cart-item my-2">
                                    <div className='col  my-auto'>
                                        <img src={item.img} className='mx-auto' alt="product"/>
                                    </div>
                                    <div className='col  my-auto'>
                                        <p className='c-dark '>{item.name}</p>
                                    </div>
                                    <div className='col my-auto'>
                                        <p className='c-dark'>${item.price}</p>
                                    </div>
                                    <div className='col my-auto'>
                                        <i className="fa fa-minus-square mx-1" onClick={() =>{
                                            this.props.decreaseQuantity(item.id)
                                        }}></i>
                                        <span className='num-style mx-1'>{item.count}</span>
                                        <i className="fa fa-plus-square mx-1" onClick={() =>{
                                            this.props.increaseQuantity(item.id)
                                        }}></i>                                 
                                    </div>
                                    <div className='col my-auto'>
                                        <i className="fa fa-trash danger" onClick={() => {
                                            this.props.removeFromCart(item.id)
                                        }}></i>
                                    </div>
                                    <div className='col my-auto'>
                                        <p className='c-dark'>${item.price}</p>
                                    </div>
                                </div>                  
                            )   
                        })
                    }
                    <hr/>
                    <div className='p-5 row text-uppercase'>
                        <div className='col-6'>
                        <button type="button" className="btn btn-dark px-3" onClick={() => this.checkOutHandler()}></button>

                            <h4 className='mr-2 d-inline'>Total:</h4>
                            <h4 className=' d-inline'>${this.state.totalPrice}</h4>
                        </div>
                        <div className='col-6'>
                            <ul className='nav justify-content-end'>
                            </ul>
                        </div>
                    </div>
            </div>
        );
    }
}
 
export default Cart;