import React, { Component } from 'react'
import ListItem from '../ContactListItem/ListItem'

export class ContactList extends Component {
    
  render() {
    return (
        <tbody>{this.props.contacts.map((item) => (
            <ListItem  
            key={item.id}
            contact={item}
            onDelete={this.props.onDelete}
            onEdit={this.props.onEdit}
        />
        ))}
        </tbody>
    )
  }
}

export default ContactList