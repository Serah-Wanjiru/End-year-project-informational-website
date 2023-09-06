import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer Component", () => {
  test("renders the correct copyright text", () => {
    render(<Footer />);
    
    // Check if the copyright text is rendered
    const copyrightText = screen.getByText(/copyright @nova truxapp/i);
    expect(copyrightText).toBeInTheDocument();

    // Check if the link is rendered within the text
    const link = screen.getByRole("link", { name: /nova/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");

    // Check if the text content within the link is correct
    expect(link.textContent).toBe("Nova");
  });

  

});