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
const StyledContainer = styled.div``;

const TaskList = (props: TodosProps) => {
  const { todos } = props;

  return (
    // <div className='container'>
    <Droppable droppableId={'1'}>
      {(provided) => (
        <StyledContainer ref={provided.innerRef} {...provided.droppableProps}>
          <div>
            <h2>Task list</h2>
            <ul style={{ padding: 'unset' }}>
              <div>
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
              </div>

              {provided.placeholder}
            </ul>

            <p className='dnd-text'>Drag and drop to reorder list</p>
          </div>
          {/* </div>  */}
        </StyledContainer>
      )}
    </Droppable>
  );
};

export default TaskList;
