import { LOAD_TODO, DELETE_TODO, UPDATE_TODO } from './todo.actionTypes';

const loadTodo = (todos) => {
  return {
    type: LOAD_TODO,
    payload: todos,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

const handleEditSubmit = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
export { loadTodo, deleteTodo, handleEditSubmit };
