import React from 'react';
import Modal from 'react-modal';





const ImageModal = ({ imageUrl, onClose }) => {
    const closeModal = () => {
        onClose();
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            contentLabel="Full Screen Image"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    zIndex: 9999,
                },
                content: {
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    border: 'none',
                    background: 'none',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}
        >
            <img src={imageUrl} alt="Full Screen" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>
                Close
            </button>
        </Modal>
    );
};

export default ImageModal;