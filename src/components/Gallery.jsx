import { useState } from 'react';
import Modal from 'react-modal';

// Style for the modal (you can customize this)
const modalStyle = {
  content: {
    maxWidth: '80%',
    maxHeight: '80%',
    margin: 'auto',
  },
};

function ImageModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}><div
                    className=" bg-CESCaCER bg-cover h-[250px]  w-[350px]"
                    title="CERTIFICATE"
                  ></div></button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Image Modal"
      >
       <div
                    className=" bg-CESCaCER bg-cover h-[500px]  w-[700]"
                    title="CERTIFICATE"
                  ></div>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default ImageModal;
