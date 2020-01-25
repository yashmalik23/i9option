import React from "react";
import {Link} from 'react-router-dom'

import logo from "../assets/images/i9logo.png";
import "../assets/css/navbar.css";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav_bar">
        <div className="desktop_nav_bar">
          <img alt="i9option" className="website_name" src={logo} onClick={()=>{window.location.href='/'}} />
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
            <Link to="#" className="log_in">
              Log In
            </Link>
            <Link to="#" className="sign_up">
              Register
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
