import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const prepareContact = ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const addContact = createAction('contacts/add', prepareContact);
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

export { addContact, deleteContact, changeFilter };
