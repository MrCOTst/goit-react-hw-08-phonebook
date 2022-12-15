import { useState } from 'react';
import { useUpdateContactMutation } from '../../redux/contactsSliceApi';
import {
  EditPhonebookForm,
  EditPhonebookLabel,
  EditPhonebookInput,
  EditPhonebookButton,
  EditCheckbox,
} from './EditForm.styled';

export default function EditForm({ initialValues, onSubmit }) {
  const [updateContact] = useUpdateContactMutation();
  const [name, setName] = useState(initialValues.name);
  const [phone, setPhone] = useState(initialValues.phone);
  const [personal, setPersonal] = useState(initialValues.personal);

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

    try {
      await updateContact({ id: initialValues.id, name, phone, personal });
    } catch (error) {
      console.log(error);
    }
    onSubmit();
  };

  return (
    <EditPhonebookForm onSubmit={handleSubmit}>
      Personal contact
      <EditCheckbox
        type="checkbox"
        checked={personal}
        onChange={() => setPersonal(!personal)}
      />
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
          value={phone}
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
