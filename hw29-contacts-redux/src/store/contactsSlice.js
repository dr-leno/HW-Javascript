import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const INITIAL_STATE = {
	contacts: [],
}

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState: INITIAL_STATE,
	reducers: {
		setContacts: (state, { payload }) => {
			state.contacts = payload;
		},
		updateContact: (state, { payload }) => {
			state.contacts = state.contacts.map((item) => item.id === payload.id ? payload : item);
		},
		removeContact: (state, { payload }) => {
			state.contacts = state.contacts.filter((item) => item.id === payload.id);
		},
		addContact: (state, { payload }) => {
			state.contacts.push(payload);
		},
	}
})

export const { setContacts, updateContact, removeContact, addContact } = contactsSlice.actions;

export default contactsSlice.reducer;

export function getList() {
	return (dispatch) => {
		api.get('users').then(({ data }) => dispatch(setContacts(data)));
	}
}

export function selectContacts({contacts}) {
	return contacts.contacts;
}

export function createContact(newContact) {
	return (dispatch) => {
		api.post('users', {
			...newContact
		}).then(({ data }) => dispatch(addContact(data)));
	}
}

export function editContact(updatedContact) {
	return (dispatch) => {

      	api.put('users/' + updatedContact.id, { ...updatedContact }).then(
				({ data }) => dispatch(updateContact(data))
			);
	}
}

export function deleteContact(id) {
	return (dispatch) => {
		api.delete('users/' + id).then(() => dispatch(removeContact(id)));
	}
}