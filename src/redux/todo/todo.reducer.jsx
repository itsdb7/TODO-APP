// import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
   
    todos:[
        {id:1, content:'Welcome Sir!',isCompleted:false},
       ]
}
const userReducer = (state= INITIAL_STATE ,action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER :
              return{
                  ...state,
                  currentUser:action.payload
              }
         default : 
               return state;   
    }
}
export default userReducer;



