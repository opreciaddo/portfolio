import React, { FC, useState } from 'react';
// Pictures
import logo from '../../assets/icons/icono.svg';
// Styles
import './Navbar.style.scss';
// Components
import ResumeModal from '../ResumeModal/ResumeModal.component';


type NavbarProps = {}

const Navbar: FC<NavbarProps> = () => {

  const [modalOpen, setModalOpen] = useState(false);
  
  const modalHandler = (modal: boolean): void => {

    setModalOpen(modal);
  };
  
  return (
    <div className="Navbar">
      <nav className="navbar">
        <div className="container">
          {/* Left Icon */}
          <a href="#" className="navbar-brand">
            <img id="logo" src={logo} alt="code" />
          </a>
          {/* Right Icons */}
          <div id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" onClick={() => setModalOpen(true)}>
                  <i className="fa-regular fa-file-lines fa-xl" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="mailto:o.preciaddo@gmail.com" className="nav-link">
                  <i className="fa-regular fa-envelope fa-xl" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ResumeModal openModal={modalOpen} changeModal={modalHandler} />
    </div>
  );
}

export default Navbar;
