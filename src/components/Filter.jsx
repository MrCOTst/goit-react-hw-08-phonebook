import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className="Phonebook__label">
    Find contacts by Name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="Phonebook__input"
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
