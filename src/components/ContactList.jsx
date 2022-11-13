import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDelete }) {
  const contactItem = contacts.map(({ id, name, number }) => {
    return (
      <li
        className="Contact__item"
        key={id}
        style={{ backgroundColor: getRandomHexColor() }}
      >
        {name}: {number}
        <button onClick={() => onDelete(id)} className="Button Button__contact">
          Delete
        </button>
      </li>
    );
  });
  
  return <ul className="Contact__list">{contactItem}</ul>;
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
