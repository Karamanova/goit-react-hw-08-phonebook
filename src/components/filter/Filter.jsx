import PropTypes from 'prop-types';
import { Field } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

const onWrite = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  return (
    <Field
      type="text"
      name="filter"
      onChange={onWrite}
      placeholder="Enter name for search"
    />
  );
};
Field.propTypes = {
  filter: PropTypes.string,
};