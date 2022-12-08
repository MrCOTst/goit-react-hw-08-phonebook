import { ContactButton } from './ContactItem.styled';
import { useDeleteContactMutation } from '..//../redux/contactsSliceApi';

export default function Contact ({name, phone, id}) {
  // console.log('name:', {name, phone, id})

    const [deleteContact] = useDeleteContactMutation()

  return (
    <>
      <span>{name}</span>: <span>{phone}</span>
      <ContactButton type="button" onClick={() => deleteContact(id) }>
        Delete
      </ContactButton>
    </>
  );
};
