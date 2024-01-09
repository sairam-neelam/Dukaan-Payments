import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-header">
      <div className="page-title">
        <span className="title-element">Payouts</span>
        <span className="info">
          <i className="bi bi-question-circle"></i> How it works
        </span>
      </div>
      <div className="search-input-container">
        <i className="bi bi-search"></i>
        <input
          className="search-input"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div className="notifier">
        <span className="icon">
          <i className="bi bi-chat-left-dots"></i>
        </span>
        <span className="icon">
          <i className="bi bi-caret-down-fill"></i>
        </span>
      </div>
    </div>
  );
};

export default Header;
