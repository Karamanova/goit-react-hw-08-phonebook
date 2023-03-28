import PropTypes from 'prop-types';
import { useState } from "react";
import { useRedux } from "hooks/useRedux";
import { deleteContactAsync } from "redux/contactsSlice";
import { Modal } from "components/common/Modal/Modal";
import { ContactButton } from "./Contact.styled";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

export const Contact = ({ item }) => { 
  const [dispatch] = useRedux();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteContact = id => {
    dispatch(deleteContactAsync(id));
  };

  return (
    <>
      <p>{item.name}: {item.number}</p>
      <div>
        <ContactButton type="button" onClick={openModal}><FiEdit2 /></ContactButton>
        <ContactButton type="button" onClick={() => deleteContact(item.id)}><AiOutlineDelete /></ContactButton>
      </div>
      {isModalOpen && <Modal item={item} onClose={closeModal} />}
    </>
  );
};

Contact.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
}