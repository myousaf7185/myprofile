import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './StylishFooter.css'; // Create this CSS file for custom styles

const StylishFooter = () => {
  return (
    <footer className="bg-dark text-light text-center py-5">
      <div className="container">
        <h5 className="mb-4">Feel Free to Contact With Us</h5>
        <form className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control mb-2 d-inline-block"
            style={{ width: '300px' }}
          />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>

        <div className="social-icons mb-3">
          <a href="#" className="text-light mx-2"><i className="fa fa-facebook"></i></a>
          <a href="#" className="text-light mx-2"><i className="fa fa-twitter"></i></a>
          <a href="#" className="text-light mx-2"><i className="fa fa-instagram"></i></a>
          <a href="#" className="text-light mx-2"><i className="fa fa-linkedin"></i></a>
        </div>

        <p className="mb-0">&copy; {new Date().getFullYear()} HYA-Developers. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-light">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-light">Terms of Service</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-light">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default StylishFooter;
