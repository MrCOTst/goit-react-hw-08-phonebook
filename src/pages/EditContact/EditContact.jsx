import { useNavigate, useParams } from 'react-router-dom';
// import { useGetContactByIdQuery } from '../../redux/contactsSliceApi';
import { Overlay, Modal, ModalTitle } from './EditContact.styled';
import EditForm from '../../components/EditForm/EditForm';
import { Button } from '@chakra-ui/react';

export default function EditContact({ name, number }) {
  const params = useParams();
  const contactId = params.id;
  // const contactName = params.name;
  //   console.log('contactId in EditContact:', contactId );
  //  console.log('params:', params);

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
          }}
          onSubmit={handleUpdateContact}
        />

        <Button
          type="button"
          onClick={closeModal}
          colorScheme="messenger"
          borderWidth="1px"
          borderColor="messenger"
          m="12px auto 0 auto"
          p="2px 20px 4px 20px"
          fontSize="24px"
          _hover={{
            bg: 'messenger',
            color: 'white',
            borderWidth: '1px',
            borderColor: 'orange',
            fontSize: '26',
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
          Close
        </Button>
      </Modal>
    </Overlay>
  );
}
