import React, { Component } from 'react'

import './TodoForm.style.css'
export class TodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content : ''
            
        }
    }
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.addTODO(this.state);
        localStorage.setItem('todos',JSON.stringify(this.state));
     
   
        this.setState({
            content: ''
        })
    }
     render() {
        return (
            <div className='inputTask'>
                <form onSubmit={ this.handleSubmit}>
                
                    <input 
                    className="textBox" 
                    type='text' 
                    onChange={ this.handleChange} 
                    value={this.state.content}
                    placeholder='what you want to do ...'
                    />
                </form>
            </div>
        )
    }
}

export default TodoForm
