import * as React from 'react';
import './input.scss';

interface InputInterface {
  inputType: string;
  handleChange: Function;
  name: string;
  id: string;
  value: string;
  handleBlur: Function;
  errorClassName?: string;
  errors: any;
}


const Input: React.FC<InputInterface> = ({
  inputType, handleChange, name, id, value, handleBlur, errorClassName, errors,
}) => {
  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="input-container">
      <label htmlFor="email" className="label">
        {inputType === 'email' ? 'Enter your email address' : 'Enter password'}
        <input
          type={inputType}
          className={`input-field remove-outline ${errorClassName}`}
          placeholder={inputType === 'email' ? 'example@coolmail.com' : 'password'}
          name={name}
          value={value}
          id={id}
          onBlur={(e) => handleBlur(e)}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <div className="error">
        {errors.email }
      </div>
    </div>
  );
};

export default Input;
