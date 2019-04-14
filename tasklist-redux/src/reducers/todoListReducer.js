import { FETCH_TODOS, ADD_TODO, DELETE_TODO, todoStatuses , CHANGE_INPUT_VALUE, CHANGE_TODO_STATUS} from "../actions/todoList.js";

const initialState = {
  inputValue: "",
  todos: []
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: state.inputValue,
            status: todoStatuses.NOT_COMPLETED
          }
        ],
        inputValue: ''
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.id)
      };
    }
    case CHANGE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, status: todoStatuses.COMPLETED } : todo
        )
      };
    }
    case CHANGE_INPUT_VALUE: {
        return {
          ...state,
          inputValue: action.value
        }
      }
      case FETCH_TODOS: {
        return {
          ...state,
          todos: action.todos
        }
      }

    default: {
      return state;
    }
  }
}
