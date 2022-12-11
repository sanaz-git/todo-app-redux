import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../redux/todo/todoAction';

const Todo = () => {
  const [value, setValue] = useState('');
  const item = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todo App </h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => dispatch(add(value))}>add</button>
      <ul>{item}</ul>
    </div>
  );
};

export default Todo;
