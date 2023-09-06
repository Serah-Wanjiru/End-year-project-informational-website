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