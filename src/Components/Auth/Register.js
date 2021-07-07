import React, { Component } from 'react'
import InputComponent from '../input/InputComponent'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'

export default class Register extends Component {
    state = {
            name:'',
            email:'',
            password:'',
            confirmPassword:''  
    }
    
    onChangeHandler =  (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    onSubmitHandler = () => {
        if(this.state.password === this.state.confirmPassword && !this.state.email.includes('@admin.com'))
            this.props.registerHandler(this.state, this.props)
        else if(this.state.password !== this.state.confirmPassword)
            toast.error(`Password doesn't match`, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        else if(this.state.email.includes('@admin.com'))
            toast.error(`The domain of the email is not allowed`, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    }

    render() {
        return (
            <div className='container'>
                <h2 className='text-uppercase d-block text-center my-4'>register</h2>
                <div className='row '>
                    <form onSubmit = {e => {e.preventDefault(); this.onSubmitHandler()}}  className='d-block col-5 mx-auto shadow p-3 mb-5 mt-1 rounded'>
                        <InputComponent title = 'Name'
                                        name = 'name'
                                        value = {this.state.name}
                                        placeholder = 'c-store'  
                                        type='text'
                                        onChangeHandler = {this.onChangeHandler}              
                                        />
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
                         <InputComponent title = 'confirmPassword'
                                        name = 'confirmPassword'
                                         value = {this.state.confirmPassword}
                                         placeholder = '********'      
                                         type='password'                     
                                         onChangeHandler = {this.onChangeHandler}              
                        />
                        <button type="submit" className="bt btn-dark d-block px-4 py-2  rounded-lg col-sm-5 col-md-12">SignUp</button>
                        <Link to='/login' className='mt-2 d-block text-dark text-decoration-none'>
                            Already have an account.
                        </Link>
                    </form>
                </div>

            </div>
        )
    }
}
