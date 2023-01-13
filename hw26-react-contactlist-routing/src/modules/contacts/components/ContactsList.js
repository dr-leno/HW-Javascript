import React from 'react';
import ContactItem from './ContactItem';

export default function ContactsList({ contacts, onDelete }) {

  return (
    <div className='table-body'>
        {contacts.map((item) => (
        <ContactItem
          key={item.id}
          contact={item}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
