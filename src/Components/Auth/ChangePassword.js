import React, { Component } from 'react'
import InputComponent from '../input/InputComponent'
import { toast } from 'react-toastify';

export default class ChangePassword extends Component {
    state = {
        Oldpassword:'',
        newPassword:'',
        confirmNewPassword:''
}

onChangeHandler =  (event) => {
    this.setState({[event.target.name]: event.target.value});
}

onSubmitHandler = () => {
    if(this.state.Oldpassword !== this.state.newPassword && this.state.newPassword === this.state.confirmNewPassword){
       this.props.changePasswordHandler(this.state, this.props)
    }else{
        toast.error('Invalid password', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });    
    }
}

render() {
    return (
        <div className='container'>
            <h2 className='text-uppercase d-block text-center my-4'>Change password</h2>
            <div className='row '>
                <form onSubmit = {e => {e.preventDefault(); this.onSubmitHandler()}}  className='d-block col-5 mx-auto shadow p-3 mb-5 mt-1 rounded'>
                     <InputComponent title = 'Old password'
                                     name = 'Oldpassword' 
                                     value = {this.state.oldPassword}
                                     placeholder = '********'          
                                     type='password'      
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                     <InputComponent title = 'New password'
                                     name = 'newPassword'
                                     value = {this.state.newPassword}
                                     placeholder = '********'     
                                     type='password'           
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                     <InputComponent title = 'Confirm your new password'
                                     name = 'confirmNewPassword'
                                     value = {this.state.confirmNewPassword}
                                     placeholder = '********'     
                                     type='password'           
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                    <button type="submit" className="bt btn-dark d-block px-4 py-2 rounded-lg col-sm-5 col-md-12">Change password</button>
                    
                </form>
            </div>

        </div>
    )
}
}
