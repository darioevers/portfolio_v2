import React from "react";
import { Link } from "react-router-dom";
import avatar from './images/avatar.png';
const Home = () => {
  return (
    <div class="main">
    <div class="main_content">
    <div class="home_content  hctop">
    <img src={avatar} class="avatar"></img>
    </div>
    <div class="home_content">
      <h1>Dario Evers</h1>
    </div>
    <div class="home_content">
      <p>I'm a Web Developer 👋</p>
    </div>
    <div class="home_content">
      <a href="https://linkedin.com/in/dario-n-evers/" target="_blank"><i class="fab fa-linkedin-in fa-social"></i></a>
      <a href="https://github.com/darioevers" target="_blank"><i class="fab fa-github-alt fa-social"></i></a>
    </div>
    <div class="home_content">
      
      <Link to="/about"><button class="hireme_button">Hire me</button></Link>
    </div>
    </div>
    </div>
  );
};
export default Home;
