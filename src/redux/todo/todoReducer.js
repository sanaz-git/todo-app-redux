import { LOAD_TODO, DELETE_TODO, UPDATE_TODO } from './todo.actionTypes';

export const TODO_KEY = 'todoStore';

const initialState = [];

export const todoReducers = (state = initialState, action) => {
  let newTodos;
  switch (action.type) {
    case LOAD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;

    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((item) => item.id !== action.payload);
      return newTodos;

    case UPDATE_TODO:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
        }
        updatedArray.push(item);
      });
      return updatedArray;

    default:
      return state;
  }
};
