
import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <React.Fragment>
    <div className="sidebar_box">
        <div class="sidebar_top">
            <h1>darioevers<span>.</span></h1>
        </div>
        <div class="sidebar_mid">
        <nav>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
        </div>
        <div class="sidebar_bot">
            <h5>Copyright 2021 by Dario</h5>
        </div>
    </div>;
    </React.Fragment>
  );
};
export default Sidebar;