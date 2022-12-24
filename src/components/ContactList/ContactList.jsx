import PropTypes from 'prop-types';
import { selectFilterStatus, selectFilterValue } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { ContactUl, ContactItem } from './ContactList.styled';
import { useGetContactsQuery } from '..//../redux/contactsSliceApi';
import Contact from 'components/Contact/Contact';

export default function ContactList() {
  const filterValue = useSelector(selectFilterValue);
  const filterStatus = useSelector(selectFilterStatus);
  // console.log("filterStatus:", filterStatus)

  const { data: contacts, error, isLoading } = useGetContactsQuery();
  // console.log('data:', contacts);
  // console.log('error:', error);
  // console.log('isLoading:', isLoading);

  let getVisibleContacts = (contacts, filter, status) => {
    if (contacts)
      switch (status) {
        case 'personal':
          return contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .filter(contact => contact.personal === true);

        case 'others':
          return contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .filter(contact => contact.personal === false);

        default:
          return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          );
      }
  };

  const visibleContacts = getVisibleContacts(
    contacts,
    filterValue,
    filterStatus
  );

  return (
    <>
      {error && <p>Error loading, please try again </p>}

      {isLoading ? (
        <b>Loading...</b>
      ) : (
        <ContactUl>
          {visibleContacts.map(({ name, number, id, personal }) => (
            <ContactItem
              key={id}
              style={
                personal === false
                  ? { backgroundColor: ` #e1c7e9` }
                  : { backgroundColor: `#00fff2` }
              }
            >
              <Contact name={name} number={number} id={id} personal={personal} />
            </ContactItem>
          ))}
        </ContactUl>
      )}
    </>
  );
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
