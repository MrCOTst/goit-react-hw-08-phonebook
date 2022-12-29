import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  useGetContactsQuery,
  // useAddContactMutation,
  useCreateContactMutation,
} from '..//../redux/contactsSliceApi';
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookInput,
  PhonebookButton,
  PhonebookCheckbox,
  PhonebookCheckboxLabel,
} from './ContactForm.styled';
import { localStrg } from '../../helpers/localStrg';
// import addContactToLocal from '../../helpers/addStateToLocalStor'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [personal, setPersonal] = useState(true);
  const navigate = useNavigate();
  const closeForm = () => navigate('/');
  // const STORAGE_KEY = 'contact-state';
  // let data = {};
  // console.log('personal:', personal);

  const { data: contact } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        return;
    }
  };
  // console.log('name:', name)
  const handleSubmit = async e => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();
    const availableContact = contact.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (availableContact) {
      toast.info(`${name} is already in contacts!`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else {
      try {
        // console.log('contact form:', { name, number });
        // console.log('contact:', contact)
        await createContact({ name, number });
        // data[contact.id, personal]
        // data = {name, number, personal};
        localStrg.save('currentContact', { name, number, personal });

        // localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        // console.log('contact:', { name, number });
        // console.log('contact:', contact)
        toast.success(`${name} successfully added!`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } catch (error) {
        toast.error('Error adding data!', {
          position: toast.POSITION.TOP_LEFT,
        });
        console.log(error);
      }
    }
    addContactToLocal();

    setName('');
    setNumber('');
    closeForm(false);
  };
  

  function addContactToLocal() {

    if (!localStrg.load('keyContactsStore')) {
      localStrg.save('keyContactsStore', []);
      // console.log(localStrg.load('keyContactsStore'))
      let currentContactsState = localStrg.load('keyContactsStore');
      const currentContact = localStrg.load('currentContact');
      // console.log('currentContact befor if:', currentContact);
      // console.log('currentContactsState befor if:', currentContactsState);
      (currentContactsState = [currentContact]);
      localStrg.save('keyContactsStore', currentContactsState);
    } else {
      let currentContactsState = localStrg.load('keyContactsStore');
      const currentContact = localStrg.load('currentContact');
      currentContactsState.push(currentContact);
      localStrg.save('keyContactsStore', currentContactsState);
    }

  }

  // function addContactToLocal() {
  //   let currentContactsState = localStrg.load('keyContactsStore');
  //   const currentContact = localStrg.load('currentContact');
  //   let contactToAddToLib;
  //   if (currentContactsState) {
  //     contactToAddToLib = currentContactsState.find(
  //       contact => contact.name === currentContact.name
  //     );
  //   }

  //   if (!currentContactsState) {
  //     if (contactToAddToLib) currentContactsState = [currentContact];
  //   } else currentContactsState.push(currentContact);
  //   localStrg.save('keyContactsStore', currentContactsState);

  // }

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <PhonebookCheckboxLabel>
        <PhonebookCheckbox
          type="checkbox"
          checked={personal}
          onChange={() => setPersonal(!personal)}
        />
        Personal contact
      </PhonebookCheckboxLabel>
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
          name="number"
          value={number}
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
