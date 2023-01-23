import React from 'react';
import { createTodo } from '../store/actions/todos';
import { useDispatch } from 'react-redux';

function TodoForm() {
    const dispatch = useDispatch();

    function onFormSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: Date.now(),
            title: e.target.elements.title.value,
            isDone: false,
        };
        
        dispatch(createTodo(newTodo));
        e.target.reset();
    }
    return (
        <div className="row">
            <form onSubmit={onFormSubmit}>
                <div className="ten columns">
                    <input type="text" className="u-full-width" name="title" />
                </div>
                <div className="two columns">
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
