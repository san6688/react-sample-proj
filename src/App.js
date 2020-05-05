import React from 'react';
import logo from './logo.svg';
import TaskList from './components/TaskList';
import TaskCount from './components/TaskCount';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <TaskCount />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
