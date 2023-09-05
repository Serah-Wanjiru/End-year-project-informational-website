import React from "react";
import "./headers.css"; // Your existing CSS file

const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text text-center">
                <h1 className="headers">
                  <span className="welcome">WELCOME TO TRUX</span>
                </h1>
                <hr className="line" />
                <p> Making your journey smooth and fast </p>
                <a
                  href="#download"
                  className="btn btn-custom btn-lg page-scroll download-button"
                >
                  Download App
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
