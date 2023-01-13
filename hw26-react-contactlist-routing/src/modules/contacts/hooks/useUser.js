import { useEffect, useState } from 'react';
import api from '../../../api';

export default function useUser(id) {
  const [currentContact, setCurrentContact] = useState({});

  useEffect(()=> {
    api.get('users/' + id).then(({ data }) => setCurrentContact(data));
  },[id])

  const saveContact = (contact) =>{
    if (contact.id) {
      return api.put(contact.id, contact);
    } else {
      delete contact.id;
      return api.post('', contact);
    }

  }


    return {
        currentContact,
        saveContact
    }
}
