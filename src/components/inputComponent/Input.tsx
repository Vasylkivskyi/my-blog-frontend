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
  emailErrors?: any;
  passwordErrors?: any;
}


const Input: React.FC<InputInterface> = ({
  inputType, handleChange, name, id, value, handleBlur, errorClassName, emailErrors, passwordErrors,
}) => (
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
      {inputType === 'email' ? emailErrors : passwordErrors }
    </div>
  </div>
);

export default Input;
