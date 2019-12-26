import React from 'react';
import './input.scss';

interface InputInterface {
  inputType: string;
}

const Input: React.FC<InputInterface> = ({ inputType }) => {
  const a = null;
  return (
    <div className="input-container">
      <label htmlFor="email" className="label">
        {inputType === 'email' ? 'Enter your email address' : 'Enter password'}
        <input
          type={inputType}
          className="input-field remove-outline"
          placeholder={inputType === 'email' ? 'example@coolmail.com' : ''}
          name="email"
        />
      </label>
      <div className="error">
        Error message will be here
      </div>
    </div>
  );
};

export default Input;
