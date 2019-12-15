import React from "react";
import "./share.scss";
import share from "../../images/share.svg";

const Share = () => {
  return (
    <div className="share-container">
      <div className="border">
        Share
        <img className="share-button" src={share} alt="share button" />
      </div>
    </div>
  );
};

export default Share;
