import React from "react";
import { Link } from "react-router-dom";
import serviceimg from './images/service-1.svg';
import webdevimg from './images/web-dev-1.svg';

const Services = () => {
  return (
    <div class="main">
    <div class="main_content">
    <div class="services_content">
      <div class="services_content_top">
        <h1>Services</h1>
      </div>
      <div class="services_content_mid_l leftbox">
      <img src={serviceimg} class="avatar"></img>
        <h3>UI/UX DESIGN</h3>
        <p>Lorem3</p>
      </div>
      <div class="services_content_mid_m middlebox">
      <img src={webdevimg} class="avatar"></img>
        <h3>Web Development</h3>
        <p>Lorem3</p>
      </div>
      <div class="services_content_mid_r rightbox">
      <img src={webdevimg} class="avatar"></img>
        <h3>UI/UX DESIGN</h3>
        <p>Lorem3</p>
      </div>
      <div class="services_content_bot">
      <p>Looking for a custom job? Contact me<Link to="/contact"> here. 👋</Link></p>
      </div>
    </div>
    </div>
    </div>
  );
};
export default Services;
