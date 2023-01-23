import { Box, Button, Paper, TextField } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, createContact, editContact } from '../../../store/contactsSlice';

const EMPTY_USER = {
    name: '',
    surname: '',
    email: '',
}

function UserForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();


  const [contact, setContact] = useState(EMPTY_USER);
  const contacts = useSelector(selectContacts);
  const { id } = useParams();

  console.log('contact', contact);
  

  useEffect(() => {
    if (id) {
      const currentContact = contacts.find(item => item.id === id);
      setContact({ ...currentContact });
    } else { setContact(EMPTY_USER); }

  },[id, contacts])

  function onFormSubmit(e) {
    e.preventDefault();

    if (contact.id) {
      dispatch(editContact(contact))
    } else { dispatch(createContact(contact)) }

    navigate('..');
  }

    function onInputChange(e) {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  }

  return (
    <Paper>
      <Box
        onSubmit={onFormSubmit}
        component="form"
        sx={{
          '& .MuiTextField-root, button': {
            m: 1,
            maxWidth: '-webkit-fill-available',
          },
        }}
      >
        <TextField
          name="name"
          label="Name"
          value={contact.name || ""}
          onChange={onInputChange}
          
          fullWidth
         
        />
        <TextField
          name="surname"
          label="Surname"
          value={contact.surname || ""}
          onChange={onInputChange}
          
          fullWidth
          
        />
        <TextField
          name="email"
          label="Email"
          value={contact.email || ""}
          onChange={onInputChange}
         
          fullWidth
          
        />
        <Button variant="text" color="error" to=".." component={NavLink}>
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          color="primary"
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
}

export default UserForm;
