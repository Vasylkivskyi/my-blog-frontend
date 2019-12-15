import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import Info from "../info/Info";
import { withRouter } from "react-router-dom";
import { WithRouterInterface } from "../../interfaces/interfaces";

const Nav: React.FC<WithRouterInterface> = ({ location }) => {
  const cssClass = location.pathname.length > 1 ? "without-info" : "";

  return (
    <nav className={`navbar ${cssClass}`}>
      <Link to="/">
        <h1 className="site-name">Inside the flow</h1>
      </Link>
      {location.pathname.length === 1 && <Info />}
    </nav>
  );
};

export default withRouter(Nav);
