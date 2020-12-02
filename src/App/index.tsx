import React from 'react';
import './App.css';
import Header from '../components/Header/index';
import TaskList from '../components/TaskList';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../type';
import { dragTodoActionCreator } from '../store/slices/todos';

function App() {
  let todos = useSelector((state: State) => state.todos);
  const dispatch = useDispatch();

  let onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    let sourceIdx = parseInt(result.source.index);
    let destIdx = parseInt(result.destination.index);
    let draggedLink = todos[sourceIdx];

    let newList = todos.slice();
    newList.splice(sourceIdx, 1);
    newList.splice(destIdx, 0, draggedLink);

    dispatch(dragTodoActionCreator({ todos: newList }));
  };

  return (
    <div className='App'>
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskList todos={todos} />
      </DragDropContext>
    </div>
  );
}

export default App;
