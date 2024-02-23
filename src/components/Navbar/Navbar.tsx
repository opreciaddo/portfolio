import React, { FC } from 'react';
// Pictures
import logo from '../../assets/icons/icono.svg';
// Styles
import './Navbar.scss';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
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
              <a data-bs-toggle="modal" data-bs-target="#cv-modal" className="nav-link">
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
  </div>
);

export default Navbar;
