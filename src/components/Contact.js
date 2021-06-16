import React from "react";
const Contact = () => {
  return (
    <div class="main">
    <div class="main_content">
    <div class="contact_content">
      <div class="contact_content_top">
        <h1>Get in Touch</h1>
      </div>
      <div class="contact_content_bot_l">
        <h2>Let's talk about everything!</h2>
        <p>Don't like forms? Send me<br></br> an <a href="mailto:darioevers@gmail.com">email</a>.👋</p>
      </div>
      <div class="contact_content_bot_r">
        <form>
          <input type="name" class="input_name" placeholder="Your Name"></input>
          <input type="email" class="input_email" placeholder="Email address"></input>
          <input type="text" class="input_text" placeholder="Subject"></input>
          <textarea class="input_textarea" placeholder="Message" cols="40" rows="5"></textarea>
          <button class="input_button">Send Message</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};
export default Contact;
