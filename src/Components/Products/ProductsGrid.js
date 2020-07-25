import React, {Component} from 'react';
import Product from './Product'
import Modal from './Modal'

class ProductsGrid extends Component {
    render() {
        return (  
            <div className="container">
                <div className="row">
                  {
                    this.props.products.map(product=>{
                        return <Product key={product.id} 
                                        product = {product} 
                                        getProduct={this.props.getProduct} 
                                        addToCart= {this.props.addToCart}
                                        openModal= {this.props.openModal}
                                        modalInfoHandler= {this.props.modalInfoHandler}/>
                    })
                  }
                  <Modal modalInfo = {this.props.modalInfo} closeModal = {this.props.closeModal} modalVisibility = {this.props.modalVisibility}/>
                </div>
            </div>
        );
    }
}
 
export default ProductsGrid;