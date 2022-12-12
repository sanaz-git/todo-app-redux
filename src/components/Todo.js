import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Todo = () => {
  const [value, setValue] = useState('');
  const items = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todo App </h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => dispatch()}>add</button>
      <ul>{items}</ul>
    </div>
  );
};

export default Todo;
