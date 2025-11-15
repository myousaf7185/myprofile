import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src='/images/logo-2.png' alt="Logo" style={{ width: "80px" }} />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Experience">Experience</Link>
            </li>
          </ul>
          <div className="d-flex social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
