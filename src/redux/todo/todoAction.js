import {
  LOAD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from './todo.actionTypes';

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

const editTodo = (todo, id) => {
  return {
    type: EDIT_TODO,
    payload: id,
    title: todo,
  };
};

const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
export { loadTodo, deleteTodo, editTodo, updateTodo };
