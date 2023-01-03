import { useState } from 'react';
import {
  useUpdateContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsSliceApi';
import {
  EditPhonebookForm,
  EditPhonebookLabel,
  EditPhonebookInput,
  EditPhonebookCheckbox,
  EditPhonebookCheckboxLabel,
} from './EditForm.styled';
import { localStrg } from '../../helpers/localStrg';
import { Button } from '@chakra-ui/react';

export default function EditForm({ initialValues, onSubmit }) {
  const [updateContact] = useUpdateContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const RENDER_STORAGE_KEY = 'contact-for-render-state';

  // console.log (contacts)
  let corectionContacts = contacts => {
    if (contacts)
      return contacts.filter(contact => contact.id === initialValues.id);
  };

  const contactForEdit = corectionContacts(contacts);
  // console.log(
  //   'contactForEdit:',
  //   contactForEdit.at(0).name,
  //   contactForEdit.at(0).number
  // );
  const id = initialValues.id;
  const [name, setName] = useState(contactForEdit.at(0).name);
  const [number, setNumber] = useState(contactForEdit.at(0).number);
  const [personal, setPersonal] = useState(true);

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
    updateLocalStorage();
    onSubmit();
  };

  function updateLocalStorage() {
    if (!localStrg.load(RENDER_STORAGE_KEY)) {
      addContactToLocal();
    } else {
      editContactToLocal();
    }
  }

  function addContactToLocal() {
    localStrg.save(RENDER_STORAGE_KEY, []);
    let currentContactsState = localStrg.load(RENDER_STORAGE_KEY);
    const contactsFromBack = contacts;

    localStrg.save(RENDER_STORAGE_KEY, contactsFromBack);
    currentContactsState = localStrg.load(RENDER_STORAGE_KEY);
    currentContactsState.map(contact => (contact.personal = true));
    localStrg.save(RENDER_STORAGE_KEY, currentContactsState);
  }

  function editContactToLocal() {
    let currentContactsState = localStrg.load(RENDER_STORAGE_KEY);

    let correctContactPersonIndex;
    if (currentContactsState) {
      currentContactsState.find(
        contact => contact.name === contactForEdit.at(0).name
      );
      correctContactPersonIndex = currentContactsState.findIndex(
        contact => contact.name === contactForEdit.at(0).name
      );

      if (correctContactPersonIndex < 0) {
        currentContactsState.push({ id, name, number, personal });
      } else {
        currentContactsState.splice(correctContactPersonIndex, 1, {
          id,
          name,
          number,
          personal,
        });
      }
      // console.log('currentContactsState:', currentContactsState);
      localStrg.save(RENDER_STORAGE_KEY, currentContactsState);
    }
    // console.log('correctContactPerson:', correctContactPerson);
    // console.log('correctContactPersonIndex:', correctContactPersonIndex);
  }

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
    
      <Button
        type="submit"
        colorScheme="messenger"
        borderWidth="1px"
        borderColor="messenger"
        m="12px auto 2px auto"
        p="2px 20px 4px 20px"
        fontSize="24px"
        _hover={{
          bg: 'messenger',
          color: 'white',
          borderWidth: '1px',
          borderColor: 'orange',
          fontSize: '25',
        }}
        _active={{
          bg: 'tomato',
          color: 'teal.500',
        }}
        _selected={{
          bg: 'tomato',
          color: 'white',
        }}
      >
        Save change
      </Button>
    </EditPhonebookForm>
  );
}
