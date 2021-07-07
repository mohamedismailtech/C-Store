import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Radium from 'radium';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


export default class Switch extends Component {
    render() {
           
        return (
            <div className='product-filter p-2'>
            <p className='font-weight-bold'>Control List</p>
            <button className="btn btn-secondary mb-1 collapse-btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                <i className="fas fa-filter"></i>
            </button>
            <div className="collapse" id="collapseExample">
                <div className='' style={{backgroundColor:'rgba(0,0,0,.03)'}}>
                    <div className='p-2'>
                    <ButtonGroup style={{width:'100%'}} vertical>
                        <Button variant="secondary" style={{textAlign:'left'}}>
                            <Link style={linkStyle} to='dashboard/addProduct'><i className="fas fa-plus-square"></i> Add product</Link>
                        </Button>
                        <Button variant="secondary" style={{textAlign:'left'}}>
                            <Link style={linkStyle} to='dashboard/deleteProduct'><i className="fas fa-trash-alt"></i> Delete product</Link>
                        </Button>   
                        <Button variant="secondary" style={{textAlign:'left'}}>
                            <Link style={linkStyle} to='dashboard/addAdmin'><i className="fas fa-user-plus"></i> Add Admin</Link>
                        </Button>   
                        <Button variant="secondary" style={{textAlign:'left'}}>
                            <Link style={linkStyle} to='dashboard/removeAdmin'><i className="fas fa-user-times"></i> remove Admin</Link>
                        </Button>   
                    </ButtonGroup>  
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

Switch = Radium(Switch);

const linkStyle = {
    display: 'block',
    color:'white',
    textDecoration: 'none',
    margin: '0px 0px 5px',
    cursor: 'pointer',
    ':hover': {
        color:'rgb(52, 58, 64)',
    },
}
