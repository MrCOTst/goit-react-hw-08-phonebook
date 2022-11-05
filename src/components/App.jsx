import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import './Phonebook.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const availableContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (availableContact) {
      alert(`${name} is already in contacts`);
      // console.log(typeof availableContact)
    } else {
      const contact = {
        id: nanoid(8),
        name,
        number,
      };
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    // console.log('App componentDidMount');
    const contact = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contact);

    this.setState({ contacts: parsedContacts });

    // console.log(contact);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      // console.log ('Update contacts!!!')

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    // console.log('prevState', prevState);
    // console.log('this.state', this.state);
  }

  render() {
    const { filter, contacts } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="Phonebook">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        {contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
