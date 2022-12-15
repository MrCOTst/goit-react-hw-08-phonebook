import { ContactButton, ContactSpanDiv, ContactButtonDiv } from './Contact.styled';
import { useDeleteContactMutation } from '../../redux/contactsSliceApi';
import { useNavigate } from 'react-router-dom';
import { RiFunctionFill } from 'react-icons/ri';
import { RiStarSFill } from 'react-icons/ri';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';

export default function Contact({ name, phone, id, personal }) {
  // console.log('name:', {name, phone, id})
  const navigate = useNavigate();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  
  return (
    <>
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
      <span>{name}</span> :
      <span>{phone}</span>
      </ContactSpanDiv>
      

<ContactButtonDiv>
<ContactButton
        type="button"
        onClick={() => deleteContact(id)}
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
    </>
  );
}
