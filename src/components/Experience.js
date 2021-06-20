import React from "react";

import htmlcssjs from "./images/htmlcssjs.png";

const Experience = () => {
  return (
    <div class="main">
    <div class="main_content">
    <div class="experiences_content">
      <div class="experiences_content_top">
        <h1>Experience</h1>
      </div>
      <div class="experiences_content_mid_l">
            <div class="skills_tools" id="skills_tools">
              <div class="grid-container">
                <div class="grid-content"><img src={htmlcssjs} class="avatar"></img><p>HTML, CSS, JS</p></div>
                <div class="grid-content"><img src="./images/github.png"></img><p>GitHub</p></div>
                <div class="grid-content"><img src="./images/trello.png"></img><p>Trello</p></div>
                <div class="grid-content"><img src="./images/digitalocean.svg"></img><p>Digital Ocean</p></div>
                <div class="grid-content"><img src="./images/poeditor.png"></img><p>PoEditor</p></div>
                <div class="grid-content"><img src="./images/photoshop.svg"></img><p>Photoshop</p></div>
                <div class="grid-content"><img src="./images/adobe-illustrator.svg"></img><p>Illustrator</p></div>
                <div class="grid-content"><img src="./images/indesign.svg"></img><p>InDesign</p></div>
                <div class="grid-content"><img src="./images/invision.svg"></img><p>Invision</p></div>
                <div class="grid-content"><img src="./images/figma.svg"></img><p>Figma</p></div>
                <div class="grid-content"><img src="./images/zendesk.svg"></img><p>Zendesk</p></div>
                <div class="grid-content"><img src="./images/intercom.svg"></img><p>Intercom</p></div>
                <div class="grid-content"><img src="./images/customerio.png"></img><p>Customer.io</p></div>
                <div class="grid-content"><img src="./images/googleadslogo.png"></img><p>Google Ads</p></div>
                <div class="grid-content"><img src="./images/googleanalytics.png"></img><p>Google Analytics</p></div>
              </div>
            </div>
            <div class="skills_exp" id="skills_exp">
              <div class="grid-container">
                <div class="grid-content"><img src="./images/finrocks-black-logo.png"></img><h5 class="exp_company">FINROCKS</h5><p class="exp_titlejob">Vice President Operations</p></div>
                <div class="grid-content"><img src="./images/klickown.png"></img><h5 class="exp_company">KLICKOWN</h5><p class="exp_titlejob">Biz Dev Associate</p></div>
                <div class="grid-content"><img src="./images/naga.png"></img><h5 class="exp_company">NAGA</h5><p class="exp_titlejob">Global Head of Support</p></div>
                <div class="grid-content"><img src="./images/nagacoin.png"></img><h5 class="exp_company">NAGA COIN</h5><p class="exp_titlejob">ICO ADVISOR (Comms)</p></div>
                <div class="grid-content"><img src="./images/hanseaticbrokerhouse.png"></img><h5 class="exp_company">HBS</h5><p class="exp_titlejob">Brokerage Administrator</p></div>
                <div class="grid-content"><img src="./images/apple.png"></img><h5 class="exp_company">APPLE</h5><p class="exp_titlejob">MacOS Support Tech</p></div>
                <div class="grid-content"><img src="./images/xerox.png"></img><h5 class="exp_company">XEROX</h5><p class="exp_titlejob">Service Technician</p></div>
                <div class="grid-content"><img src="./images/dominos.png"></img><h5 class="exp_company">DOMINOS</h5><p class="exp_titlejob">Local Ops Manager</p></div>
                <div class="grid-content"><img src="./images/postbank.png"></img><h5 class="exp_company">POSTBANK</h5><p class="exp_titlejob">Cert. Office Administor</p></div>
                <a href="https://www.linkedin.com/in/dario-n-evers/" target="_blank"><div class="grid-content graybg"><img src="./images/linkedin.png"></img><h5 class="exp_company_white">dario-n-evers</h5><p class="exp_titlejob">Check my profile</p></div></a>
              </div>
            </div>
      <div class="experiences_content_mid_r">
        <div class="experiences_content_mid_r_top"></div>
        <div class="experiences_content_mid_r_bot">
              <div onclick="experience_switch_tools()" class="browser_content_skills_left_switch active" id="skills_switch_tools"> Tools</div>
              <div onclick="experience_switch_exp()" class="browser_content_skills_left_switch" id="skills_switch_exp">Experience</div>
        </div>
      </div>
      <div class="experiences_content_bot">
        <div class="experiences_content_bot_box"></div>
        <div class="experiences_content_bot_box"></div>
        <div class="experiences_content_bot_box"></div>
        <div class="experiences_content_bot_box"></div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};
export default Experience;
