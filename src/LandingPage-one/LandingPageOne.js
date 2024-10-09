import React from "react";
import "./LandingPageOne.css";

function LandingPageOne() {
  return (
    <div className="landingpage-one">
        {/* <img
          className="dashboardOne-image"
          alt="dashboard"
          src="/assets/dasboardOne.png"
        ></img> */}
      <div className="content-one">
        <p className="heading">
          Build your business <br />
          here and now.
        </p>
        <p className="description">
          We help you <b>start</b>, <b>build</b> and your <b>dream business</b>{" "}
          in the UAE. <br />
          Just a few steps, and you'll be right on track!
        </p>
        <div className="company-name-input">
          <input type="text" placeholder="Enter your company name" />
          <button className="getstarted-button">Get Started</button>
        </div>
      </div>

      <div className=" content-two">
        <h3> Visa Center</h3>
        <div className=" content-three">
          <h5> Arjun Shaji</h5>
        </div>
      </div>
    </div>
  );
}

export default LandingPageOne;
