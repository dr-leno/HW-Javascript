import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ContactItem({ contact, onDelete }) {
  function deleteContact() {
    onDelete(contact.id)
  } 

  return (
    <div className="row">
    <div className="cell">{contact.name}</div>
    <div className="cell">{contact.surname}</div>
    <div className="cell">{contact.email}</div>
    <div className="cell">
      <NavLink to={`/edit/${contact.id}`}>
        <button className="edit-btn">
        Edit
      </button>
      </NavLink>
      <button className="delete-btn" onClick={deleteContact}>
        Delete
      </button>
    </div>
  </div>
  )
}
