import React from "react";
import "./LandingPageTwo.css";

function LandingPageTwo() {
  return (
    <div className="landing-page-two">
      <div className="dashboard">
        <img
          className="dashboard-image"
          alt="dashboard"
          src="/assets/dashboard.png"
        ></img>
      </div>
      <div className="dashboard-content">
        <p className="dashboard-heading-one">START AND GROW</p>
        <h1 className="dashboard-heading-two">
          Start your <span>business</span> from scratch.
        </h1>
        <p className="dashboard-description">
          We start your business and takecare of all the documents and
          regulatory procedures in order to make <br />
          your business fully functional in the UAE in only 2-3 weeks.
        </p>
        <button className="start-business-button">Start your business</button>
      </div>
    </div>
  );
}

export default LandingPageTwo;
