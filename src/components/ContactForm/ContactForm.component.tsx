import React, { FC, useState } from 'react';
// Styles
import './ContactForm.style.scss';
// Components
import { Spinner } from 'react-bootstrap';
import Form from '../Form/Form.component';


type ContactFormProps = {}

const ContactForm: FC<ContactFormProps> = () => {

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
        : <Form loadingState={handleForLoading} />
      }
    </div>
  );
};

export default ContactForm;
