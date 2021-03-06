import * as React from 'react';
import './login.scss';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import AuthForm from '../../components/authForm/AuthForm';


const Login: React.FC = () => {
  const [isShowing, setShowing] = React.useState<boolean>(false);
  const toggleModal = () => {
    console.log('😈');
    setShowing(!isShowing);
  };

  const handleSubmit = () => {
    console.log('Here will be the request to DB from login 🤓');
  };

  return (
    <div className="login">
To leave a comment please
      {' '}
      <span className="login-button" onClick={() => toggleModal()} tabIndex={0} role="button">login</span>
.
      {' '}
      {' '}
        Don&apos;t have an account?
      {' '}
      <Link to="/register">
        <span className="login-button">Register</span>
      </Link>
      <Modal isShoving={isShowing} toggleModal={() => toggleModal()}>
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
            <h3 className="email-login">Log In with email</h3>
            <AuthForm handleRequest={handleSubmit} />
          Don&apos;t have an account?
            {' '}
            <Link to="/register">
              <span className="login-button">Register</span>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
