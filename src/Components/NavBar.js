import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class NavBar extends Component {

    render() { 
        return (
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark px-sm-5'>
                <div className='col-6'>
                    <Link to='/' className='navbar-brand'> 
                        <h3><i className='fas fa-shopping-bag mr-2'></i>C-Store</h3>
                    </Link>
                </div>
                <div className='col-6 '>
                    <ul className='nav justify-content-end'>
                        <li>
                            <Link to='/cart' className='navbar-brand'>
                                <button type="button" className="btn btn-light px-3">
                                    <i className='fas fa-cart-plus mr-1'></i>
                                    My Cart
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
          );
    }
}
 
export default NavBar;