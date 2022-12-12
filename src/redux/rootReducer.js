import { todoReducers, TODO_KEY } from './todo/todoReducer';
import { combineReducers } from 'redux';

let rootReducer = combineReducers({
  [TODO_KEY]: todoReducers,
});

export { rootReducer };
