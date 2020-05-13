import React from 'react'
import './TodoList.style.css'
import {TypicalText} from '../clock/clock.component'

export const TodoList = ({todos,todoDelete,toDoComplete}) => {
    const todolist = todos.length ? (
        todos.map(todo=>{
            return (
                <div className='box' key={todo.id}>
                     <span className='trash trophy' >
                     <ion-icon onClick={ () => toDoComplete(todo.id,todo.isCompleted)}  name="checkbox-outline"></ion-icon>
                    </span>

               <span style={{'textDecoration': todo.isCompleted ? 'none' : 'line-through'}} > {todo.content} </span>
                        <span className='trash' >
                        <ion-icon onClick={ () => todoDelete(todo.id)}  name="trash-outline"></ion-icon>
                          </span>
                </div>
            )
        })
    ) :<div className='center'>  
        <span className='clipboard'><ion-icon name="clipboard-outline"></ion-icon> </span>
        <p className='empty' >TODO LIST IS EMPTY</p>
        <TypicalText/>
    </div> 

    return (
        <div className=''>
            {todolist}
        </div>
    )
}
