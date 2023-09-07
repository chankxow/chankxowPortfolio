/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from 'react-modal';

const modalStyle = {
  content: {
    maxHeight: '80%',  // Set a fixed or percentage-based width
    maxWidth: '80%',  // Set a maximum width
    margin: 'auto',

  },
};

function ImageModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}><img className='w-[100%] h-[250px]' src={props.img} alt="" /></button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Image Modal"
      >
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          style={{ width: '100%', height: 'auto', maxHeight: '80vh',}}
          className='item-center'
        />
      </Modal>
    </div>
  );
}

export default ImageModal;
