import './Form.css';

import React, { Component } from 'react';


export class Form extends Component {

    onFormSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.elements.title.value);

        this.props.onSave(e.target.elements.title.value);

        e.target.reset();
    };

  render() {
    return (
        <form onSubmit={this.onFormSubmit}>
            <input name="title" placeholder="Add Task" />
            <button>Save</button>
        </form>
    )
  }
}

export default Form