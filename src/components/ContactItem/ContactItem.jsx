import { ContactButton } from './ContactItem.styled';
import { useDeleteContactMutation } from '..//../redux/contactsSliceApi';
// import { useNavigate } from 'react-router-dom';

export default function Contact({ name, phone, id }) {
  // console.log('name:', {name, phone, id})
  // const navigate = useNavigate();
  const [deleteContact, {isLoading}] = useDeleteContactMutation();

  return (
    <>
      <span>{name}</span>: <span>{phone}</span>
      <ContactButton type="button" onClick={() => deleteContact(id)}
      disabled={isLoading}>
        Delete
      </ContactButton>
      {/* <ContactButton type="button" onClick={() => navigate(`/list/edit/${id}`)}>
        Edit
      </ContactButton> */}
    </>
  );
}
