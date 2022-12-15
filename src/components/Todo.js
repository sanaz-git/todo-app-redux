import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodo } from '../redux/todo/todoAction';
import { TODO_KEY } from '../redux/todo/todoReducer';
import { v4 } from 'uuid';

const Todo = () => {
  //initialize dispatch
  const dispatch = useDispatch();

  const [text, setText] = useState({
    myText: '',
  });

  //handle change
  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  //handle onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loadTodo({
        id: v4(),
        todoItem: text,
      }),
    );
    setText({
      myText: '',
    });
  };

  //view data
  const items = useSelector((state) => {
    return state[TODO_KEY];
  });

  return (
    <>
      <div>
        <p>Todo App </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="myText"
              type="text"
              value={text.myText}
              onChange={handleChange}
              placeholder="Enter todos"
            />
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <div>
        {items.map((todo) => {
          return (
            <div key={todo.id}>
              <ul>
                <li>{todo.todoItem.myText}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
