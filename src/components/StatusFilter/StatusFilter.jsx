import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { statusFilters } from 'redux/constants';
import { getFilterStatus } from 'redux/selectors';
import { setStatusFilter } from 'redux/filterSlice';
import { WraperFilterStatus } from './StatusFilter.styled';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterStatus);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <WraperFilterStatus>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>

      <Button
        selected={filter === statusFilters.personal}
        onClick={() => handleFilterChange(statusFilters.personal)}
      >
        Personal
      </Button>

      <Button
        selected={filter === statusFilters.others}
        onClick={() => handleFilterChange(statusFilters.others)}
      >
        Others
      </Button>
    </WraperFilterStatus>
  );
};
