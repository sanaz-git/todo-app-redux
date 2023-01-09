import { LOAD_TODO, DELETE_TODO, EDIT_TODO } from './todo.actionTypes';

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

    case EDIT_TODO:
      newTodos = [...state];
      newTodos = newTodos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return newTodos;
      });

    default:
      return state;
  }
};
