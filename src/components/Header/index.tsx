import React, { ChangeEvent, FormEvent, useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { addTodoActionCreator } from '../../store/slices/todos';

const Header = () => {
  const dispatch = useDispatch();
  const [newTodoInput, setNewTodoInput] = useState<string>('');

  const handleNewInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTodoInput(e.target.value);
  };

  const handelCreateNewInput = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newTodoInput.length) return;

    dispatch(addTodoActionCreator({ desc: newTodoInput }));
    setNewTodoInput('');
  };

  return (
    <div className='header-body'>
      <h1>TODO APP</h1>
      <form onSubmit={handelCreateNewInput}>
        <input
          type='text'
          value={newTodoInput}
          onChange={handleNewInputChange}
          placeholder='Create a new todo...'
        />
        {/* <button type='submit'>Create</button> */}
      </form>
    </div>
  );
};

export default Header;
