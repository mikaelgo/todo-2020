import React from 'react';
import './style.css';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import {
  removeTodoActionCreator,
  toggleTodoActionCreator,
} from '../../store/slices/todos';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

interface TaskItemProps {
  id: string;
  desc: string;
  isComplete: boolean;
  index: number;
}
const StyledContainer = styled.div<{ isDragging: boolean }>`
  //   width: 20%;
  //   margin: auto;
  //   border: 2px solid black;
  //   border-radius: 0.5rem;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   background: rgb(37, 40, 60);
  //   color: rgb(150, 154, 174);

  //   @media only screen and (max-width: 768px) {
  //     width: 80%;
  //   }
`;
const TaskItem = (props: TaskItemProps) => {
  const dispatch = useDispatch();
  const { desc, id, isComplete, index } = props;

  const handleRemove = (): void => {
    if (!id) return;

    dispatch(removeTodoActionCreator({ id: id }));
  };

  const handleToggleTodo = (): void => {
    if (!id) return;

    dispatch(toggleTodoActionCreator({ id: id, isComplete: !isComplete }));
  };

  return (
    <Draggable draggableId={`${index}`} index={index}>
      {(provided, snapshot) => (
        <StyledContainer
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='task-item'>
            <div className='task-desc'>
              <label className='switch'>
                <input
                  type='checkbox'
                  onChange={handleToggleTodo}
                  checked={isComplete}
                />
                <span className='slider' id='round'></span>
              </label>
              <p className={`${isComplete ? 'done' : ''}`}>{desc}</p>
            </div>
            <div className='task-remove'>
              <IoClose onClick={handleRemove} />
            </div>
          </div>
        </StyledContainer>
      )}
    </Draggable>
  );
};

export default TaskItem;
