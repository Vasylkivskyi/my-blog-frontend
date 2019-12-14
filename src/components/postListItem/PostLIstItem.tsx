import React from "react";
import "./PostLIstItem.scss";
import { Link } from "react-router-dom";
import { slugify } from "../../Utils/RoutesHelper";
import PostInfo from "../postInfo/PostInfo";

interface PostLIstItemInterface {
  title: string;
  text: string;
  date?: string;
}

const PostLIstItem: React.FC<PostLIstItemInterface> = ({ title, text }) => {
  return (
    <div className="post-list-item">
      <Link to={`/${slugify(title)}`}>
        <h2>{title}</h2>
      </Link>
      <PostInfo text={text} date="December 3, 2018" />
      <p>{text.slice(0, 200)}...</p>
    </div>
  );
};

export default PostLIstItem;
