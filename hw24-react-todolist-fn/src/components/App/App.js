import './App.css';

import { getList, createElement, deleteElement, updateElement } from '../../services/todoServices';
import { useEffect, useState } from 'react';

import List from '../List/List';
import Form from '../Form/Form';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getList().then(setTodos);
}, []);
  
  function addTodo(newTodo) {
    createElement(newTodo).then((data) => {
      setTodos([...todos, data]);
      console.log('todo', data);
    });
    
  }
  function deleteTodo(id) {
    deleteElement(id).then(
      setTodos(todos.filter((item) => item.id !== id))
      );
  }

  function toggleTodo(id) {
    const todo = todos.find((item) => item.id === id);

    updateElement({ ...todo, isDone: !todo.isDone }).then((data) => {
        setTodos(todos.map((item) => (item.id === id ? data : item)));
    });
}


  return (
    <div className='container'>
        <List todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
            <Form onAdd={addTodo} />
    </div>
  );
}

export default App;
