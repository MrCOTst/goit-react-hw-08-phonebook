import { useState } from 'react';


import {
  EditPhonebookForm,
  EditPhonebookLabel,
  EditPhonebookInput,
  EditPhonebookButton,
  EditCheckbox
} from './EditForm.styled';

export default function EditForm(value, { handleUpdateContact }, loading) {
  const [name, setName] = useState(value.name);
  const [phone, setPhone] = useState(value.phone);
  const [personal, setPersonal] = useState(value.personal);

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'phone':
        setPhone(event.target.value);
        break;

      case 'checked':
        setPersonal(event.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleUpdateContact();
  };

  return (
    <EditPhonebookForm onSubmit={handleSubmit}>
      <EditCheckbox
        type="checkbox"
        checked={personal}
        onChange={handleChange}
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
