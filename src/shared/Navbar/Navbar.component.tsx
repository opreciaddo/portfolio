import React, { FC, useContext } from 'react';
// Pictures
import logo from '../../assets/icons/icono.svg';
// Contexts
import { GlobalContext } from '../../contexts/global.context';
// Styles
import './Navbar.style.scss';
// Components
import ResumeModal from '../ResumeModal/ResumeModal.component';


type NavbarProps = {}

const Navbar: FC<NavbarProps> = () => {

  const { setModalOpen } = useContext(GlobalContext);

  const openModal = () => {

    setModalOpen(true);
  }
  
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
                <a className="nav-link" onClick={openModal}>
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

      <ResumeModal />
    </div>
  );
}

export default Navbar;
