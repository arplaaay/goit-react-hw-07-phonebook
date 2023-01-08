import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import { Contacts } from './ContactList.styled';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { getVisibleContacts } from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const deleteContactItem = contactId => dispatch(deleteContact(contactId));
  const contacts = useSelector(getVisibleContacts);
  console.log(contacts);
  return (
    <Contacts>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem
          key={id}
          name={name}
          number={phone}
          onDeleteContact={() => deleteContactItem(id)}
        />
      ))}
    </Contacts>
  );
};

export default ContactList;
