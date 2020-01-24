import React from "react";

import css from "../assets/css/landing.css";
import logo from "../assets/images/i9logo.png";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing_page">
        <div className="tag_line_container">
          <div className="tag_line_1">Building Trust</div>
          <div className="tag_line_2">For the Crypto Era</div>
        </div>
        <div className="start_button_container">
          <Link to="/home" className="start_trading_button">
            Start Trading Now
          </Link>
        </div>
        <img src={logo} alt="logo" className="landing_page_logo" />
      </div>
    );
  }
}

export default LandingPage;
