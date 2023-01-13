import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ContactsHeader from '../contacts/components/ContactsHeader';
import ContactsList from '../contacts/components/ContactsList';
import useContacts from '../contacts/hooks/useContacts';
import '../css/Contacts.css';


export default function Contacts() {
  const navigate = useNavigate();

  const { deleteContact, contacts } = useContacts();

  return (
    <div className='container'>
        <button onClick={() => navigate('/add')}>Create Contact</button>
        <ContactsHeader/>
        <ContactsList contacts ={contacts} onDelete = {deleteContact}/>
        <Outlet/>
    </div>
  )
}
