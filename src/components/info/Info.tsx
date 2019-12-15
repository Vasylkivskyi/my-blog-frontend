import React from "react";
import homepage from "../../images/homepage.jpg";
import "./info.scss";
import { withRouter } from "react-router-dom";
import { WithRouterInterface } from "../../interfaces/interfaces";

const Info: React.FC<WithRouterInterface> = ({ location }) => {
  return (
    <div className="info-container">
      {location.pathname.length > 1 && (
        <h3 className="site-name">Inside the flow</h3>
      )}
      <figure className="info">
        <img className="image" src={homepage} alt="Pavlo" />
        <figcaption className="info-text">
          <p>
            Personal blog by{" "}
            <a href="https://twitter.com/PVasylkivskyi">Pavlo Vasylkivskyi</a>.
          </p>
          <p>This is where I write down my thoughts.</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default withRouter(Info);
