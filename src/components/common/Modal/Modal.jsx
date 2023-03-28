import PropTypes from 'prop-types';
import { useEffect } from "react";
import { EditContactForm } from "components/EditContactForm/EditContactForm";
import { ModalBackdrop, ModalContainer, CloseModalButton, CloseModalIcon } from "./Modal.styled";

export const Modal = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <CloseModalButton type="button" onClick={onClose}>
          <CloseModalIcon size="30px" />
        </CloseModalButton>
        <EditContactForm item={item} onClose={onClose} />
      </ModalContainer>
    </ModalBackdrop>
  );
};

EditContactForm.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
}