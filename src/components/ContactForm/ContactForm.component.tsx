import React, { FC, useState } from 'react';
// Styles
import './ContactForm.style.scss';
// Components
import { Spinner } from 'react-bootstrap';
import Form from '../Form/Form.component';


type ContactFormProps = {
  resumeDownload?: boolean;
}

const ContactForm: FC<ContactFormProps> = ({ resumeDownload }) => {

  const [loading, setLoading] = useState(false);

  // Handle para estado de 'loading'
  const handleForLoading = (loading: boolean) => {
    setLoading(loading);
  }
 
  return (
    <div className='ContactForm'>
      {
        loading
        ? <Spinner animation='grow' />
        : <Form loadingState={handleForLoading} resumeDownload={resumeDownload} />
      }
    </div>

    /* 
      TODO: Saludo de Form submitido
      
      <div className="container-form-sent-message">
        <h3 id="title">Hi <span id="contact-name">dsdsd</span>,</h3>
        <p id="subtitle">You will hear from me soon...</p>
        <span id="hi-icon"><i className="fa-regular fa-hand-peace fa-2xl" aria-hidden="true"></i></span>
      </div>
    */
  );
};

export default ContactForm;
