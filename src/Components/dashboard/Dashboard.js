import React, { Component } from 'react'
import SwitchDashBoard from './Switch'
import {Switch, Route} from 'react-router'
import AddItems from './AddItems'
import DeleteItem from './DeleteItem'
import AddAdmin from './AddAdmin'
import DeleteAdmin from './DeleteAdmin'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='px-5 px-md-2 my-2 d-sm-none d-md-block col-md-2 col-lg-3'>
                        <SwitchDashBoard/>
                    </div>
                    <div className='d-flex flex-wrap px-5 px-md-2 col-sm-12 col-md-10 col-lg-9 my-2'>
                        <Switch>
                          <Route path='/dashboard/addProduct' >
                            <AddItems/>
                          </Route>  
                          <Route path='/dashboard/deleteProduct'>
                            <DeleteItem/>  
                          </Route>  
                          <Route path='/dashboard/addAdmin'>
                            <AddAdmin/>  
                          </Route>  
                          <Route path='/dashboard/removeAdmin'>
                            <DeleteAdmin/>    
                          </Route>  
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
