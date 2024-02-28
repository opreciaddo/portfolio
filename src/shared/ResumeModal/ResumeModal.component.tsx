import React, { FC, useState, useEffect } from 'react';
// Styles
import './ResumeModal.style.scss';
// Components
import { Modal, Button } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm/ContactForm.component';


type ResumeModalProps = {
  openModal: boolean;
  changeModal: (modal: boolean) => void;
}

const ResumeModal: FC<ResumeModalProps> = ({ openModal, changeModal }) => {

  const [show, setShow] = useState(false);
  const [resume, setResume] = useState(true);

  useEffect(() => {
    
    setShow(openModal);

    if (openModal === true) {
      setResume(true);
    }
  }, [openModal]);
  
  const closeModal = () => {

    setShow(false);
    changeModal(false);
    setResume(false);
  }

  return (
    <div className='ResumeModal'>
      <Modal show={show} fullscreen={true} onHide={closeModal}>
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

            <ContactForm resumeDownload={resume} />
          
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ResumeModal;
