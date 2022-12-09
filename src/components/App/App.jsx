import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Phonebook } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-notifications/lib/notifications.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Phonebook>

      <ToastContainer />
    </>
  );
}
