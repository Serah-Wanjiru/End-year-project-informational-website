import React from "react";
import ReactDOM from "react-dom/client";
import About from "./about";
describe("About component", () => {
  it("should render correctly", () => {
    const title = "About Us";
    const component = <About title={title} />;
    const container = document.getElementById("app");
    if (container !== null) {
      const root = ReactDOM.createRoot(container);
      root.render(component);
    }
  });
  it("should have a label for all of its interactive elements", () => {
    const component = <About />;
    const container = document.getElementById("app");
    if (container !== null) {
      const root = ReactDOM.createRoot(container);
      root.render(component);
      const interactiveElements = rendered.querySelectorAll("[href], [tabindex]");
      interactiveElements.forEach((element) => {
        expect(element.hasAttribute("aria-label")).toBeTruthy();
      });
    }
  });
  it("should render quickly enough to be usable", () => {
    const component = <About />;
    const container = document.getElementById("app");
    if (container !== null) {
      const startTime = performance.now();
      ReactDOM.createRoot(container).render(component);
      const endTime = performance.now();
      expect(endTime - startTime).toBeLessThan(1000);
    }
  });
});