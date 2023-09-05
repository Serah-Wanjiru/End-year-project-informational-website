import React from "react";
import "./team.css";

const Team = (props) => {
  return (
    <div className="team-container">
      <div>
        <h2 className="meet">Meet the Team</h2>
        <p>We are a team of great engineers aimed to provide great services and experience with the app</p>
      </div>
      <div id="team" className="row justify-content-center"> 
        <div className="col-xs-12 col-md-4 text-center">
          <div className="team-member">
            <img src="img/image/bree.jpeg" alt="Bridget Mutesi" className="team-img" />
            <div>
              <h4>Bridget Mutesi</h4>
              <p>Software Developer || UI/UX Designer</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4 text-center">
          <div className="team-member">
            <img src="img/image/sera.jpeg" alt="Sera" className="team-img" />
            <div>
              <h4>Serah Wanjiru</h4>
              <p>Software Developer </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4 text-center">
          <div className="team-member">
            <img src="img/image/faith.jpeg" alt="Mwamkinga" className="team-img" />
            <div>
              <h4>Faith Mwamkinga</h4>
              <p>Software Developer || Product Manager</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4 text-center">
          <div className="team-member">
            <img src="img/image/maureen.jpeg" alt="Maureen" className="team-img" />
            <div>
              <h4>Maureen Ougo</h4>
              <p>Software Developer </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4 text-center">
          <div className="team-member">
            <img src="img/image/rita.jpeg" alt="Rita" className="team-img" />
            <div>
              <h4>Rita Khaseyi</h4>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Team;
