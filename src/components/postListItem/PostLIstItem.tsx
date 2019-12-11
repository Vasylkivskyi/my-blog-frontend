import React from "react";
import "./PostLIstItem.scss";

interface PostLIstItemInterface {
  title: string;
  text: string;
  date?: string;
}

const PostLIstItem: React.FC<PostLIstItemInterface> = ({ title, text }) => {
  const wordsLength = text.split(" ").length;
  //Math.ceil(text.length / 600);
  const readTime =
    wordsLength < 200
      ? "less than 1 min read"
      : `${Math.ceil(wordsLength / 200)} min read`;

  const renderCups = () => {
    const cupsNum = Math.floor(wordsLength / 200 / 5);
    const cups = [];
    for (let i = 0; i <= cupsNum; i++) {
      cups.push(
        <span key={i} role="img" aria-label="coffee">
          ☕️
        </span>
      );
    }
    return cups;
  };

  return (
    <div className="post-list-item">
      <h2>{title}</h2>
      <div className="post-list-item__info">
        December 3, 2018 • {renderCups()} {readTime}
      </div>
      <p>{text.slice(0, 200)}...</p>
    </div>
  );
};

export default PostLIstItem;
