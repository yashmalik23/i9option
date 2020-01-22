import React from "react";

import css from "../assets/css/landing.css";
import backgroundimage from "../assets/images/stock.png";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing_page">
        <img
          alt="i9option"
          src={backgroundimage}
          className="landing_page_background"
        />
      </div>
    );
  }
}

export default LandingPage;
