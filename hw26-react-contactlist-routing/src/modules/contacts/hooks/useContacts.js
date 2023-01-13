import { useEffect, useState } from 'react';
import api from '../../../api';

export default function useContacts() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({});

  
  useEffect(()=> {
    api.get('users').then(({ data }) => 
    setContacts(data))
  },[]);

  const getContactData = (id) => {
    api.get('users/' + id).then(({ data }) => {
      setCurrentContact(data)
    });
  };

  const saveContact = (contact) => {
    console.log('saveContact', contact);
    if (contact.id) {
      return api.put('users/' + contact.id, contact);
    } else {
      delete contact.id;
      return api.post('users', contact);
    }
  };
  const deleteContact = (id) => {
    api.delete('users/' + id).then(() =>{
      setContacts(contacts.filter((item) => item.id !== id))
    })
  }

    return {
        contacts,
        saveContact,
        currentContact,
        getContactData,
        deleteContact
    }
}
