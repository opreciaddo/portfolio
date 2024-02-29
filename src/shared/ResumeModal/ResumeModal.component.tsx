import React, { FC, useEffect, useContext } from 'react';
// Styles
import './ResumeModal.style.scss';
// Contexts
import { GlobalContext } from '../../contexts/global.context';
// Components
import { Modal } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm/ContactForm.component';


type ResumeModalProps = {}

const ResumeModal: FC<ResumeModalProps> = () => {
  
  const { isModalOpen, setModalOpen, setIsFormInModal } = useContext(GlobalContext);

  useEffect(() => {
    
    if (isModalOpen) {
      setIsFormInModal(true);
    }
  }, [isModalOpen]);
  
  // Cierra Modal
  const closeModal = () => {

    setModalOpen(false);
  }

  return (
    <div className='ResumeModal'>
      <Modal show={isModalOpen} fullscreen={true} onHide={closeModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className='d-flex flex-grow-1'>  
          <div className="container-fluid d-flex flex-column flex-nowrap align-items-center justify-content-center">
          
            <div className="text-container-cv-download">
              <h4 id="title">You are about to <br />
                <span  id="download-cv">download my CV</span>
              </h4>
              <small  id="subtitle">Please, tell me who you are</small><br />
              <span  id="download-icon">
                <i  className="fa-solid fa-download fa-2xl" aria-hidden="true"></i>
              </span>
            </div>

            <ContactForm />
          
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ResumeModal;
