import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from '../Form/Form';
import { Section } from '../Section/Section';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Loader } from '../Loader/Loader';

import { useFetchContactsQuery } from '../../redux/contactsRTKQ';

export function App() {
  const { data, isLoading } = useFetchContactsQuery();
  return (
    <Section title="Phonebook">
      <Form></Form>
      <Section title="Contacts">
        <Filter />
        {isLoading ? (
          <Loader size="40px" />
        ) : (
          <ContactsList contacts={data}>Contacts</ContactsList>
        )}
      </Section>
      <ToastContainer position="top-left" autoClose={10000} />
    </Section>
  );
}
