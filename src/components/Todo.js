import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  loadTodo,
  deleteTodo,
  handleEditSubmit,
} from '../redux/todo/todoAction';
import { TODO_KEY } from '../redux/todo/todoReducer';
import { v4 } from 'uuid';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { BiEditAlt } from 'react-icons/bi';
import { FiRefreshCcw } from 'react-icons/fi';
import { BsFillBackspaceReverseFill } from 'react-icons/bs';

import styles from './Todo.module.css';

const Todo = () => {
  //initialize dispatch
  const dispatch = useDispatch();

  const [text, setText] = useState([
    {
      myText: '',
    },
  ]);

  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const [editTodo, setEditTodo] = useState('');

  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  //cancel
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

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
    let inputObj = {
      id: v4(),
      todoItem: text,
    };
    dispatch(loadTodo(inputObj));

    setText({
      myText: '',
    });
  };

  //handle editSubmit
  const editSubmit = (e) => {
    e.preventDefault();
    let editObj = {
      id: editTodo.id,
      todo: editValue,
    };
    dispatch(handleEditSubmit(editObj));
    updateToast();
  };

  //view data
  const items = useSelector((state) => {
    return state[TODO_KEY];
  });
  console.log(items);

  //handle delete
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    deleteToast();
  };

  // //handle edit
  const handleEdit = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  //toast
  const addToast = () => {
    toast.success('Todo Add Successfully');
  };
  const updateToast = () => {
    toast.success('Todo Update Successfully');
  };
  const deleteToast = () => {
    toast.info('Todo Done Successfully');
  };

  return (
    <>
      <div className={styles.todoContainer}>
        <div className={styles.topic}>
          <p>Todo App </p>
        </div>
        <div>
          {editFormVisibility === false ? (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className={styles.inputContainer}
                  name="myText"
                  type="text"
                  value={text.myText || ''}
                  onChange={handleChange}
                  placeholder="Enter todos"
                />
                <button type="submit" onClick={addToast}>
                  <BsPlusLg />
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={editSubmit}>
              <div>
                <input
                  className={styles.inputContainer}
                  name="myText"
                  type="text"
                  value={editValue || ''}
                  onChange={(e) => setEditValue(e.target.value)}
                  placeholder="Update todos"
                />
                <button type="submit">
                  <FiRefreshCcw />
                </button>
                <button
                  type="button"
                  onClick={cancelUpdate}
                  className={styles.cancelButton}
                >
                  <BsFillBackspaceReverseFill />
                </button>
              </div>
            </form>
          )}
        </div>
        <div>
          {Array.from(items).map((todo) => {
            return (
              <div key={todo.id} className={styles.listContainer}>
                <ul>
                  <li>{todo.todoItem.myText}</li>
                </ul>
                <div>
                  {editFormVisibility === false && (
                    <>
                      <button
                        onClick={() => handleDelete(todo.id)}
                        className={styles.deleteButton}
                      >
                        <BiMinus />
                      </button>
                      <button
                        onClick={() => handleEdit(todo)}
                        className={styles.editButton}
                      >
                        <BiEditAlt />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
