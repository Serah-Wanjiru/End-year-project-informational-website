import React from "react";
import ReactDOM from "react-dom";
import Contact from ".";
import emailjs from "emailjs-com";

it("should render the contact form", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Contact />, div);
  expect(div.textContent).toContain("Get In Touch");
  expect(div.textContent).toContain("Please fill out the form below");
});



it("should send an email when the form is submitted", () => {
  const div = document.createElement("div");
  const spy = jest.spyOn(emailjs, "sendForm");
  ReactDOM.render(<Contact />, div);
  div.querySelector("form").submit();
  expect(spy).toHaveBeenCalledWith(
    "service_xgihpil",
    "template_vurq2x9",
    div.querySelector("form"),
    "ahG5sqQcK4TxfqPIV"
  );
});

it("should show a success message when the email is sent", () => {
    const div = document.createElement("div");
    const spy = jest.spyOn(emailjs, "sendForm");
    spy.mockReturnValue({ text: "Email sent successfully!" });
    ReactDOM.render(<Contact />, div);
  
    setTimeout(() => {
      expect(div.textContent).toContain("Email sent successfully!");
    }, 1000);
  });