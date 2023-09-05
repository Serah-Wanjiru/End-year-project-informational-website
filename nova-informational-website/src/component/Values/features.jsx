import React from "react";
import { FaUsers, FaHeart } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";

import "./values.css";

const Values = () => {
  return (
    <div id="features" className="values-container">
      <div className="section-title">
        <h2 className="values">Our Values</h2>
      </div>
      <div className="containers values-grid">
        <div className="value">
          <div>
          <FaUsers />
          </div>
         

          <h3>Team Work</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam ad iste ipsam explicabo voluptate assumenda neque
            necessitatibus ipsum asperiores quam. Vero itaque facilis tenetur
            exercitationem error placeat ex officiis natus.
          </p>
        </div>
        <div className="value">
          <div>
          <FaHeart />

          </div>
          <div>

          <h3>Empathy</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam ad iste ipsam explicabo voluptate assumenda neque
            necessitatibus ipsum asperiores quam. Vero itaque facilis tenetur
            exercitationem error placeat ex officiis natus.
          </p>
          </div>
        
        </div>
        <div className="value">
          <div>  <IoTrendingUp  /></div>
          <div>
          <h3>Growth</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam ad iste ipsam explicabo voluptate assumenda neque
            necessitatibus ipsum asperiores quam. Vero itaque facilis tenetur
            exercitationem error placeat ex officiis natus.
          </p>
          </div>
        
         
        </div>
      </div>
    </div>
  );
};

export default Values;
