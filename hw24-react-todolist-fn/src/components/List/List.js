import React from 'react'
import ListElement from '../ListElement/ListElement'

export default function List({ todos, onDelete, onToggle }) {
  return (
    <ul>
        {todos.map((item) => (
                <ListElement
                    key={item.id}
                    todo={item}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
    </ul>
  )
}
