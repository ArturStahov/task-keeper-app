import { useState } from 'react';
import gsap from 'gsap';
import { Elastic } from 'gsap';
import Table from 'components/Table';
import Modal from 'components/Modal';
import FormCreateEvent from 'components/FormCreateEvent';

export default function ViewTableEvents() {
  const [modalRef, setModalRef] = useState(null);

  const openModal = () => {
    gsap.to(modalRef.current, {
      duration: 4,
      delay: 0,
      x: 0,
      scale: 1,
      ease: Elastic.easeOut.config(0.5, 0.3),
      opacity: 1,
    });
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      duration: 4,
      delay: 0,
      x: -650,
      scale: 0,
      opacity: 0,
    });
  };

  return (
    <>
      <Table onOpenForm={openModal} />

      <Modal onClose={closeModal} getRef={setModalRef}>
        <FormCreateEvent />
      </Modal>
    </>
  );
}
