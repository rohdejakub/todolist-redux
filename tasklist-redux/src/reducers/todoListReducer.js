import {ADD_TODO, DELETE_TODO, todoStatuses} from '../actions/todoList.js'

const initialState = {
    inputValue: '',
    todos: []
    };



export default function todoListReducer(state= initialState, action){
    switch(action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, {
                    id: action.id,
                    text: action.text,
                    status: todoStatuses.NOT_COMPLETED
                }]}
        }
        case DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(({id}) => id !== action.id)
            }
        }

        default: {
            return state
        }
    }
}