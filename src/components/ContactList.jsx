import PropTypes from 'prop-types';

function ContactList({ contacts, onDelete }) {
  return (
    <ul className="Contact__list">
      {contacts.map(item => (
        <li
          className="Contact__item"
          key={item.id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          {item.name}: {item.number}
          <button
            onClick={() => onDelete(item.id)}
            className="Button Button__contact"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default ContactList;
