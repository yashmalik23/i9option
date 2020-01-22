import React from "react";

import logo from "../assets/images/name.png";
import css from "../assets/css/navbar.css";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav_bar">
        <div className="desktop_nav_bar">
          <img alt="i9option" className="website_name" src={logo} />
          <ul className="nav_bar_options_list">
            <li className="nav_bar_option">TRADING</li>
            <li className="nav_bar_option">EDUCATION</li>
            <li className="nav_bar_option">AFFILIATE</li>
            <li className="nav_bar_option">LIVE SUPPORT</li>
            <li className="nav_bar_option">FUNDING</li>
            <li className="nav_bar_option">ABOUT US</li>
            <li className="nav_bar_option">LOCATE US</li>
          </ul>
          <div className="login_options">
            <a href="#" className="log_in">
              Log In
            </a>
            <a href="#" className="sign_up">
              Register
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
