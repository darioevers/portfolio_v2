import React from "react";

import htmlcssjspng from "./images/htmlcssjs.png";
import githubpng from "./images/github.png"
import trellopng from "./images/trello.png"
import poeditorpng from "./images/poeditor.png"
import photoshopsvg from "./images/photoshop.svg"
import illustratorsvg from "./images/adobe-illustrator.svg"
import indesignsvg from "./images/indesign.svg"
import invisionsvg from "./images/invision.svg"
import zendesksvg from "./images/zendesk.svg"
import customeriopng from "./images/customerio.png"
import googleadslogopng from "./images/googleadslogo.png"
import googleanalyticspng from "./images/googleanalytics.png"
import finrockslogopng from "./images/finrocks-black-logo.png"
import klickownpng from "./images/klickown.png"
import nagapng from "./images/naga.png"
import nagacoinpng from "./images/nagacoin.png"
import hbspng from "./images/hanseaticbrokerhouse.png"
import applepng from "./images/apple.png"
import xeroxpng from "./images/xerox.png"
import dominospng from "./images/dominos.png"
import postbankpng from "./images/postbank.png"
import linkedinpng from "./images/linkedin.png"



const Experience = () => {
  return (
    <div class="main">
    <div class="main_content">
    <div class="experiences_content">
      <div class="experiences_content_top">
        <h1>Experience</h1>
      </div>
      <div class="experiences_content_mid">
        <div class="experiences_content_mid_l">
            <div class="skills_tools" id="skills_tools">
              <div class="grid_container_skills">
                <div class="grid_content"><img src={htmlcssjspng} class="avatar"></img><p>HTML, CSS, JS</p></div>
                <div class="grid_content"><img src={githubpng}></img><p>GitHub</p></div>
                <div class="grid_content"><img src={trellopng}></img><p>Trello</p></div>
                <div class="grid_content"><img src={poeditorpng}></img><p>PoEditor</p></div>
                <div class="grid_content"><img src={photoshopsvg}></img><p>Photoshop</p></div>
                <div class="grid_content"><img src={illustratorsvg}></img><p>Illustrator</p></div>
                <div class="grid_content"><img src={indesignsvg}></img><p>InDesign</p></div>
                <div class="grid_content"><img src={invisionsvg}></img><p>Invision</p></div>
                <div class="grid_content"><img src={zendesksvg}></img><p>Zendesk</p></div>
                <div class="grid_content"><img src={customeriopng}></img><p>Customer.io</p></div>
                <div class="grid_content"><img src={googleadslogopng}></img><p>Google Ads</p></div>
                <div class="grid_content"><img src={googleanalyticspng}></img><p>Google Analytics</p></div>
              </div>
            </div>
            <div class="skills_exp" id="skills_exp">
              <div class="grid_container_works">
                <div class="grid_content"><img src={finrockslogopng}></img><h5 class="exp_company">FINROCKS</h5><p class="exp_titlejob">Vice President Operations</p></div>
                <div class="grid_content"><img src={klickownpng}></img><h5 class="exp_company">KLICKOWN</h5><p class="exp_titlejob">Biz Dev Associate</p></div>
                <div class="grid_content"><img src={nagapng}></img><h5 class="exp_company">NAGA</h5><p class="exp_titlejob">Global Head of Support</p></div>
                <div class="grid_content"><img src={nagacoinpng}></img><h5 class="exp_company">NAGA COIN</h5><p class="exp_titlejob">ICO ADVISOR (Comms)</p></div>
                <div class="grid_content"><img src={hbspng}></img><h5 class="exp_company">HBS</h5><p class="exp_titlejob">Brokerage Administrator</p></div>
                <div class="grid_content"><img src={applepng}></img><h5 class="exp_company">APPLE</h5><p class="exp_titlejob">MacOS Support Tech</p></div>
                <div class="grid_content"><img src={xeroxpng}></img><h5 class="exp_company">XEROX</h5><p class="exp_titlejob">Service Technician</p></div>
                <div class="grid_content"><img src={dominospng}></img><h5 class="exp_company">DOMINOS</h5><p class="exp_titlejob">Local Ops Manager</p></div>
                <div class="grid_content"><img src={postbankpng}></img><h5 class="exp_company">POSTBANK</h5><p class="exp_titlejob">Cert. Office Administor</p></div>
                <a href="https://www.linkedin.com/in/dario-n-evers/" target="_blank"><div class="grid_content graybg"><img src={linkedinpng}></img><h5 class="exp_company_white">dario-n-evers</h5><p class="exp_titlejob">Check my profile</p></div></a>
              </div>
            </div>
          </div>
        <div class="experiences_content_mid_r">
          <div class="experiences_content_mid_r_top"></div>
          <div class="experiences_content_mid_r_bot">
              <div onclick={skills_switch_tools} class="exp_switches active" id="skills_switch_tools"><h2>Tools</h2></div>
              <div onclick={skills_switch_exp} class="exp_switches" id="skills_switch_exp"><h2>Experience</h2></div>
        </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};


function skills_switch_tools() {
  var x = document.getElementById("skills_tools");
  var y = document.getElementById("skills_exp");
  var a = document.getElementById("skills_switch_tools");
  var b = document.getElementById("skills_switch_exp");
  if (x.style.display === "block") {
  } else {
    y.style.display = "none";
    b.className = "exp_switches";
    x.style.display = "block";
    a.className = "bexp_switches active";
  }
}

function skills_switch_exp() {
  var x = document.getElementById("skills_tools");
  var y = document.getElementById("skills_exp");
  var a = document.getElementById("skills_switch_tools");
  var b = document.getElementById("skills_switch_exp");
  if (y.style.display === "block") {
  } else {
    x.style.display = "none";
    a.className = "exp_switches";
    y.style.display = "block";
    b.className = "exp_switches active";
  }
}


export default Experience;