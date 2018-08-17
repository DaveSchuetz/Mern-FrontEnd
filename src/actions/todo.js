import {CREATE_TODO, REMOVE_TODO} from '../constants/todo'

export function createTodo(name, info) {
    return{
        type: CREATE_TODO,
        payload:{
            name,
            info
        }
    }
}

export const removeTodo = id => ({type: REMOVE_TODO, payload: id})