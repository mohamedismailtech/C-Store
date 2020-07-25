import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Product extends Component {
 
    render() { 
        return ( 
            <div key= {this.props.product.id} className='container px-5 px-md-2 px-lg-2 col-sm-12 col-md-4 col-lg-3 my-2'>
                <div className='card product'>
                    <Link to='/details' className='card-link' onClick={()=>this.props.getProduct(this.props.product.id)}>
                        <img src={this.props.product.img} className='card-img-top' alt='product'/>
                    </Link>
                    <button className='px-2 py-1' disabled = {this.props.product.inCart} onClick={()=>{
                        this.props.addToCart(this.props.product.id);
                        this.props.modalInfoHandler(this.props.product.id);
                        this.props.openModal();
                    }}>
                        {(!this.props.product.inCart)? <i className='fas fa-cart-plus'></i> : <i>incart</i>}
                    </button>
                </div>
                <div className='card-footer d-flex justify-content-between px-2'>
                    <p className='align-self-center mb-0'>{this.props.product.name}</p>
                    <h5 className='mr-1 font-italic'>
                        <span>$</span>
                            {this.props.product.price}
                        </h5>
                </div>
            </div>
         );
    }
}
 
export default Product;