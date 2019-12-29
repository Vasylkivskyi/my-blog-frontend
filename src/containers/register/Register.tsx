import React from 'react';
import './register.scss';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/inputComponent/Input';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email address!')
    .required('Must enter an email!'),
  password: Yup.string().min(6, 'Password must be longer than 6 characters'),

});

const Register: React.FC = () => (
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
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={() => console.log('😍')}
      validationSchema={validationSchema}
    >
      {({
        values, errors, touched, handleChange, handleBlur,
      }) => (
        <form>
          <Input
            inputType="email"
            handleChange={handleChange}
            name="email"
            id="email"
            value={values.email}
            handleBlur={handleBlur}
            errorClassName={touched.email && errors.email ? 'has-error' : ''}
            emailErrors={touched.email && errors.email}
          />
          <Input
            inputType="password"
            handleChange={handleChange}
            name="password"
            id="password"
            value={values.password}
            handleBlur={handleBlur}
            errorClassName={touched.password && errors.password ? 'has-error' : ''}
            passwordErrors={touched.password && errors.password}
          />
          <button className="btn submit-button" type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default Register;
