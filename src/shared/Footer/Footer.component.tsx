import React, { FC } from 'react';
// Pictures
import icono from '../../assets/icons/icono.svg'
// Styles
import './Footer.style.scss';


type FooterProps = {}

const Footer: FC<FooterProps> = () => {

  return (
    <footer className='Footer'>
      <ul className="footer-content">
        <li className="footer-item">
          <a href="#" className="navbar-brand">
            <img id="icon" src={icono} alt="code" />
          </a>
        </li>
        <li className="footer-item">
          <p>Designed &amp; Coded <br />by<br /> Omar Preciado</p>
        </li>
        <li className="footer-item">
          <a href="mailto:o.preciaddo@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa-regular fa-envelope fa-xl" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/opreciaddo" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fa-xl" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/opreciaddo/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin fa-xl" aria-hidden="true"></i>
          </a>
          <a href="https://www.google.com.mx/maps/place/Santiago+de+Quer%C3%A9taro,+Qro./@20.6120588,-100.5750282,11z/data=!3m1!4b1!4m6!3m5!1s0x85d35b8fdc5b9255:0x97b094aa561b832f!8m2!3d20.5887932!4d-100.3898881!16zL20vMDF2ZGIz?entry=ttu" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-location-dot fa-xl" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
