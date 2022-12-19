import React from 'react'

export default function Form({ onAdd }) {
  
    function onFormSubmit(e) {
        e.preventDefault();

        onAdd({
            title: e.target.title.value, 
            isDone: false,
        });

        console.log('value', e.target.title.value);

        e.target.reset();
    }
    
    return (
    <form onSubmit={onFormSubmit}>
        <input type="text" name="title" />
        <button>Add</button>
    </form>
  )
}
