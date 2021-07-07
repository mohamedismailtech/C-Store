import React, { Component } from 'react'

export default class ProductSearch extends Component {
    render() {
        return (
            <div className="input-group mb-3 my-2 px-3">
                <input type="text" className="form-control" placeholder="Search.." aria-label="search" aria-describedby="button-addon2" onChange={(e)=>this.props.searchingHandler(e.target.value)}/>
                <div className="input">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                </div>
            </div>
 
        )
    }
}
