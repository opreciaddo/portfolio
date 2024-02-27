import React, { FC } from 'react';
// Styles
import './ContactForm.style.scss';


type ContactFormProps = {}

const ContactForm: FC<ContactFormProps> = () => {

  return (
    <div className='ContactForm'>
      <form noValidate autoComplete="off">
        <div className="mb-3">
          <input type="text" name="name" placeholder="Name" />
          <span className="form-text text-danger">Type 3 letters at least.</span>
        </div>
        <div className="mb-3">
          <input type="email" name="email" placeholder="Email" />
          <span className="form-text text-danger">Type a valid email.</span>
        </div>
        <div className="mb-3">
          <textarea typeof='text' name="message" cols={20} rows={5} placeholder="Message" />
        </div>
        <button type="submit" disabled>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
