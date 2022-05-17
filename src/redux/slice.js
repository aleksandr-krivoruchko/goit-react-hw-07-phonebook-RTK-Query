import { useDispatch, useSelector } from 'react-redux';
import { checkExistingContact } from '../services/checkContact';
import * as contactsOperations from './contacts/contactsOperations';
import { useFetchContactsQuery } from '../redux/contacts/contactsRTKQ';

//!=============Selectors==========================
export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.filter;

//!============Hooks=============================
export const useFilter = () => {
  //   const contacts = useSelector(getContacts);
  //   const filterValue = useSelector(getFilterValue);
  //   const dispatch = useDispatch();

  const { contacts, error, isLoading } = useFetchContactsQuery();

  //   function filterContacts() {
  //     const normalizedFilter = filterValue.toLowerCase();
  //     return contacts.filter(({ name }) =>
  //       name.toLowerCase().includes(normalizedFilter)
  //     );
  //   }

  return {
    //  filteredContacts: filterContacts(),
    filteredContacts: contacts,

    //  deleteContact: id => dispatch(contactsOperations.removeContact(id)),
  };
};

export const useAddContact = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  function addContact(name, number) {
    if (checkExistingContact(name, contacts)) {
      return;
    }
    const contact = {
      name,
      number,
    };
    dispatch(contactsOperations.addContact(contact));
  }

  return addContact;
};
