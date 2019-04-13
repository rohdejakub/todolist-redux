export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const todoStatuses = {
    COMPLETED: 'completed',
    NOT_COMPLETED: 'not completed'
}

let lastTodoID = 0

export const addTodo = () => {
    ++lastTodoID
    return{
    type: ADD_TODO,
    id: lastTodoID ,
    text: 'aaaa'
}
}

