import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import * as contactsOperations from '../../redux/contacts/contactsOperations';
import { useFilter } from '../../redux/slice.js';

import { Contact } from '../Contact/Contact';

import { useFetchContactsQuery } from '../../redux/contacts/contactsRTKQ';

export function ContactsList() {
  const { filteredContacts, deleteContact } = useFilter();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useFetchContactsQuery();
  console.log(data);

  //   useEffect(() => {
  //     dispatch(contactsOperations.fetchContacts());
  //   }, [dispatch]);

  return (
    <ul>
      {filteredContacts.map(({ number, name, id }) => (
        <Contact
          key={number}
          number={number}
          name={name}
          id={id}
          deleteContact={() => deleteContact(id)}
        />
      ))}
    </ul>
  );
}
