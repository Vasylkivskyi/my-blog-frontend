import React from 'react';
import './login.scss';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from '../../components/modal/Modal';


const Login = () => (
  <div className="login">
To leave a comment please
    {' '}
    <span className="login-button">login</span>
.
    {' '}
    {' '}
        Don&apos;t have an account?
    {' '}
    <Link to="/register">
      <span className="login-button">Register</span>
    </Link>
    <Modal isShoving={false} toggleModal={() => console.log('hello')}>
      <div className="login-modal">
        <div className="login-card">
          <h3 className="login-header">Log in and leave a comment</h3>
          <div className="google btn">
            <FaGoogle className="icon" />
Log In with Google
          </div>
          <div className="google btn">
            <FaFacebook className="icon" />
Log In with Facebook
          </div>
        </div>
      </div>
    </Modal>
  </div>
);

export default Login;
