import React from "react";
import "./footer.scss";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      Follow Me
      <a className="social-links" href="https://twitter.com/PVasylkivskyi">
        <img className="social" src={twitter} alt="twitter icon" />
      </a>
      <a
        className="social-links"
        href="https://www.facebook.com/pasha.vasylkivskiy"
      >
        <img className="social" src={facebook} alt="facebook icon" />
      </a>
    </footer>
  );
};

export default Footer;
