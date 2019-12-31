import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../inputComponent/Input';
import './authForm.scss';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email address!')
    .required('Must enter an email!'),
  password: Yup.string().min(6, 'Password must be longer than 6 characters'),

});

interface AuthFormInterface {
  handleRequest: Function;
}

const AuthForm: React.FC<AuthFormInterface> = ({ handleRequest }) => (
  <div className="auth-form">
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleRequest();
        resetForm();
        setSubmitting(true);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
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
          <button className="btn submit-button" type="submit" disabled={isSubmitting}>Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default AuthForm;
