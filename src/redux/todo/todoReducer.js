import { LOAD_TODO, DELETE_TODO, UPDATE_TODO } from './todo.actionTypes';

export const TODO_KEY = 'todoStore';

const initialState = [];

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
      // let data = action.payload;
      // const updatedArray = [];
      // state.map((item) => {
      //   if (item.id === data.id) {
      //     item.id = data.id;
      //     item.todo = data.todo;
      //   }
      //   updatedArray.push(item);
      // });
      // return updatedArray;

      const allData = [...state]
      const selectedTodoIndex = state.findIndex(item => item.id === action.payload.id)
      allData[selectedTodoIndex].todoItem.myText = action.payload.todo
      return allData
      
    default:
      return state;
  }
};
