import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { ContactsTitle } from './Home.styled';

export default function Home() {
  return (
    <main>
      <Filter />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList />
    </main>
  );
}
