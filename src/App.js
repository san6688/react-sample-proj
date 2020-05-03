import React from 'react';
import logo from './logo.svg';
import TaskList from './components/TaskList';
import TaskCount from './components/TaskCount';
import './App.css';

function App() {
  return (
    <div className="App">
      <TaskCount />
      <TaskList />
    </div>
  );
}

export default App;
