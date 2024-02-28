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
  );
};

export default ContactForm;
