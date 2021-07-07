import React, {Component} from 'react';
import { Slider } from '@material-ui/core';

class ProductsFilter extends Component {


    render() { 
        let value = this.props.mainRange;
        //price slider handlers
        const valuetext = (value) => {
            return `$${value}`;
        }
        return ( 
            <div className='product-filter p-2'>
                <p className='font-weight-bold'>Filter</p>
                <button className="btn btn-secondary mb-1 collapse-btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                    <i className="fas fa-filter"></i>
                </button>
                <div className="collapse" id="collapseExample">
                    <div className='' style={{backgroundColor:'rgba(0,0,0,.03)'}} >
                        <div className='p-2'>
                            <div className=''>
                                    <p className='font-weight-bold mt-2'>type</p>
                                    <form>
                                    {this.props.productType.map((type,index) =>{
                                        return(
                                            <div key={index}>
                                                <input className='mr-2' type='radio' name='company' value={type} onChange={(e)=>this.props.productsCompanyFilter(type)}/>
                                                    <label>{type}</label><br/>
                                            </div>
                                        )
                                    })}
                                    </form>
                            </div>


                            <div className=''>
                                <p className='font-weight-bold'>Main Range</p>
                                {/* <form>
                                {this.props.mainRange.map((price,index) =>{
                                    return(
                                        <div key={index}>
                                            <input className='mr-2' type='radio' name='price' value={price.endPrice} onChange={(e)=>this.props.productsPriceFilter(price)}/>
                                            <label>
                                                {
                                                    (price.endPrice === 'reset')?
                                                    `${price.endPrice}`
                                                    :
                                                    `$${price.startPrice} - ${price.endPrice}`
                                                    }
                                                </label><br/>
                                        </div>
                                    )
                                })}
                                </form> */}

                                <Slider
                                    value={value}
                                    onChange={this.props.productsPriceFilter}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    max = {4000}
                                    getAriaValueText={valuetext}
                                />
                                <h3 style={{fontSize:'15px'}}>
                                    {`Price: $${value[0]} - $${value[1]}`}
                                </h3>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProductsFilter;