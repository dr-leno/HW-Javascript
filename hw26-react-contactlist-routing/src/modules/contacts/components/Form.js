import React from 'react';
import useContacts from '../hooks/useContacts';
import { useNavigate } from 'react-router-dom';

export default function Form({ contact }) {
    const navigate = useNavigate();
    const { saveContact } = useContacts();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target.elements;
    
        saveContact({
          id: form.id.value,
          name: form.name.value,
          surname: form.surname.value,
          email: form.email.value,
        }).then(({ data }) => {
          console.log('save on server', data);
          navigate('/contacts')
        });
      };
  return (
    <>
   <form className="form" onSubmit={ onFormSubmit}>
        <div className="form-comp">
          <input name="id" type="hidden" defaultValue={contact && contact.id}/>
          <input
            name="name"
            placeholder="Name"
            type="text"
            defaultValue={contact && contact.name}
          />
        </div>
        <div className="form-comp">
          <input
            name="surname"
            placeholder="Surname"
            type="text"
            defaultValue={contact && contact.surname}
          />
        </div>
        <div className="form-comp">
          <input
            name="email"
            placeholder="Email"
            type="text"
            defaultValue={contact && contact.email}
          />
        </div>
        <div className="form-comp">
          <button className="save-btn">Save</button>
        </div>
      </form>
   </>
  )
}
