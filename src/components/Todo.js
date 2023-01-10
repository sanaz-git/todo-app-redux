import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadTodo,
  deleteTodo,
  editTodo,
  updateTodo,
} from '../redux/todo/todoAction';
import { TODO_KEY } from '../redux/todo/todoReducer';
import { v4 } from 'uuid';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

import styles from './Todo.module.css';

const Todo = () => {
  //initialize dispatch
  const dispatch = useDispatch();

  const [text, setText] = useState({
    myText: '',
  });

  // const [editTodo, setEditTodo] = useState(null);

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
    if (dispatch(editTodo())) {
      dispatch(
        loadTodo({
          id: v4(),
          todoItem: text,
        }),
      );
      setText({
        myText: '',
      });
    } else {
      dispatch(updateTodo());
    }
  };

  //view data
  const items = useSelector((state) => {
    return state[TODO_KEY];
  });

  //handle delete
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // //handle edit
  const handleEdit = (id) => {
    dispatch(editTodo(id));
  };

  return (
    <>
      <div className={styles.todoContainer}>
        <div className={styles.topic}>
          <p>Todo App </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className={styles.inputContainer}
                name="myText"
                type="text"
                value={text.myText}
                onChange={handleChange}
                placeholder="Enter todos"
              />
              <button type="submit">
                <BsPlusLg />
              </button>
            </div>
          </form>
        </div>
        <div>
          {items.map((todo) => {
            return (
              <div key={todo.id} className={styles.listContainer}>
                <ul>
                  {/* <li>{todo.todoItem.myText}</li> */}
                  <li>
                    <input
                      type="text"
                      value={todo.todoItem.myText}
                      onChange={(e) => e.preventDefault()}
                    />
                  </li>
                </ul>
                {/* delete */}
                <button
                  onClick={() => handleDelete(todo.id)}
                  className={styles.deleteButton}
                >
                  <BiMinus />
                </button>
                {/* edit */}
                <button
                  onClick={() => handleEdit(todo)}
                  className={styles.editButton}
                >
                  edit
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
