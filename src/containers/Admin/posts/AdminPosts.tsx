import React, { useState, useEffect } from 'react';
import './adminPosts.scss';
import { Link } from 'react-router-dom';
import {
  AiFillFileText, AiTwotoneCalendar, AiOutlineSearch, AiFillFileAdd,
} from 'react-icons/ai';
import posts from '../../../postMock';
import { slugify } from '../../../Utils/RoutesHelper';

interface PostsStateInterface {
  search: string;
  adminPosts?: {title: string; date: string}[];
}

const AdminPosts: React.FC = () => {
  const [postsState, setPostsState] = useState<PostsStateInterface>({
    search: '',
    adminPosts: [],
  });

  const { search, adminPosts } = postsState;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPostsState({
      search: event.currentTarget.value,
      adminPosts: posts.filter((post) => post.title.includes(search)),
    });
  };

  const renderPostItem = (post: any) => (
    <Link key={post.id} to={`admin/post/${slugify(post.title)}`}>
      <div className="post-item">
        <div className="post-title">
          <div className="icon"><AiFillFileText /></div>
          {post.title}
        </div>
        <div className="post-date">
          <div className="icon white"><AiTwotoneCalendar /></div>
          {post.date}
        </div>
      </div>
    </Link>
  );

  return (
    <div className="admin-posts-container">
      <div className="page-title">
        <h1>Posts</h1>
        <Link to="/admin/posts/new" className="link">
          <div className="btn create-post">
          Create new post
            <AiFillFileAdd className="icon" />
          </div>
        </Link>
      </div>
      <div className="search">
        <AiOutlineSearch className="icon" />
        <input
          type="text"
          className="search-input remove-outline"
          placeholder="Search"
          value={search}
          onChange={(event: React.FormEvent<HTMLInputElement>) => handleChange(event)}
        />
      </div>
      <div className="posts-list">
        {posts.filter((post) => post.title.toLowerCase().includes(`${search}`.toLowerCase())).map((post: any) => (
          renderPostItem(post)
        ))}
      </div>
    </div>
  );
};

export default AdminPosts;
