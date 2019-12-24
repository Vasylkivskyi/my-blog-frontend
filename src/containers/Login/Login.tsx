import React from 'react';
import './login.scss';
import Modal from '../../components/modal/Modal';

const Login = () => {
  console.log('hello');
  return (
    <div className="login">
      To leave a comment please
      {' '}
      <span className="login-button">login</span>
      <Modal isShoving={false} toggleModal={() => console.log('hello')}>
        <div className="login-modal">
          <div className="login-card">
        hello
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
