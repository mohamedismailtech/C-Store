import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Table from '../../constant/Table'

class Profile extends Component {
    
    
    render() { 
        const index = this.props.email.indexOf('@');
        const username = this.props.email.substring(0,index)
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
        const columns = [
            {
              dataField: "id",
              text: "#",
              sort: true
            },
            {
              dataField: "name",
              text: "Product Name",
              sort: true
            },
            {
              dataField: "price",
              text: "Product Price",
              sort:true
            }
          ];
        return ( 
            <div className='row mx-0'>
                <div key='userCard' className='col-sm-12 col-md-4 col-lg-3 my-2 d-flex justify-content-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png" />
                        <Card.Body className='text-center'>
                            <Card.Title>{username}</Card.Title>
                            <Button variant="primary"><Link style={linkStyle} to='/changePassword'> Change password</Link></Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-sm-12 col-md-8 col-lg-9 my-2 d-flex justify-content-center'>
                    <h3 className='mt-5'> Purchase history Under working</h3>
                    {/* <Table columns={columns}/> */}
                </div>
            </div>
         );
    }
}
 
export default Profile;