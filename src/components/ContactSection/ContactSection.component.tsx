import React, { FC } from 'react';
// Styles
import './ContactSection.style.scss';
// Components
import ContactForm from '../ContactForm/ContactForm.component';


type ContactSectionProps = {}

const ContactSection: FC<ContactSectionProps> = () => {

  return (
    <div className='ContactSection'>
      <div className="container">
        <div className="container-title">
          <h2 id="title">Let's talk</h2>
          <p id="subtitle">How can I help you?</p>
        </div>
        <div className="container-contact">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
