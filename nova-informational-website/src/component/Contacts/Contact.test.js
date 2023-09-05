import React from "react";
import ReactDOM from "react-dom";
import Contact from "./contact";
it("should render the Contact component correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Contact />, div);
  expect(div.textContent).toContain("Get In Touch");
  expect(div.textContent).toContain("Please fill out the form below to send us an email");
  expect(div.textContent).toContain("Email sent successfully!");
});

it("should send an email when the form is submitted", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Contact />, div);
  const form = div.querySelector("form");
  form.submit();
  expect(emailjs).toHaveBeenCalledWith(
    "service_xgihpil",
    "template_vurq2x9",
    form,
    "ahG5sqQcK4TxfqPIV"
  );
});
