import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Modal extends Component {
    render() {
        return (
            <div>
                {
                    (this.props.modalVisibility) ? (              
                        <div className='justify-content-center align-items-center modal-container'>
                            <div className='container'>
                                <div className='row '>
                                    <div className='col-8 mx-auto col-md-6 col-lg-4 p-4 text-capitalize text-center modal'>
                                        <img src={this.props.modalInfo.img} alt='product' className='img-fluid'/>
                                        <h4>{this.props.modalInfo.name}</h4>
                                        <span className='mb-1'>${this.props.modalInfo.price}</span>
                                        <button className='px-2 py-1 mr-1 btn btn-dark' onClick={()=>{
                                            this.props.closeModal()
                                        }}>Back to Shop</button>
                                        <button className='px-2 py-1 btn btn-dark text-reset' onClick={()=> this.props.closeModal()}>
                                            <Link to='/cart'>Go to cart</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : <div></div>
                }
            </div>
        )
    }
}
export default Modal;