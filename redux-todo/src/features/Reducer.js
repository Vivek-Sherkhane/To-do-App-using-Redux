import { AddItem , setCheckItem} from './ActionType';

const initialState = {
    todoList : []
}


const todoReducer = (state=[], action) =>{
    switch(action.type){
        case AddItem :
            // console.log("reducer : ", action.payload);

            return [
                ...state,
                {todoList : action.payload}
            ]

        case setCheckItem :
            // const result = state.filter(item => item.todoList.id!== action.payload);
            // state = result;

                state.map(item =>{
                if(item.todoList.id === action.payload){
                    if(item.todoList.done === true){
                        item.todoList.done = false;
                    } else {
                        item.todoList.done = true;
                    }
                }
            });
            return [
                ...state
            ]

        default :
            return state
    }
}

export default todoReducer;