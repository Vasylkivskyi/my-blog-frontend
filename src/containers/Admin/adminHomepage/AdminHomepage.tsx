import React from 'react';
import './adminHomepage.scss';
import AuthForm from '../../../components/authForm/AuthForm';

const AdminHomepage = () => {
  const handleSubmit = () => {
    console.log('Here will be request to admin login path 😎');
  };
  return (
    <div className="admin-login">
      <h1>Admin</h1>
      <h3 className="please-login">
        Please login & try to change the world
        {' '}
        <span role="img" aria-label="cool">😎</span>
      </h3>
      <AuthForm handleRequest={handleSubmit} />
    </div>
  );
};

export default AdminHomepage;
