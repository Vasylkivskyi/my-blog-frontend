import React from "react";
import "./commentsList.scss";
import CommentItem from "../../components/commentItem/CommentItem";

interface CommentsListInterface {
  comments: any;
  postTitle?: string;
}

const CommentsList: React.FC<CommentsListInterface> = ({
  postTitle,
  comments
}) => {
  return (
    <div className="comments-list">
      <h3>
        {comments.length} Replies to “{postTitle}”
        {comments.map((comment: any) => (
          <CommentItem
            key={comment.id}
            name={comment.author.name}
            text={comment.text}
          />
        ))}
      </h3>
    </div>
  );
};

export default CommentsList;
