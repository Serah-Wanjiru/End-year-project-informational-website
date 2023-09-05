import React from "react";
import "./product.css";

const Products = () => {
  return (
    
   <div className="container-about"id="products">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>
                Our <span>Products</span>
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
  );
};

export default Products;
