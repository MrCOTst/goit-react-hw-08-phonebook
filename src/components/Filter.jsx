import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { getFilterValue } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

 const handleFilterChange = filter => dispatch(setFilter(filter.target.value));

return (
<label className="Phonebook__label">
    Find contacts by Name
    <input
      type="text"
      value={filter}
      onChange={ handleFilterChange}
      className="Phonebook__input"
    ></input>
  </label>
)

  
};

// Filter.propTypes = {
//   // value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
