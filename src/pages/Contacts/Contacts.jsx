import { ContactsPage } from "./Contacts.styled";
import { AddContactForm } from "components/AddContactForm/AddContactForm";
import { Filter } from "components/Filters/Filter";
import { ContactsList } from "components/Contactslists/ContactsList";

const Contacts = () => {
  return (
    <ContactsPage>
      <AddContactForm />
      <div>
        <Filter />
        <ContactsList />
      </div>
    </ContactsPage>
  );
};

export default Contacts;