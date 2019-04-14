import localForage from 'localforage'

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS'
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
export const FETCH_TODOS = 'FETCH_TODOS'

export const todoStatuses = {
  COMPLETED: "completed",
  NOT_COMPLETED: "not completed"
};



const addTodo = () => (dispatch,getState) => {
  const id = Date.now();
  const todoAction = {
    type: ADD_TODO,
    id
  }
  const lsTodo = {
      id,
      text: getState().todoList.inputValue,
      status: todoStatuses.NOT_COMPLETED
  }

  return localForage.getItem('todos').then(todos => {
    if(todos) {
      localForage.setItem('todos', [...todos, lsTodo]).then(() => {dispatch(todoAction)})
    } else {
      localForage.setItem('todos', [lsTodo]).then(() => {dispatch(todoAction)})
    }
  })
};

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
  });

  export const changeTodoStatus = (id) => ({
    type: CHANGE_TODO_STATUS,
    id: id
  });

  export const changeInputValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
  })

  export const fetchTodos = () => (dispatch) => {
    return localForage.getItem('todos').then(todos => {
      dispatch({
        type: 'FETCH_TODOS',
        todos: todos || []
      })
    })
  }


  const todoActions = {
    addTodo, deleteTodo, changeTodoStatus, changeInputValue, fetchTodos
  }
  
  export default todoActions

