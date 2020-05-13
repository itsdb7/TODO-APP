import React, { Component } from 'react'
import './auth.style.css'
import {FormInput} from '../auth-input/auth-input.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
export class Auth extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email : '',
             password : ''
        }
    }
    handleSubmit= (event)=> {
         event.preventDefault();
         this.setState({email:'',password:''})
    }
    handleChange = event =>{
        const {value,name } =event.target;
        this.setState({[name]: value})
    }
    
    render() {
        return (
            <div className='Auth'>
                <p className='tit'>sign in here!</p>    
                <form onSubmit={this.handleSubmit}>
               <FormInput 
                 name='email' 
                 type='email' 
                 label='email'
                 value={this.state.email} 
                 handleChange={this.handleChange}
                 required />  
               <FormInput 
                 name='password'
                 type='password'
                 label='password' 
                 value={this.state.password} 
                 handleChange={this.handleChange}
                 required />  
                   
                 <input className="submit-local" type='submit' value='SIGN IN' />  
                  or          
                 <button className='submit-gogl' onClick={signInWithGoogle} placeholder=''  > SIGN IN WITH GOOGLE</button>  
                 
               </form>  
            </div>
        )
    }
}

export default Auth
