import { LOAD_TODO, DELETE_TODO, UPDATE_TODO } from './todo.actionTypes';

export const TODO_KEY = 'todoStore';

const initialState = {
  lists: [],
};

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODO:
      const addToArray = [...state];
      addToArray.push(action.payload);
      return addToArray;

    case DELETE_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;

    case UPDATE_TODO:
      const allData = [...state];
      const selectedTodoIndex = state.findIndex(
        (item) => item.id === action.payload.id,
      );
      allData[selectedTodoIndex].todoItem.myText = action.payload.todo;
      return allData;

    default:
      return state;
  }
};
