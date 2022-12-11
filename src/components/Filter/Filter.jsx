import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput, FilterDiv, FilterTitle } from './Filter.styled';
import { RiSearchLine } from 'react-icons/ri';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const handleFilterChange = filter => dispatch(setFilter(filter.target.value));

  return (
    <FilterLabel>
      <FilterTitle>Find contacts by Name</FilterTitle>
      <StatusFilter />
      <FilterDiv>
        <RiSearchLine
          style={{
            width: 36,
            height: 36,
            borderRadius: `8px`,
            borderColor: `blue`,
          }}
        />
        <FilterInput
          type="text"
          value={filter}
          onChange={handleFilterChange}
        ></FilterInput>
      </FilterDiv>
    </FilterLabel>
  );
};

export default Filter;
