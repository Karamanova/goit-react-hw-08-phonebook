import { ContactForm } from 'components/contactform/ContactForm';
import { ContactsList } from 'components/contactslist/ContactsList';
import { Filter } from 'components/filter/Filter';
import { Container, Title, LoadingText } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, addContact } from '../redux/operations';
import {
  selectContactsList,
  selectIsLoading,
  selectError,
  selectFilter,
} from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  
  const newContact = name => {
    contacts.find(
      contact => contact.name.toLowerCase() === name.name.toLowerCase()
    )
      ? alert(`${name.name} is already in contacts`)
      : dispatch(addContact(name));
  };

  const handleSubmit = (values, { resetForm }) => {
    isLoading && <p>Loading contacts...</p>
    newContact(values);
    resetForm();
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
  <Container>
    <Title>Phonebook</Title>
    <ContactForm handleSubmit={handleSubmit}/>
    <Title>Contacts</Title>
    <Filter />
    {isLoading && <LoadingText>Loading contacts...</LoadingText>}
    {error && <p>{error}</p>}
    {contacts.length > 0 && <ContactsList contacts={filter} />}
  </Container>
);
};

export default App;