import { useRedux } from "hooks/useRedux";
import { filterItems, getFilterValue } from "redux/contactsSlice";
import { Input } from "components/common/Input.styled";

export const Filter = () => {
  const [dispatch, useSelector] = useRedux();
  const filter = useSelector(getFilterValue);

  const filterHandler = evt => {
    dispatch(filterItems(evt.target.value));
  }; 

  return (
    <Input
      type="text"
      name="filter"
      placeholder="type name..."
      value={filter}
      onChange={filterHandler}
    />
  );
};