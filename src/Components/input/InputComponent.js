import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class InputComponent extends Component {
    render() {
        return (
            <div>
                <label className='block text-uppercase font-weight-bold text-sm mb-2'>
                    {this.props.title}
                </label>
                <input className='d-block px-4 py-2 mb-3 rounded-lg col-sm-2 col-md-12'
                       id ={`${this.props.title}-form`}
                       name = {this.props.name}
                       type={this.props.type} 
                       placeholder={this.props.placeholder}
                       value={this.props.value} 
                       onChange={e => {e.preventDefault(); this.props.onChangeHandler(e);  return <Redirect to='/'/>
                    }} 
                       required
                />
            </div>
        )
    }
}
