import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const lists = useSelector((state) => state.lists);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete === false)
          .map((list, index) => (
            <li key={index}>{list.name}</li>
          ))}
      </ul>
      <h2>完了のTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete === true)
          .map((list, index) => (
            <li key={index}>{list.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
