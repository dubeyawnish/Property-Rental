import React from 'react';
import Modal from 'react-modal';


const customModalStyles = {
    content: {
        top: '60%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        maxWidth: '800px',
        maxHeight: '90vh',
        overflow: 'auto',

        '@media screen and (max-width: 600px)': {
            top: '10%',

            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxHeight: '80vh',
        },

    },

};


const ImageModal = ({ imageUrl, onClose }) => {
    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            style={customModalStyles}
            contentLabel="Larger Image Modal"
        >
            <img src={imageUrl} alt="Larger View" style={{ width: '100%', height: 'auto' }} />
            <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>
                Close
            </button>
        </Modal>
    );
};

export default ImageModal;