import React from "react";
import "./style.css";

const Products = () => {
  return (
    
   <div className="products">
  
          <div>
            <div className="about-text">
              <h2>
                Our Products
              </h2>
              <p>
              Our mission is to revolutionize truck logistics in the Busia Malaba area through our advanced TruxApp. We are dedicated to providing truck drivers and businesses with a comprehensive platform that offers optimized route planning, real-time updates and efficient coordination. By streamlining operations and reducing congestion, we aim to enhance overall productivity, promote sustainable practises and contribute to the development and prosperity of the region.

              </p>
              <button className="download-app-button">Download App</button>
            </div>
          </div>
          <div>
            <img
              src="img/image/products.png"
              className="img-fluid"
              alt="Our Vision"
            />
          </div>
        </div>
  
  );
};

export default Products;
