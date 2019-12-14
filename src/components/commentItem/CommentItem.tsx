import React from "react";
import "./commentItem.scss";
import tony from "../../images/tony.png";

interface CommentItemInterface {
  name: string;
  text: string;
}

const CommentItem: React.FC<CommentItemInterface> = ({ name, text }) => {
  return (
    <div className="comment-container">
      <div className="comment-data">
        <img className="avatar" src={tony} alt="" />
        <div className="comment-info">
          <h4>{name}</h4>
          <div className="date">November 8, 2019</div>
        </div>
      </div>
      <p className="text">{text}</p>
    </div>
  );
};

export default CommentItem;
