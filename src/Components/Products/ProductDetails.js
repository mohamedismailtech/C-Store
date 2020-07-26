import React,{Component} from "react";
import {Link} from 'react-router-dom'
import ProductDefault from './ProductDefault'

class ProductDetails extends Component {
    
    render() { 
        return ( 
            <div className='container mt-5'>
                {
                (this.props.productDetail === {})? <ProductDefault/> :
                    (<div className="card my-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={this.props.productDetails.img} className="card-img" alt="product"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.productDetails.name}</h5>
                                    <p className="card-text">{this.props.productDetails.description}</p>
                                    <p className="card-text text-muted">{this.props.productDetails.price}$</p>
                                    <div className="ProductDetailsBtns">
                                        
                                        {
                                        (!this.props.productDetails.inCart)?
                                        
                                            <button className='px-3 py-2 mr-1 mt-md-5 mb-1'  disabled={this.props.productDetails.inCart} onClick={()=>{
                                                this.props.addToCart(this.props.productDetails.id)
                                            }}>Add to cart</button>
                                        :
                                            <button className='px-3 py-2 mr-1 mt-md-5 mb-1'  disabled={this.props.productDetails.inCart} onClick={()=>{
                                                this.props.addToCart(this.props.productDetails.id)
                                            }}>In Cart</button>
                                        
                                        }
                                        <Link to='/'>
                                            <button className='px-3 py-2 mb-1'>Back to Products</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
         );
    }
}
 
export default ProductDetails;