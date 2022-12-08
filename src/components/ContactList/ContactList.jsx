import PropTypes from 'prop-types';
// import { getFilterValue } from 'redux/selectors';
// import {  useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { ContactUl, ContactItem } from './ContactList.styled';
import { useGetContactsQuery } from '..//../redux/contactsSliceApi';

export default function ContactList() {
  // const contacts = useSelector(getContacts);
  // const filterValue = useSelector(getFilterValue);
  // const dispatch = useDispatch();
  // console.log(filterValue);

  const { data, error, isLoading } = useGetContactsQuery();
  console.log('data:', data);
  console.log('error:', error);
  console.log('isLoading:', isLoading);

  // const handleDelete = id => dispatch(deleteContact(id));

  // let getVisibleContacts = (contacts, filter) => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const visibleContacts = getVisibleContacts(contacts, filterValue);
 

  return (
    <>
      {/* {error && <p>Помилка завантаження, спробуйте ще раз </p>}

      {isLoading ? (
        <b>Завантаження</b>
      ) : (
        <ContactUl>
          {contacts.map(contact => (
            <li
              key={contact.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <ContactItem contact={contact} />
            </li>
          ))}
        </ContactUl>
      )} */}
    </>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

ContactList.propTypes = {
  
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
