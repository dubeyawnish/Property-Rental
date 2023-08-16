// import React from 'react';
// import Modal from 'react-modal';

// const ImageModal = ({ imageUrl, onClose }) => {

//     const closeModal = () => {
//         onClose();
//     };

//     return (
//         <Modal
//             isOpen={true}
//             onRequestClose={closeModal}
//             contentLabel="Full Screen Image"
//             style={{
//                 overlay: {
//                     backgroundColor: 'rgba(0, 0, 0, 0.75)',
//                     zIndex: 9999,
//                 },
//                 content: {
//                     position: 'absolute',
//                     top: '0',
//                     left: '0',
//                     right: '0',
//                     bottom: '0',
//                     border: 'none',
//                     background: 'none',
//                     overflow: 'hidden',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                 },
//             }}
//         >
//             <img src={imageUrl} alt="Full Screen" style={{ maxWidth: '100%', maxHeight: '100%' }} />
//             <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>
//                 Close
//             </button>
//         </Modal>
//     );
// };

// export default ImageModal;









import React, { useState } from 'react';
import Modal from 'react-modal';

const ImageModal = ({ imageUrl, onClose }) => {
    const [zoomLevel, setZoomLevel] = useState(80); // Initial zoom level is 100%

    const handleZoomIn = () => {
        setZoomLevel(Math.min(zoomLevel + 10, 200)); // Limit max zoom to 200%
    };

    const handleZoomOut = () => {
        setZoomLevel(Math.max(zoomLevel - 10, 10)); // Limit min zoom to 10%
    };

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
                    display: 'flex',
                    flexDirection: 'column', // Adjust the flex direction
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}
        >
            <div style={{ overflow: 'auto', flex: 1 }}>
                <img
                    src={imageUrl}
                    alt="Full Screen"
                    style={{
                        width: `${zoomLevel}%`, // Use width instead of max-width for zooming
                        transition: 'width 0.3s', // Add a smooth transition effect
                        display: 'block', // Prevents margin collapse
                        margin: '0 auto', // Center the image
                    }}
                />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button
                    onClick={handleZoomIn}
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                >
                    Zoom in
                </button>
                <button onClick={handleZoomOut} style={{ cursor: 'pointer' }}>
                Zoom Out
                </button>
            </div>
            <button
                onClick={closeModal}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer',
                }}
            >
                Close
            </button>
        </Modal>
    );
};

export default ImageModal;




