import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../../redux-toolkit-comparison/src/type';
import './style.css';
import TaskItem from '../TaskItem/index';

const TaskList = () => {
  const todos = useSelector((state: State) => state.todos);

  return (
    <div className='container'>
      <div>
        <h2>Task list</h2>
        <ul style={{ padding: 'unset' }}>
          {todos.map((todo, i) => {
            return (
              <TaskItem
                key={i}
                id={todo.id}
                desc={todo.desc}
                isComplete={todo.isComplete}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
