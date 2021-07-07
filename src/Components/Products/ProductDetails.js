import React,{Component} from "react";
import {Link} from 'react-router-dom'
import ProductDefault from './ProductDefault'

class ProductDetails extends Component {
    
    render() { 
        let {img, name, description, price, id, inCart} = this.props.productDetails.filter(p => p.id === parseInt( this.props.match.params.id) )[0]
        return ( 
            <div className='container mt-5'>
                {
                (this.props.productDetail === {})? <ProductDefault/> :
                    (<div className="card my-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={`../${img}`} className="card-img" alt="product"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text text-muted">{price}$</p>
                                    <div className="ProductDetailsBtns">
                                        
                                        {
                                        (inCart)?
                                         
                                            <button className='px-3 py-2 mr-1 mt-md-5 mb-1'  disabled={true} onClick={()=>{
                                                this.props.addToCart(id)
                                            }}>In Cart</button>
                                            
                                            :

                                            <button className='px-3 py-2 mr-1 mt-md-5 mb-1'  disabled={false} onClick={()=>{
                                                this.props.addToCart(id)
                                            }}>Add to cart</button>
                                        
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