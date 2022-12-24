import { useState } from 'react';
import { useUpdateContactMutation,
  useGetContactsQuery
 } from '../../redux/contactsSliceApi';
import {
  EditPhonebookForm,
  EditPhonebookLabel,
  EditPhonebookInput,
  EditPhonebookButton,
  EditPhonebookCheckbox,
  EditPhonebookCheckboxLabel
} from './EditForm.styled';

export default function EditForm({ initialValues, onSubmit }) {
  const [updateContact] = useUpdateContactMutation();
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  let corectionContacts = (contacts) => {
    if (contacts)
    return contacts.filter(contact =>
      contact.id === initialValues.id)
       
  };
  
  const contactForEdit = corectionContacts (contacts);
  console.log('contactForEdit:', contactForEdit.at(0).name, contactForEdit.at(0).number)

  const [name, setName] = useState(contactForEdit.at(0).name);
  const [number, setNumber] = useState(contactForEdit.at(0).number);
  const [personal, setPersonal] = useState('');

  



// contactForEdit.map(({name, number})) => {
//   setName(name);
//   setNumber(number)
// }


  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'phone':
        setNumber(event.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async value => {
    value.preventDefault();

    try {
      await updateContact({ id: initialValues.id, name, number });
    } catch (error) {
      console.log(error);
    }
    onSubmit();
  };

  return (
    <EditPhonebookForm onSubmit={handleSubmit}>
      <EditPhonebookCheckboxLabel>
        <EditPhonebookCheckbox
          type="checkbox"
          checked={personal}
          onChange={() => setPersonal(!personal)}
        />
        Personal contact
      </EditPhonebookCheckboxLabel>
      <EditPhonebookLabel>
        Name
        <EditPhonebookInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </EditPhonebookLabel>
      <EditPhonebookLabel>
        Number
        <EditPhonebookInput
          type="tel"
          name="phone"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </EditPhonebookLabel>
      <EditPhonebookButton type="submit">Save change</EditPhonebookButton>
    </EditPhonebookForm>
  );
}
