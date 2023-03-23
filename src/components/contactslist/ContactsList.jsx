import { useDispatch, useSelector } from 'react-redux';
import { selectedContacts } from 'redux/selectors';
import { deleteContact } from '../../redux/operations';
import { PhoneItem, DeleteButton, PhoneList } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectedContacts);
  return (
    <PhoneList>
      {filteredContacts.map(({ id, name, number }) => (
        <PhoneItem key={id}>
          {name}: {number}
          <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteButton>
        </PhoneItem>
      ))}
    </PhoneList>
  );
};
