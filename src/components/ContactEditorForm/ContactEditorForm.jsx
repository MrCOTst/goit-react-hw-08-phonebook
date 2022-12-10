// import { useNavigate, useParams } from 'react-router-dom';
// import {useGetContactByIdQuery,useUpdateContactMutation} from '../../redux/contactsSliceApi';
// import { Overlay, Modal, EditForm } from "./ContactEditorForm.styled";

// export const ContactEditorForm = () => {
//     const {contactId} = useParams();
//     console.log('contactId in ContactEditorForm:', contactId )
//     const {data:contact, isLoading} = useGetContactByIdQuery(contactId);
//     const [updateContact] = useUpdateContactMutation();
   
//     const navigate = useNavigate();

//     const closeModal = () => navigate('/');

//     const handleUpdateContact = async fields => {
//         try {
//             await updateContact ({id: contactId, ...fields});
//             closeModal();
//         }
//         catch(error) {
//             console.log(error);
//         }
        
//     };

//     return (
//         <Overlay>
//             <Modal>
//                 {contact && (
//                     <EditForm 
//                     initialValues={{name:contact.name, phone:contact.phone, personal:contact.personal}}
//                     onSubmit={handleUpdateContact} 
//                     loading={isLoading} />
//                 )}
//                 <button type="button" onClick={closeModal}>Close</button>
//             </Modal>
//         </Overlay>
//     );

// };