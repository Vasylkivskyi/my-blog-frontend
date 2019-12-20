import React from 'react';
import './newComment.scss';

interface NewCommentInterface {
  postId: number;
}

const NewComment: React.FC<NewCommentInterface> = ({ postId }) => {
  console.log(postId);
  return (
    <div className="new-comment">
      <h3>What do you think?</h3>
      <div className="login-info">
Logged as
        {' '}
        <span className="user-name">Tony Stark</span>
      </div>
      <textarea
        name=""
        className="text-area"
        placeholder="You can leave your comment here..."
      />
      <button type="button" className="btn">Submit</button>
    </div>
  );
};

export default NewComment;
