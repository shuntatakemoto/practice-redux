import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const doneList = (name) => {
    dispatch({ type: 'DONE_LIST', payload: name });
  };
  const deleteList = (name) => {
    dispatch({ type: 'DELETE_LIST', payload: name });
  };
  const [name, setName] = useState('');
  const [complete, setComplete] = useState(false);
  const inputText = (e) => {
    setName(e.target.value);
  };
  const addList = () => {
    if (!name) return;
    setComplete(false);
    dispatch({ type: 'ADD_LIST', payload: { name, complete } });
    setName('');
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input type="text" value={name} onChange={inputText} />
      <button onClick={addList}>追加</button>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete === false)
          .map((list, index) => (
            <li key={index}>
              {list.name}
              <button onClick={() => doneList(list.name)}>完了</button>
              <button onClick={() => deleteList(list.name)}>削除</button>
            </li>
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
