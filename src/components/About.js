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
        <div class="about_content_mid_r_inner">
        <p>Hi, I'm Dario. Nice to e-meet you.<br></br>I have a demonstrated history of working in the financial & consumer electronics industry. Previously, I worked as VP Operations, as well as Global Head of Support & member of the core-management team for THE NAGA GROUP AG and affiliated companies.</p>
        </div>
      </div>
      <div class="about_content_bot">
        test
      </div>
    </div>
    </div>
    </div>
  );
};
export default About;
