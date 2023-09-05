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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Minima, magni in fugit possimus dicta voluptatum a nihil natus
                repudiandae id harum mollitia amet quae, aliquam obcaecati
                dolorem iure numquam eaque.
              </p>
              <h3>
                Our <span>Goal</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ullam suscipit quo facere eius, possimus provident
                commodi quod incidunt corporis laborum facilis iusto nesciunt
                fugiat eligendi maiores sapiente. Nemo, deleniti?
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                tenetur officia nesciunt, itaque quam obcaecati suscipit sit
                mollitia ex possimus facere reiciendis amet, expedita asperiores
                quo explicabo nihil modi sapiente!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                odio aliquam quae iste, eaque molestiae iure tenetur quisquam
                porro fugiat delectus saepe. Cupiditate voluptas earum delectus
                incidunt voluptatum eligendi voluptatibus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
