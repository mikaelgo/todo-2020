import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { State, Todo } from '../../../../redux-toolkit-comparison/src/type';
import './style.css';
import TaskItem from '../TaskItem/index';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

interface TodosProps {
  todos: Todo[];
}

const TaskList = (props: TodosProps) => {
  const { todos } = props;

  console.log('TODOS', todos);

  const StyledContainer = styled.div``;

  //   background-color: #e0ffff;
  //     padding: 15px;
  //     width: 25%;

  return (
    <div className='container'>
      <div>
        <h2>Task list</h2>
        <ul style={{ padding: 'unset' }}>
          <Droppable droppableId={'1'}>
            {(provided) => (
              <StyledContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {todos.map((todo, i) => {
                  return (
                    <TaskItem
                      key={i}
                      id={todo.id}
                      desc={todo.desc}
                      isComplete={todo.isComplete}
                      index={i}
                    />
                  );
                })}
                {provided.placeholder}
              </StyledContainer>
            )}
          </Droppable>
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
