import '../Form/Form.css'

import React, { Component } from 'react'

export class Form extends Component {
    state = {
        values: {
            id: '',
            name: '',
            surname: '',
            email: '',
        }
    };
    
    onInputChange = (e) => {
        const values = {
            ...this.state.values,
            [e.target.name]: e.target.value,
        };
       
        this.setState({
            values,
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave(this.state.values);

        e.target.reset();
    };

  render() {
    return (
        <form onSubmit={this.onFormSubmit}>
        <div>
            <input name="name" placeholder="Enter name"  onChange={this.onInputChange}/>
        </div>
        <div>
            <input name="surname" placeholder="Enter surname"  onChange={this.onInputChange}/>
        </div>
        <div>
            <input name="email" placeholder="Enter email"  onChange={this.onInputChange}/>
        </div>
        <button>Add</button>
    </form>
    )
  }
}

export default Form