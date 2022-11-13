import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './Phonebook.css';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  
 const formSubmitHandler = (id, name, number) => {

  const normalizedName = name.toLowerCase();
    const availableContact = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (availableContact) {
      alert(`${name} is already in contacts`);
      return
    }; 
     
  // console.log('befor setContacts', contacts)
    setContacts( state =>  [{ id, name, number }, ...state])
    // console.log('submit after setContacts', contacts );
    // console.log(contacts.length)
      };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId)
    );
  };

  const getVisibleContacts = () => {
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
 
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="Phonebook">
      <h1>Phonebook</h1>
      <ContactForm formSubmitHandler={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length > 0 && (
        <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
      )}
    </div>
  );
}
