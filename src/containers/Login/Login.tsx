import React from 'react';
import './login.scss';
import Modal from '../../components/modal/Modal';

const Login = () => {
  console.log('hello');
  return (
    <div className="login-container">
      To live a comment you have to
      {' '}
      <span className="login-button">login</span>
      <Modal isShoving toggleModal={() => console.log('hello')}>
        <div className="login-container">
          <div className="login-card">
        hello
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
