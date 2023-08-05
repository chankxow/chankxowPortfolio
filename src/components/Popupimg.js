import React, { useState } from 'react';
import Modal from 'react-modal';
import SchoolLogo from "../assets/about/stp-logo.png";

function ImageModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <div>
        <button onClick={toggleModal}>Open Modal</button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          contentLabel="Image Modal"
        >
          <img src={SchoolLogo} alt="Modal" />
          <button onClick={toggleModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
  
  export default ImageModal;
  