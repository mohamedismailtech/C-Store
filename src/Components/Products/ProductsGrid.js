import React, {Component} from 'react';
import Product from './Product'
import Modal from './Modal'
import ProductFilter from './ProductsFilter'
import ProductSearch from './ProductSearch'

class ProductsGrid extends Component {
    render() {
        return (  
            <div className="container-fluid">
                <div className="row">
                    <div className='px-5 px-md-2 my-2 d-sm-none d-md-block col-md-2 col-lg-3'>
                        <ProductFilter mainRange = {this.props.mainRange}
                                       productType = {this.props.productType}
                                       productsPriceFilter = {this.props.productsPriceFilter}
                                       productsCompanyFilter = {this.props.productsCompanyFilter}/>
                    </div>
                    <div className='d-flex flex-wrap px-5 px-md-2 col-sm-12 col-md-10 col-lg-9 my-2'>
                        <ProductSearch searchingHandler = {this.props.searchingHandler}/>
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
                    </div>
                    <Modal modalInfo = {this.props.modalInfo} 
                           closeModal = {this.props.closeModal} 
                           modalVisibility = {this.props.modalVisibility}/>
                </div>
            </div>
        );
    }
}
 
export default ProductsGrid;