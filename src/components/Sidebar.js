
import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <React.Fragment>
    <div className="sidebar_box">
        <div class="sidebar_top">
            <h1>D<span>.</span></h1>
        </div>
        <div class="sidebar_mid">
        <nav>
      <ul class="navigation">
        <li>
          <Link to="/"><i class="fas fa-home"></i></Link>
        </li>
        <li>
          <Link to="/about"><i class="fas fa-user-check"></i></Link>
        </li>
        <li>
          <Link to="/services"><i class="fas fa-briefcase"></i></Link>
        </li>
        <li>
          <Link to="/experience"><i class="fas fa-meteor"></i></Link>
        </li>
        <li>
          <Link to="/works"><i class="fas fa-layer-group"></i></Link>
        </li>

        <li>
          <Link to="/contact"><i class="fas fa-comments"></i></Link>
        </li>
      </ul>
    </nav>
        </div>
        <div class="sidebar_bot">
            <h5>Copyright 2021</h5>
        </div>
    </div>;
    </React.Fragment>
  );
};
export default Sidebar;