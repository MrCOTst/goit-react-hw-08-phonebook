import PropTypes from 'prop-types';
import { getContacts, getFilterValue } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactUl, ContactItem, ContactButton } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();
  console.log(filterValue);

  const handleDelete = id => dispatch(deleteContact(id));

  let getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts(contacts, filterValue);
  console.log(contacts);

  return (
    <>
      {contacts.length > 0 && (
        <ContactUl>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              {name}: {number}
              <ContactButton type="button" onClick={handleDelete}>
                Delete
              </ContactButton>
            </ContactItem>
          ))}
        </ContactUl>
      )}
    </>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

ContactList.propTypes = {
  handleDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
