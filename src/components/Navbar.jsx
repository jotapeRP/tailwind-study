import React from "react";
import tesla from "../images/tesla.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={tesla} alt="tesla logo" className="h-4" />
      <div>
        <a href="#modelS" className="nav_link">
          Model S
        </a>
        <a href="#model3" className="nav_link">
          Model 3
        </a>
        <a href="#modelX" className="nav_link">
          Model X
        </a>
        <a href="#modelY" className="nav_link">
          Model Y
        </a>
        <a href="#solarRoof" className="nav_link">
          Solar Roof
        </a>
        <a href="#solarPanels" className="nav_link">
          Solar Panels
        </a>
      </div>
      <div>
        <a href="#shop" className="nav_link">
          Shop
        </a>
        <a href="#account" className="nav_link">
          Account
        </a>
        <a href="#menu" className="nav_link">
          Menu
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
