import React, { Component } from 'react'
import InputComponent from '../input/InputComponent'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    state = {
        email:'',
        password:'',
}

onChangeHandler =  (event) => {
    this.setState({[event.target.name]: event.target.value});
}

onSubmitHandler = () => {
    this.props.loginHandler(this.state, this.props)
}

render() {
    return (
        <div className='container'>
            <h2 className='text-uppercase d-block text-center my-4'>Login</h2>
            <div className='row '>
                <form onSubmit = {e => {e.preventDefault(); this.onSubmitHandler()}}  className='d-block col-5 mx-auto shadow p-3 mb-5 mt-1 rounded'>
                     <InputComponent title = 'Email'
                                     name = 'email' 
                                     value = {this.state.email}
                                     placeholder = 'c-store@exmaple.com'          
                                     type='email'      
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                     <InputComponent title = 'Password'
                                     name = 'password'
                                     value = {this.state.password}
                                     placeholder = '********'     
                                     type='password'           
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                    <button type="submit" className="bt btn-dark d-block px-4 py-2 rounded-lg col-sm-5 col-md-12">SignIn</button>
                    <div className='mt-2 d-flex justify-content-around'>
                        <Link className='text-dark text-decoration-none' to='/register' >
                            Create new account
                        </Link>
                        -
                        <Link className='text-dark text-decoration-none' to='/forgetpassword' >
                            Forget my password
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    )
}
}
