import React, { ChangeEvent, FormEvent, useState } from 'react';
import './style.css';
import { State } from '../../type';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import {
  removeTodoActionCreator,
  toggleTodoActionCreator,
} from '../../store/slices/todos';

interface TaskItemProps {
  id: string;
  desc: string;
  isComplete: boolean;
}

const TaskItem = (props: TaskItemProps) => {
  const dispatch = useDispatch();
  const { desc, id, isComplete } = props;
  const [toggleTodo, settoggleTodo] = useState<boolean>(false);

  const handleRemove = (): void => {
    if (!id) return;

    dispatch(removeTodoActionCreator({ id: id }));
  };

  const handleToggleTodo = (): void => {
    if (!id) return;

    dispatch(toggleTodoActionCreator({ id: id, isComplete: !isComplete }));
  };

  return (
    <div className='task-item'>
      <div className='task-desc'>
        <label className='switch'>
          <input
            type='checkbox'
            onChange={handleToggleTodo}
            checked={isComplete}
          />
          <span
            className='slider'
            id='round'
            //onClick={handleToggleTodo}
          ></span>
        </label>
        <p className={`${isComplete ? 'done' : ''}`}>{desc}</p>
      </div>
      <div className='task-remove'>
        <IoClose onClick={handleRemove} />
      </div>
    </div>
  );
};

export default TaskItem;
