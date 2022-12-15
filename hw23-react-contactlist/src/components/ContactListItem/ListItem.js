import React, { Component } from 'react'

export class ListItem extends Component {

    onDeleteClick = () => {
        this.props.onDelete(this.props.contact.id)
    };
    
    onEditClick = () => {
        this.props.onEdit(this.props.contact)
    };

  render() {
    return (
        <tr>
        <td >{this.props.contact.name}</td>
        <td >{this.props.contact.surname}</td>
        <td >{this.props.contact.email}</td>
        <td >
            <button onClick={this.onDeleteClick}>X</button>
            <button onClick={this.onEditClick}>Edit</button>
        </td>  
    </tr>
    )
  }
}

export default ListItem