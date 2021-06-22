import React from "react";
import { Link } from "react-router-dom";
import serviceimg from './images/uiux.svg';
import webdevimg from './images/webdev.svg';
import onlinemarketingimage from './images/onlinemarketing.svg';

const Services = () => {
  return (
    <div class="main">
    <div class="main_content">
    <div class="services_content">
      <div class="services_content_top">
        <h1>Services</h1>
      </div>
      <div class="services_content_mid_l leftbox">
      <img src={serviceimg} class="serviceimg"></img>
        <h3 class="serviceheading">UI/UX DESIGN</h3>
        <p class="servicetext">I like simple content, clean & modern design, and useful interactions.</p>
      </div>
      <div class="services_content_mid_m middlebox">
      <img src={webdevimg} class="serviceimg"></img>
        <h3 class="serviceheading">Web Development</h3>
        <p class="servicetext">I love to build things from scratch, and enjoy bringing visions to life.</p>
      </div>
      <div class="services_content_mid_r rightbox">
      <img src={onlinemarketingimage} class="serviceimg"></img>
        <h3 class="serviceheading">ONLINE MARKETING</h3>
        <p class="servicetext">I cherish to create outstanding online content, and market products in digital spaces.</p>
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
