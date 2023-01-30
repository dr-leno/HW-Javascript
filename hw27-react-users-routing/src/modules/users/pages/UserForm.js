import { Box, Button, Paper, TextField } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import useUserForm from '../hooks/useUserForm';

const EMAIL_VALIDATION_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function UserForm() {
  const { id } = useParams();
  const { user, changeUser, saveUser } =
    useUserForm(id);
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    validate(user)
  },[user])

  const navigate = useNavigate();

  function onInputChange(e) {
    changeUser({ [e.target.name]: e.target.value });
  }

  function onInputBlur(e) {
    setTouched({ ...touched, [e.target.name]: true})
  }

  function validate(values) {
    const errors = {};

    if (values.name === '') {
      errors.name = 'Name is required';
    }
    if (values.surname === '') {
      errors.surname = 'Surname is required';
    }
    if (!EMAIL_VALIDATION_REGEX.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    if (values.email === '') {
      errors.email = 'Email is required';
    }

    setErrors(errors)
  }
  function onFormSubmit(e) {
    e.preventDefault();

    saveUser(user).then(() => {
      navigate('..');
    });
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
          sx={{ marginBottom: 2 }}
          name="name"
          label="Name"
          value={user.name}
          onChange={onInputChange}
          onBlur={onInputBlur}
          helperText = {touched.name && errors.name}
          fullWidth
          error={touched.name && !!errors.name} 
        />
        <TextField
          name="surname"
          label="Surname"
          value={user.surname}
          onChange={onInputChange}
          onBlur={onInputBlur}
          helperText = {touched.surname && errors.surname}
          fullWidth
          error={touched.surname && !!errors.surname} 
        />
        <TextField
          name="email"
          label="Email"
          value={user.email}
          onChange={onInputChange}
          onBlur={onInputBlur}
          helperText = {touched.email && errors.email}
          fullWidth
          error={touched.email && !!errors.email}          
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
