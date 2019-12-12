import React from "react";
import homepage from "../../homepage.jpg";
import "./nav.scss";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Inside the flow</h1>
      </Link>
      <div className="info">
        <img className="image" src={homepage} alt="Pavlo" />
        <div className="info-text">
          <p>
            Personal blog by{" "}
            <a href="https://twitter.com/PVasylkivskyi">Pavlo Vasylkivskyi</a>.
          </p>
          <p>This is where I write down my thoughts.</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
