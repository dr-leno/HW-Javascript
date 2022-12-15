import '../App/App.css';

import { getContactList, addContact, deleteContact } from '../../services/contactsService';
import React, { Component } from 'react';
import ContactHeader from '../ContactHeader/ContactHeader';
import ContactList from '../ContactList/ContactList';
import Form from '../Form/Form';

class App extends Component {
  state = {
    contacts: [],
   
  }

componentDidMount() {
  getContactList().then((data) =>
    this.setState({
      contacts: data,
    })
  )
}

saveContact = (contact) => {
    addContact(contact).then((data) => 
    this.setState({
      contacts: [ 
        ...this.state.contacts,
        data]
    }))
}
 

deleteContact = (id) => {
  deleteContact(id).then(() =>
      this.setState({
          contacts: this.state.contacts.filter((item) => item.id !== id),
      })
  );
};

  render() {
    return (
        <>
        <table>
        <ContactHeader/>
            <ContactList
                contacts={this.state.contacts}
                onDelete={this.deleteContact}
                onEdit={this.editContact}
            />
          </table>
            <Form onSave = {this.saveContact}
            />
        </>
    );
  }
}


export default App;
