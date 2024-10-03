import React from "react";

const Contact = () => {
  return (
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="items">
          <i className="fab fa-linkedin icons"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="items">
          <i className="fab fa-facebook icons"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="items">
          <i className="fab fa-twitter icons"></i>
        </a>
        <a href="https://www.github.com" target="_blank" rel="noreferrer" className="items">
          <i className="fab fa-github icons"></i>
        </a>
        <a href="mailto:webdevmastery@gmail.com" target="_blank" rel="noreferrer" className="items">
          <i className="fas fa-envelope icons"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
