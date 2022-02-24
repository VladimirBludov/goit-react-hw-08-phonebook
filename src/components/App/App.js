import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from '../ContactForm';
import Contacts from '../Contacts';
import FindContacts from '../FindContacts';
import Section from '../Section';
import { TitleProject } from './App.styles';

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    // const isContact = checkContact(name);
    // if (isContact) {
    //   toast.error(`${name} is already in contacts.`);
    //   return;
    // }
    // const contact = {
    //   id: shortid.generate(),
    //   name,
    //   number,
    // };
    // setContacts([...contacts, contact]);
  };

  const getFilter = e => setFilter(e.target.value);

  // const checkContact = name => {
  //   const normalizedName = name.toLowerCase();
  //   return contacts.find(
  //     contact => contact.name.toLowerCase() === normalizedName
  //   );
  // };

  return (
    <div>
      <TitleProject>Phonebook</TitleProject>
      <Section>
        <ContactForm addContact={addContact} />
      </Section>
      <Section title="Contacts">
        <FindContacts filter={filter} onChange={getFilter} />
        <Contacts />
      </Section>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
}
