import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal, ButtonClose } from './StyledComponent';

export default function Modals({ children, getRef, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef) {
      getRef(modalRef);
    }
  }, [modalRef]);

  return (
    <Modal ref={modalRef}>
      <ButtonClose onClick={() => onClose()} type="button">
        <FontAwesomeIcon icon={faTimes} size="1x" color="#28506F" />
      </ButtonClose>
      {children}
    </Modal>
  );
}
