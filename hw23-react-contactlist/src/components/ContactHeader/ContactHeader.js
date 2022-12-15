import React, { Component } from 'react'

export class ContactHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>E-mail</th>
            <th>Actions</th>
        </tr>
      </thead>
    )
  }
}

export default ContactHeader