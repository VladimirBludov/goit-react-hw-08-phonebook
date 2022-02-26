import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from '../ContactForm';
import Contacts from '../Contacts';
import FindContacts from '../FindContacts';
import Section from '../Section';
import { TitleProject } from './App.styles';

export default function App() {
  return (
    <div>
      <TitleProject>Phonebook</TitleProject>
      <Section>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <FindContacts />
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
