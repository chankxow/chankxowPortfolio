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
        <div onClick={toggleModal}>Open Modal</div>
        
        <div className="content ">
                <p className="title relative font-semibold tracking-widest text-center">
                  KIATTIPOOM PALASAN
                </p>
                <Modal
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          contentLabel="Image Modal"
        >
          <img src={SchoolLogo} alt="Modal mx-auto" />
          <button onClick={toggleModal}>Close Modal</button>
        </Modal>
              </div>
      </div>
    );
  }
  
  export default ImageModal;
  