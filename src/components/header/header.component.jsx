import React, { useState } from "react";
import { auth } from '../../firebase/firebase.utils'
import './header.style.css'

import { connect } from 'react-redux'
import {Modal} from 'react-bootstrap'
import {Auth} from '../auth/auth.component'
const Header = ({currentUser}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div className='header'>
                <h3 className='title'>PROXY-CIRCUIT <span className='logo'>todo app</span></h3> 
           
              { currentUser ? 
                 <button className='button' onClick={()=> auth.signOut()}>sign out</button> : <button className='button' onClick={handleShow}></button>
                 }

   
       <Modal show={show} onHide={handleClose} animation={false}>
         <Modal.Body>
            <Auth />

        </Modal.Body>
      
      </Modal> 
   </div>
    )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
