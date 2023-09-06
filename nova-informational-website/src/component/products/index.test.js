import React from "react";
import { render } from "@testing-library/react";
import Products from "./";

test("displays the correct text", () => {
    const { getByText } = render(<Products />);
    const headingElement = getByText("Our Products");
    const paragraphElement = getByText(
        "Our mission is to revolutionize truck logistics in the Busia Malaba area through our advanced TruxApp. We are dedicated to providing truck drivers and businesses with a comprehensive platform that offers optimized route planning, real-time updates and efficient coordination. By streamlining operations and reducing congestion, we aim to enhance overall productivity, promote sustainable practises and contribute to the development and prosperity of the region."
        
    );
  
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
  
  