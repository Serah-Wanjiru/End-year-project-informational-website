import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div className="container-about">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src="img/image/abouts.png"
              className="img-fluid"
              alt="About Us"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>
                Who <span>we Are</span>{" "}
              </h2>
              <p>
              Welcome to our innovative Trux App solution designed
              to alleviate congestion in the Busia-Malaba area. We are 
              committed to revolutionalizing transportation by
              providing efficient and streamlined logistics for truck 
              drivers and business. Join us in shaping a smoother,
              more sustainable future for the region’s transportation
              landscape.
              </p>
              <h3>
                Our <span>Goal</span>
              </h3>
              <p>
              Welcome to our innovative Trux App solution designed
              to alleviate congestion in the Busia-Malaba area. We are 
              committed to revolutionalizing transportation by
              providing efficint and stremlined logisics for truck 
              drivers and business. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container-about">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>
                Our <span>Vision</span>
              </h2>
              <p>
              Our vision is to create a seamless and congestion-free
              transportation environment in the Buia-Malaba area. We envision
              a future where our Trux App serves as the catalyst for efficient
              logistics, intelligent route planning, and harmonized technology
              and innovation, we aim to redefine he way goods are transported,
              leading to enhanced productivity, reduced environment impact, 
              and a thriving regional economy.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <img
              src="img/image/driver.jpeg"
              className="img-fluid"
              alt="Our Vision"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container-about">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src="img/image/about.png"
              className="img-fluid"
              alt="Our Mission"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>
                Our <span>Mission</span>{" "}
              </h2>
              <p>
              Our mission is to revolutionize truck logistics in the Busia -
              Malaba area through our advanced TruxApp. We are dedicated to
              providing truck drivers and businesses with a comprehensive 
              platform that offers optimized route planning, real-time updates
              and efficient coordination. By streamlining operations and reducing
              congestion, we aim to enhance overall productivity, promote sustainable 
              practises and contribute to the development and prosperity of the region.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
