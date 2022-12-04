import PropTypes from 'prop-types';
import { getContacts, getFilterValue } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

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
        <ul className="Contact__list">
        {visibleContacts.map(({id, name, number}) => (
          <li
            className="Contact__item"
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            {name}: {number}
          <button type="button" onClick={() => handleDelete(id)} className="Button Button__contact">
            Delete
          </button>
          </li>
        ))}
      </ul>
      )}
    
    </>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

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
