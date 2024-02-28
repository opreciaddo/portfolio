import React, { FC, useState } from 'react';
// Axios
import axios from 'axios';
// Styles
import './Form.style.scss';


type FormProps = {
  loadingState: (loading: boolean) => void;
  resumeDownload?: boolean;
}

const defaultFormFields = {
  name: '',
  email: '',
  message: '',
  nameTouched: false,
  emailTouched: false,
}

const Form: FC<FormProps> = ({ loadingState, resumeDownload }) => {

  // Campos de Formulario
  const [formFields, setFormFields ] = useState(defaultFormFields);
  const { name , email, message, nameTouched, emailTouched } = formFields;

  // Obtiene los valores de <inputs /> y <text />, y actualiza 'formFields'
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = event.target;
    
    setFormFields({ ...formFields, [name]: value });
  }

  // Submit Formulario
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {

    // Desactivación de Comportamiento por Defecto de Form
    event.preventDefault();

    // Activación de Spinner
    loadingState(true);

    // Envio de formulario
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/o.preciaddo@gmail.com', 
      {
        name: name,
        email: email,
        message: message
      })
        .then(response => {

          loadingState(false);

          if (resumeDownload) {
            
            const link = document.getElementById('download-link');
            link?.click();
          }
          
          console.log(response);
        })
        .catch(error => {

          loadingState(false);
          console.log(error);
        }); 
    
    // Limpieza de Formulario
    setFormFields(defaultFormFields);
  }

  // Desactiva/Activa botón de submit
  const buttonDisable = () => {

    return (name.length >= 2) && !emailValidation();
  }

  //* Validaciones

  // Input tocado
  const handleTouched = (event: React.ChangeEvent<HTMLInputElement>) => {

    const { name } = event.target;

    switch (name) {
      case 'name':
        setFormFields({...formFields, nameTouched: true});
        break;

      case 'email':
        setFormFields({...formFields, emailTouched: true});
        break;
    
      default:
        break;
    }
  };

  // Input 'email'
  const emailValidation = () => {

    // Email válido
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return !pattern.test(email);
  }

  return (
    <div className='Form'>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" name="name" value={name} placeholder="Name" onChange={handleInputChange} onBlur={handleTouched} />
          {
            // Condicional para renderizar Advertencia de Validación de Formulario
            nameTouched && name.length <= 2 ? <span className="form-text text-danger">Type 3 letters at least.</span> : null
          }
        </div>
        <div className="mb-3">
          <input type="email" name="email" value={email} placeholder="Email" onChange={handleInputChange} onBlur={handleTouched} />
          {
            // Condicional para renderizar Advertencia de Validación de Formulario
            emailValidation() && emailTouched ? <span className="form-text text-danger">Type a valid email.</span> : null
          }
        </div>
        <div className="mb-3">
          <textarea typeof='text' name="message" value={message} cols={20} rows={5} placeholder="Message" onChange={handleInputChange} />
        </div>
        <button type="submit" disabled={!buttonDisable()}>Send</button>
      </form>

      <a href='/static/OmarPreciado_CV.pdf' id='download-link' style={{display: 'none'}} download='OmarPreciado_CV.pdf' ></a>
    </div>
  );
};

export default Form;
