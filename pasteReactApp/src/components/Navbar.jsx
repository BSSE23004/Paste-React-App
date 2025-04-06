import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-4 ">
      <NavLink to="/" className="text-2xl font-bold">
        Home
      </NavLink>
      <NavLink to="/pastes" className="text-2xl font-bold">
        Pastes
      </NavLink>
    </div>
  );
};

export default Navbar;
