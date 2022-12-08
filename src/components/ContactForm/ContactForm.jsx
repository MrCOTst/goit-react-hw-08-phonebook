import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
// import { getContacts } from 'redux/selectors';
import {useGetContactsQuery, useAddContactMutation} from '..//../redux/contactsSliceApi'
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookInput,
  PhonebookButton,
} from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const dispatch = useDispatch();
  // const contact = useSelector(getContacts);

  const { data: contact, } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  // const formAddContact = (name, number) => dispatch(addContact(name, number));

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'phone':
        setPhone(event.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async value => {
    value.preventDefault();

    const normalizedName = name.toLowerCase();
    const availableContact = contact.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (availableContact) {
      NotificationManager.info(`${name} is already in contacts!`);
      return;
    } else {
      try {
        await addContact(value);
        NotificationManager.success(`${name} successfully added!`, 3000);
      } catch (error) {
        NotificationManager.error('Error adding data!');
        console.log(error);
      }
    }

    setName('');
    setPhone('');
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <PhonebookLabel>
        Name
        <PhonebookInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </PhonebookLabel>
      <PhonebookLabel>
        Number
        <PhonebookInput
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </PhonebookLabel>
      <PhonebookButton type="submit">Add contact</PhonebookButton>
    </PhonebookForm>
  );
}
