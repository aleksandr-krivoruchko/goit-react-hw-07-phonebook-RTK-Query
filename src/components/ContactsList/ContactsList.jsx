import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
// import { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } from '../../redux/contactsRTKQ';

export function ContactsList({contacts}) {
//   const { data, error, isLoading } = useFetchContactsQuery();
  const filterValue = useSelector(state => state.filter);
  

  return (
    <ul>
      {contacts && filterContacts(contacts, filterValue).map(({ number, name, id }) => (
        <Contact
          key={number}
          number={number}
          name={name}
          id={id}
        />
      ))}
    </ul>
  );
}

  function filterContacts(contacts, filterValue) {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }

