import './ListElement.css'

import React from 'react'

export default function ListElement({ todo, onDelete, onToggle }) {
  
    function handleDeleteBtnClick(e) {
    onDelete(todo.id);
    
    console.log('todo id', todo.id);
  }
  function handleListElClick(e) {
    onToggle(todo.id);
    console.log('toggle todo', todo.id);
  }
  
  
    return (
    <li className={'task-item' + (todo.isDone ? ' done' : '')} onClick={handleListElClick}>
        {todo.title}
        <button onClick={handleDeleteBtnClick}>X</button>
    </li>
  )
}
