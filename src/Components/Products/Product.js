import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Product extends Component {
 
    render() { 
        let link = `/products/${this.props.product.id}`
        const {img, inCart, id, name, price} = this.props.product
        return ( 
            <div key={id} className='col-sm-12 col-md-4 col-lg-3 my-2'>
                <div className='card product'>
                    <Link to={link} className='card-link' onClick={()=>this.props.getProduct(id)}>
                        <img src={img} className='card-img-top' alt='product' style={{height:'248.850px'}}/>
                    </Link>
                    <button className='px-2 py-1' disabled = {inCart} onClick={()=>{
                        this.props.addToCart(id);
                        this.props.modalInfoHandler(id);
                        this.props.openModal();
                    }}>
                        {(!inCart)? <i className='fas fa-cart-plus'></i> : <i>incart</i>}
                    </button>
                </div>
                <div className='card-footer d-flex justify-content-between px-2'>
                    <p className='align-self-center mb-0'>{name}</p>
                    <h5 className='mr-1 font-italic'>
                        <span>$</span>
                        {price}
                    </h5>
                </div>
            </div>
         );
    }
}
 
export default Product;