import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from "./navigation";

describe("Navigation Component", () => {
  test("renders navigation menu", () => {
    render(<Navigation />);
    

    const navMenu = screen.getByRole("navigation");
    expect(navMenu).toBeInTheDocument();

    
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();

 
    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toBeInTheDocument();

   
    const menu = screen.getByRole("navigation");
    expect(menu).not.toHaveClass("active");
  });
  

 


});

describe("Navigation Component", () => {
    test("renders correct names for menu links", () => {
      render(<Navigation />);
      
      // Check if the home link has the correct name
      const homeLink = screen.getByRole("link", { name: /home/i });
      expect(homeLink).toHaveTextContent("Home");
  
      // Check if the about link has the correct name
      const aboutLink = screen.getByRole("link", { name: /about/i });
      expect(aboutLink).toHaveTextContent("About");
  
      // Check if the values link has the correct name
      const valuesLink = screen.getByRole("link", { name: /values/i });
      expect(valuesLink).toHaveTextContent("Values");
  
      // Check if the products link has the correct name
      const productsLink = screen.getByRole("link", { name: /products/i });
      expect(productsLink).toHaveTextContent("Products");
  
      // Check if the team link has the correct name
      const teamLink = screen.getByRole("link", { name: /team/i });
      expect(teamLink).toHaveTextContent("Team");
  
      // Check if the contact link has the correct name
      const contactLink = screen.getByRole("link", { name: /contact/i });
      expect(contactLink).toHaveTextContent("Contact");
    });
  
   
  
  });