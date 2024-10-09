import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav className="header">
        <div className="logo">
          <h1>One View</h1> {/* You can replace this with an image */}
        </div>
        <ul className="header-list">
          <li>
            <label>Services</label>
            <select name="services" id="services">
              <option></option>
              <option value="visa-center">Visa Center</option>
              <option value="financial">Financial Resources</option>
              <option value="mail">Mail Box</option>
              <option value="compliance">Compliance</option>
            </select>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Resources</p>
          </li>
          <li>
            <button className="login-button">Login</button>
          </li>
          <li>
          <button className="start-your-business-button">Start your business</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
