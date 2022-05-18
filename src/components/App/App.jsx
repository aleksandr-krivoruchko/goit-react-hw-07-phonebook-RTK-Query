import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from '../Form/Form';
import { Section } from '../Section/Section';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from "../Filter/Filter";
import {useFetchContactsQuery } from "../../redux/contactsRTKQ";

export function App() {
    const { data, error, isLoading } = useFetchContactsQuery();
  return (
    <Section title="Phonebook">
            <Form></Form>
      <Section title="Contacts">
        <Filter/>
      <ContactsList contacts={data}>Contacts</ContactsList>
      </Section>
      <ToastContainer position="top-left" autoClose={3000} />
    </Section>)
}