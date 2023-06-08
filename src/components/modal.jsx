import React from 'react';

const Modal = ({ xButton=false, title=false, submitButton, onClose, onSubmit, children }) => {
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    zIndex: '9999',
  };

  const overlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '9998',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    color: 'black'
  };

  const titleStyle = {
    margin: '0',
    marginBottom: '20px',
    color: 'pink'
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={modalStyle}>
        {xButton && <span style={closeButtonStyle} onClick={onClose}>X</span>}
        {title && <h2 style={titleStyle}>Modal Title</h2>}
        <div>{children}</div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          {submitButton && <button style={buttonStyle} onClick={onSubmit}>Submit</button>}
          <button style={buttonStyle} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Modal;