import React from "react";
import { render } from "@testing-library/react";
import Team from "./";

describe("Team component", () => {
  it("renders team members correctly", () => {
    const { getAllByText, getByAltText } = render(<Team />);

    expect(getAllByText("Software Developer")).toHaveLength(3);

    expect(getAllByText("Bridget Mutesi")).toHaveLength(1);
    expect(getAllByText("Software Developer || UI/UX Designer")).toHaveLength(1);
    expect(getByAltText("Bridget Mutesi")).toBeInTheDocument();

    expect(getAllByText("Serah Wanjiru")).toHaveLength(1);
    expect(getAllByText("Software Developer")).toHaveLength(3); 
    expect(getByAltText("Sera")).toBeInTheDocument();

    expect(getAllByText("Faith Mwamkinga")).toHaveLength(1);
    expect(getAllByText("Software Developer || Product Manager")).toHaveLength(1);
    expect(getByAltText("Mwamkinga")).toBeInTheDocument();

    expect(getAllByText("Maureen Ougo")).toHaveLength(1);
    expect(getAllByText("Software Developer")).toHaveLength(3); 
    expect(getByAltText("Maureen")).toBeInTheDocument();

    expect(getAllByText("Rita Khaseyi")).toHaveLength(1);
    expect(getAllByText("Software Developer")).toHaveLength(3); 
    expect(getByAltText("Rita")).toBeInTheDocument();
  });
});