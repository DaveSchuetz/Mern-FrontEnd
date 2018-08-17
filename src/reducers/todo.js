import {CREATE_TODO, REMOVE_TODO} from '../constants/todo'

const DEFAULT_STATE= {
    todo:[]
}

export default function todoReducer(state = DEFAULT_STATE, action) {
    switch (action.type){
        case CREATE_TODO:
        return{
            ...state,
            todo:[...state.todo, action.payload]
        }
    case REMOVE_TODO:
        return{
            ...state,
            todo: state.todo.filter((todo, id) =>{
                return id !== action.payload
            })
        }
    default:
    return state
    }
}