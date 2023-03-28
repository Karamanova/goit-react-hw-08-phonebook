import { useEffect } from "react";
import { useRedux } from "hooks/useRedux";
import { getItems, getFilterValue, getAllContactsAsync } from "redux/contactsSlice";
import { Contact } from "components/Contact/Contact";
import { ContactListItem, EmptyList } from "./ContactsList.styled";

export const ContactsList = () => {
  const [dispatch, useSelector] = useRedux();
  const items = useSelector(getItems);
  const filter = useSelector(getFilterValue);
  
  const normalizedValue = filter.toLowerCase();
  const filteredContacts = items.filter(option =>
    option.name.toLowerCase().includes(normalizedValue)
  );

  useEffect(() => {
    dispatch(getAllContactsAsync());
  }, [dispatch]);

  return (
    <ul>
      {items.length === 0 && <EmptyList>Now your contacts list is empty. Just enter new contact in form</EmptyList>}
      {filteredContacts.map((item) => {
        return (
          <ContactListItem key={item.id}>
            <Contact item={item} />
          </ContactListItem>
        );
      })}
    </ul>
  );
};