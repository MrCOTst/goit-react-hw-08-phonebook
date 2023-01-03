import {
  ContactItem,
  ContactButton,
  ContactSpanDiv,
  ContactButtonDiv,
} from './Contact.styled';
import { useDeleteContactMutation } from '../../redux/contactsSliceApi';
import { useNavigate } from 'react-router-dom';
import { RiFunctionFill } from 'react-icons/ri';
import { RiStarSFill } from 'react-icons/ri';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';
import { localStrg } from '../../helpers/localStrg';

export default function Contact({ id, name, number }) {
  // console.log('name:', {name, phone, id})
  const navigate = useNavigate();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const RENDER_STORAGE_KEY = 'contact-for-render-state';

  let currentContactsState = localStrg.load(RENDER_STORAGE_KEY);
  let personal = true;

  if (currentContactsState) {
    personal = currentContactsState.find(
      contact => contact.name === name
    ).personal;
    // console.log('personal', personal)
  }

  const handleDelete = async () => {
    try {
      await deleteContact(id);
    } catch (error) {
      console.log(error);
    }

    deleteContactFromLocal();
  };

  function deleteContactFromLocal() {
    let currentContactsState = localStrg.load(RENDER_STORAGE_KEY);
    let correctContactPersonIndex;
    if (currentContactsState) {
      currentContactsState.find(contact => contact.name === name);
      correctContactPersonIndex = currentContactsState.findIndex(
        contact => contact.name === name
      );
      currentContactsState.splice(correctContactPersonIndex, 1);
      // console.log('currentContactsState:', currentContactsState);
      localStrg.save(RENDER_STORAGE_KEY, currentContactsState);
    }
  }

  return (
    <ContactItem
      style={
        personal === false
          ? { backgroundColor: ` #e1c7e9` }
          : { backgroundColor: `#00fff2` }
      }
    >
      {personal === false ? (
        <RiFunctionFill
          style={{
            width: 24,
            height: 24,
          }}
        />
      ) : (
        <RiStarSFill
          style={{
            color: `orange`,
            width: 24,
            height: 24,
          }}
        />
      )}

      <ContactSpanDiv>
        <span>{name} :</span> <span>{number}</span>
      </ContactSpanDiv>

      <ContactButtonDiv>
        <ContactButton
          type="button"
          onClick={handleDelete}
          disabled={isLoading}
        >
          <RiDeleteBin5Line
            style={{
              color: `orange`,
              width: 24,
              height: 24,
            }}
          />
          Delete
        </ContactButton>
        <ContactButton type="button" onClick={() => navigate(`/${id}`)}>
          <RiEdit2Fill
            style={{
              color: `orange`,
              width: 24,
              height: 24,
            }}
          />
          Edit
        </ContactButton>
      </ContactButtonDiv>
    </ContactItem>
  );
}
