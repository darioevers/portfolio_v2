import React from "react";
import avatar from './images/avatar.png';
const About = () => {
  return (
    <div class="main">
    <div class="main_content">
    <div class="about_content">
      <div class="about_content_top">
        <h1>About Me</h1>
      </div>
      <div class="about_content_mid_l">
      <img src={avatar} class="avatar"></img>
      </div>
      <div class="about_content_mid_r">
      </div>
      <div class="about_content bot"></div>
    </div>
    </div>
    </div>
  );
};
export default About;
