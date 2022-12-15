import { useNavigate, useParams } from 'react-router-dom';
import { useGetContactByIdQuery } from '../../redux/contactsSliceApi';
import { Overlay, Modal, ModalButton, ModalTitle } from './EditContact.styled';
import EditForm from '../../components/EditForm/EditForm';

export default function EditContact() {
  const params = useParams();
  const contactId = params.id;
  // console.log('contactId in EditContact:', contactId);
  const { data: contact, isLoading } = useGetContactByIdQuery(contactId, {
    skip: contactId === false,
  });
  // console.log('contactId in EditContact:', contactId);
  const navigate = useNavigate();

  const closeModal = () => navigate('/');

  const handleUpdateContact = () => {
    closeModal();
  };

  return (
    <Overlay>
      <Modal>
        <ModalTitle>You can make changes to this contact</ModalTitle>
        {contact && (
          <EditForm
            initialValues={{
              id: contact.id,
              name: contact.name,
              phone: contact.phone,
              personal: contact.personal,
            }}
            onSubmit={handleUpdateContact}
            loading={isLoading}
          />
        )}
        <ModalButton type="button" onClick={closeModal}>
          Close
        </ModalButton>
      </Modal>
    </Overlay>
  );
}
