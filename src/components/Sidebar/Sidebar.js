import React from "react";
import "./Sidebar.css";
import { SIDENAV_ELEMENTS } from "./constants";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="./logo.jpeg" height={40} width={40} alt="test" />
        <div className="logo-text">
          <h4 className="title">Nishyan</h4>
          <span className="store-link">Visit Store</span>
        </div>
      </div>
      <ul className="sidebar-menu">
        {SIDENAV_ELEMENTS.map((el) => (
          <li key={el.name}>
            {el.icon} {el.name}
          </li>
        ))}
      </ul>
      <div className="credits-container">
        <div className="wallet">
          <i className="bi bi-wallet"></i>
        </div>
        <div className="credits">
          <span className="label">Available Credits</span>
          <span className="money">222.10</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
