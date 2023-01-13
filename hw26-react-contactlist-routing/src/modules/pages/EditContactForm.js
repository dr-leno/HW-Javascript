import React, { useEffect } from 'react';
import Form from '../contacts/components/Form';
import useContacts from '../contacts/hooks/useContacts';
import { useParams } from 'react-router-dom';

export default function EditContactForm() {
  const { userId } = useParams();
  const { currentContact, getContactData } = useContacts();

  useEffect(() => getContactData(userId), [userId]);
  console.log('userId', userId);

  return (
    <Form contact={currentContact}/>
  )
}
