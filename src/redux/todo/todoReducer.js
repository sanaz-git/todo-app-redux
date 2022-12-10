const initialState = {
  todoList: [],
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDITEM':
      return {
        ...state,
        todoList: action.payload,
      };

    default:
      return state;
  }
};

export default todoListReducer;
