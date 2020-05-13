import React, { Component } from 'react'
import './App.css';
import { auth,createUserProfileDocument } from './firebase/firebase.utils'
import { TodoForm } from './components/TodoForm/TodoForm.component'
import {TodoList} from './components/TodoList/TodoList.component'
import {Footer} from './components/footer/footer.component'
import Header from '../src/components/header/header.component'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       todos:[
        {id:1, content:'Welcome Sir!',isCompleted:true},
      ]
    }
  }

  todoDelete = (id) =>{
    const todos = this.state.todos.filter(todo => {
          return (  localStorage.removeItem("todos"),
          todo.id !== id) 
    })
    this.setState({
      todos
    })
  }
   toDoComplete = (id,isCompleted) =>{
     console.log(isCompleted)
     var todos = [...this.state.todos];
     var index = todos.findIndex(obj => obj.id === id);
     todos[index].isCompleted = !isCompleted;
     this.setState({todos});
     console.log(isCompleted)
      }

  addTODO = (todo) =>{
         todo.id = Math.random()
         todo.isCompleted = true
         let todos = [...this.state.todos, todo]
         this.setState({
           todos
         })
        //  localStorage.setItem('todos',JSON.stringify(this.state));

  }

 unsubscribeFromAuth = null;

 componentDidMount() {
  const { setCurrentUser } = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      });
    }

    setCurrentUser(userAuth);
  });
   if(JSON.parse(localStorage.getItem('todos'))){
  this.setState( prevState => ({
    todos: [
      ...prevState.todos,
      JSON.parse(localStorage.getItem('todos') )
    ]
  }))   
}
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      
      <div className='App'>
            <Header />
            <TodoForm addTODO={this.addTODO} />
            <TodoList 
              todos={this.state.todos} 
              todoDelete={ this.todoDelete} 
              toDoComplete={ this.toDoComplete}
           />
            <Footer/>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
