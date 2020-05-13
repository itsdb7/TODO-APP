import React, { Component } from 'react'
import './signup.style.css'
import {TodoForm} from '../TodoForm/TodoForm.component'

import { auth,createUserProfileDocument } from '../../firebase/firebase.utils'

import {FormInput} from '../auth-input/auth-input.component'
// import { signInWithGoogle } from '../../firebase/firebase.utils'



export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayName:'',
             email : '',
             password:'',
             confirmPassword:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("password not matched")
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            createUserProfileDocument(user,{displayName})
            this.setState({
                displayName:'',
                email : '',
                password:'',
                confirmPassword:''
   
            })
        }catch(error){
            console.log("ERROR");
        }
    } 
    
    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value})

    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div>
                <h2>Sign up here</h2>
                <span>signup with email and password</span>
                <form>
                <FormInput 
                    type='text'
                    name='displayName'
                    value = {displayName}
                    onChange={this.handleChange}
                    label='display name'
                    required/>

                <FormInput 
                    type='email'
                    name='email'
                    value = {email}
                    onChange={this.handleChange}
                    label='email'
                    required/>

                <FormInput 
                    type='password'
                    name='password'
                    value = {password}
                    onChange={this.handleChange}
                    label='password'
                    required/>

                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value = {confirmPassword}
                    onChange={this.handleChange}
                    label='confirmPassword'
                    required/>
                
                <button type='submit'>SIGN UP</button>
                </form>
            </div>
        )
    }
}

export default SignUp

