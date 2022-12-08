import { ContactButton } from './ContactList.styled';
import { useAddContactMutation } from '..//../redux/contactsSliceApi';

export const ContactItem = ({ id, name, phone }) => {

    const [deleteContact] = useAddContactMutation()

  return (
    <>
      {name}: {phone}
      <ContactButton type="button" onClick={() => deleteContact(id) }>
        Delete
      </ContactButton>
    </>
  );
};
