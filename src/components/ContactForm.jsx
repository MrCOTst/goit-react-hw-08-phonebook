import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export default function ContactForm({ formSubmitHandler }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        setId(nanoid(8));
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    formSubmitHandler(id, name, number);
    setName('');
    setNumber('');
    setId('');
  };

  return (
    <form onSubmit={handleSubmit} className="Phonebook__form">
      <label className="Phonebook__label">
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="Phonebook__input"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="Phonebook__label">
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          className="Phonebook__input"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className="Button">
        Add contact
      </button>
    </form>
  );
}
