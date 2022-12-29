import { useNavigate, useParams } from 'react-router-dom';
// import { useGetContactByIdQuery } from '../../redux/contactsSliceApi';
import { Overlay, Modal, ModalButton, ModalTitle } from './EditContact.styled';
import EditForm from '../../components/EditForm/EditForm';

export default function EditContact({name, number}) {
  const params = useParams();
  const contactId = params.id;
  // const contactName = params.name;
//   console.log('contactId in EditContact:', contactId );
//  console.log('params:', params);
  // const { data: contact, isLoading } = useGetContactByIdQuery(contactId);
 
  // console.log('name', name);
  const navigate = useNavigate();

  const closeModal = () => navigate('/');

  const handleUpdateContact = () => {
    closeModal();
  };

  return (
    <Overlay>
      <Modal>
        <ModalTitle>You can make changes to this contact</ModalTitle>
        
          <EditForm
            initialValues={{
              id: contactId,
              name: name,
              number: number,
              // personal: contact.personal,
            }}
            onSubmit={handleUpdateContact}
            // loading={isLoading}
          />
        
        <ModalButton type="button" onClick={closeModal}>
          Close
        </ModalButton>
      </Modal>
    </Overlay>
  );
}
