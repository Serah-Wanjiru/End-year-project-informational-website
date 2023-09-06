import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer Component", () => {
  test("renders the correct copyright text", () => {
    render(<Footer />);
    
   
    const copyrightText = screen.getByText(/copyright @nova truxapp/i);
    expect(copyrightText).toBeInTheDocument();

   
    const link = screen.getByRole("link", { name: /nova/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");

   
    expect(link.textContent).toBe("Nova");
  });

  

});