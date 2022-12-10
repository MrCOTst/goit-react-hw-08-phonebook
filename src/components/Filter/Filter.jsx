import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';
import { RiSearchLine } from 'react-icons/ri';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const handleFilterChange = filter => dispatch(setFilter(filter.target.value));

  return (
    <FilterLabel>
      <h2>Find contacts by Name</h2>
      <StatusFilter />
      <RiSearchLine
            style={{
              width: 36,
              height: 36,
            }}
          />
      <FilterInput
        type="text"
        value={filter}
        onChange={handleFilterChange}
      ></FilterInput>
    </FilterLabel>
  );
};

export default Filter;
