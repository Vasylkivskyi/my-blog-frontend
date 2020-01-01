import React from 'react';
import './newPost.scss';
import { MdSave } from 'react-icons/md';

const NewPost: React.FC = () => {
  console.log('new post');
  return (
    <div className="new-post-container">
      <h1>New post</h1>
      <div className="editing">
        <input type="text" name="title" className="title remove-outline" placeholder="Article title" />
        <div className="controls">
          <div />
        </div>
        <textarea name="text-area" id="text-area" className="text-area remove-outline" />
        <div className="btn save">
Save
          <MdSave className="icon" />
        </div>
      </div>
    </div>
  );
};

export default NewPost;
