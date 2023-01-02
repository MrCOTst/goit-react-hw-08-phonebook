import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  useGetContactsQuery,
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

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [personal, setPersonal] = useState(true);
  const navigate = useNavigate();
  const closeForm = () => navigate('/');

  const { data: contact } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();

  const RENDER_STORAGE_KEY = 'contact-for-render-state';

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

        if (!localStrg.load(RENDER_STORAGE_KEY)) {
          localStrg.save(RENDER_STORAGE_KEY, []);
          return;
        }

        let curentState = localStrg.load(RENDER_STORAGE_KEY);

        curentState.push({
          name,
          number,
          personal,
        });
        localStrg.save(RENDER_STORAGE_KEY, curentState);

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

    setName('');
    setNumber('');
    closeForm(false);
  };

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