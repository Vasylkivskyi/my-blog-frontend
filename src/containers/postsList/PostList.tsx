import React from "react";
import "./postList.scss";
import PostListItem from "../../components/postListItem/PostLIstItem";
import { posts } from "../../postMock";

const PostList: React.FC = () => {
  return (
    <section className="post-list">
      {posts.map(post => (
        <PostListItem key={post.id} title={post.title} text={post.text} />
      ))}
    </section>
  );
};

export default PostList;
