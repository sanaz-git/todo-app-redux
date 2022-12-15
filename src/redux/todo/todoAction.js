import { LOAD_TODO, DELETE_TODO } from './todo.actionTypes';

const loadTodo = (todos) => {
  return { type: LOAD_TODO, payload: todos };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export { loadTodo, deleteTodo };
