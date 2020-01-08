import React from 'react';
import './newPost.scss';
import TextEditor from '../../../components/textEditor/TextEditor';

const NewPost: React.FC = () => (
  <div className="new-post-container">
    <h1>New post</h1>
    <div className="editing">
      <input type="text" name="title" className="title remove-outline" placeholder="Article title" />
      <TextEditor />

    </div>
  </div>
);

export default NewPost;
