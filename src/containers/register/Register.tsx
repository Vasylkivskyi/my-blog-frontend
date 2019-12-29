import React from 'react';
import './register.scss';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/inputComponent/Input';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email address!')
    .required('Must enter an email!'),
});

const Register: React.FC = () => (
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
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={() => console.log('😍')}
      validationSchema={validationSchema}
    >
      {({
        values, errors, touched, handleChange, handleBlur,
      }) => {
        console.log(errors);
        return (
          <form>
            <Input
              inputType="email"
              handleChange={handleChange}
              name="email"
              id="email"
              value={values.email}
              handleBlur={handleBlur}
              errorClassName={touched.email && errors.email ? 'has-error' : ''}
              errors={errors}
            />
            {/* <Input inputType="password" /> */}
            <button className="btn submit-button" type="submit">Submit</button>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default Register;
