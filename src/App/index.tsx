import React from 'react';
import './App.css';
import Header from '../components/Header/index';
import TaskList from '../components/TaskList';

function App() {
  return (
    <div className='App'>
      <Header />
      <TaskList />
    </div>
  );
}

export default App;