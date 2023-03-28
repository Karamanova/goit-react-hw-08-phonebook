import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  color: #9baacf;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
    color: #D45B78;
  }
`;

export const CloseModalIcon = styled(RiCloseFill)`
  color: inherit;
`;