import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {

    render() { 
        console.log(this.props)
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-sm-5'>
                <Link to='/' className='navbar-brand'> 
                    <h3><i className='fas fa-shopping-bag mr-2'></i>C-Store</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='col'>
                        <ul className='navbar-nav mr-auto justify-content-center'>
                            <li style={(this.props.isAuthenticated)?{display:'none'}:{display:'block'}}>
                                <Link to='/register' className='navbar-brand'>
                                    Register
                                </Link>
                            </li>
                            
                            <li style={!(this.props.currentUserInfo.isAdmin)?{display:'none'}:{display:'block'}}>
                                <Link to='/dashboard' className='navbar-brand'>
                                    Admin
                                </Link>
                            </li>
                            <li style={!(this.props.isAuthenticated)?{display:'none'}:{display:'block'}}>
                                <Link to='/profile' className='navbar-brand'>
                                    Profile
                                </Link>
                            </li>
                            <li style={!(this.props.isAuthenticated)?{display:'none'}:{display:'block'}}>
                                <Link to='/login' className='navbar-brand' onClick = {() => this.props.signOutHandler()}>
                                  Signout
                                </Link>
                            </li>
                            <li className='ml-md-auto'>
                                <Link to='/cart' className='navbar-brand'>
                                    <button type="button" className="btn btn-light px-3">
                                        <i className='fas fa-cart-plus mr-1'></i>
                                        My Cart
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          );
    }
}
 
export default NavBar;