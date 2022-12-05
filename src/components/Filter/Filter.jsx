import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const handleFilterChange = filter => dispatch(setFilter(filter.target.value));

  return (
    <FilterLabel>
      Find contacts by Name
      <FilterInput
        type="text"
        value={filter}
        onChange={handleFilterChange}
      ></FilterInput>
    </FilterLabel>
  );
};

export default Filter;
