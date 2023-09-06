

import React from "react";
import ReactDOM from "react-dom";
import Team from "./Team";
it("should render the team member names", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Team />, div);
    
    const teamMemberNames = div.querySelectorAll(".team-member h4");
    expect(teamMemberNames.length).toBe(5);
   
    const expectedNames = ["Bridget Mutesi", "Serah Wanjiru", "Faith Mwamkinga", "Maureen Ougo", "Rita Khaseyi"];
    for (let i = 0; i < teamMemberNames.length; i++) {
      expect(teamMemberNames[i].textContent).toBe(expectedNames[i]);
    }
    const teamMemberRoles = div.querySelectorAll(".team-member p");
    expect(teamMemberRoles.length).toBe(5);
   
    const expectedRoles = ["Software Developer || UI/UX Designer", "Software Developer", "Software Developer || Product Manager", "Software Developer", "Software Developer"];
    for (let i = 0; i < teamMemberRoles.length; i++) {
      expect(teamMemberRoles[i].textContent.trim()).toBe(expectedRoles[i]);
    }
  });
  