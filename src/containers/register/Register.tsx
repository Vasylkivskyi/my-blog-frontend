import React from 'react';
import './register.scss';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Input from '../../components/inputComponent/Input';


const Register: React.FC = () => {
  const a = '';
  return (
    <div className="register-container">
      <h1>Registration</h1>
      <div className="register-card">
        <button type="button" className="btn register-btn">
Enter via your Google account
          <span className="social"><FaGoogle /></span>
        </button>
        <button type="button" className="btn register-btn">
Enter via your Facebook account
          <span className="social"><FaFacebook /></span>
        </button>
      </div>
      <h2 className="create-title">Create new account</h2>
      <Input inputType="email" />
      <Input inputType="password" />
      <button className="btn submit-button" type="button">Submit</button>
    </div>
  );
};

export default Register;
