import React from 'react';
import './register.scss';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import AuthForm from '../../components/authForm/AuthForm';


const Register: React.FC = () => {
  const handleSubmit = () => {
    console.log('Here will be the request to DB 😍');
  };

  return (
    <div className="register-container">
      <h1>Registration</h1>
      <div className="register-card">
        <button type="button" className="btn register-btn">
Enter with Google account
          <span className="social"><FaGoogle /></span>
        </button>
        <button type="button" className="btn register-btn">
Enter with Facebook account
          <span className="social"><FaFacebook /></span>
        </button>
      </div>
      <h2 className="create-title">Create new account</h2>
      <AuthForm handleRequest={handleSubmit} />
    </div>
  );
};

export default Register;
