import {Formik} from 'formik';
import * as Yup from 'yup';
import React from 'react';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Input the right format!')
    .required('Email is Required.'),
  password: Yup.string().required('Input your password!'),
});

const initialForm = {
  email: '',
  password: '',
};

export default function FormLogin({login}) {
  const [showPass, setShowPass] = React.useState(false);

  return (
    <Formik
      initialValues={initialForm}
      validationSchema={schema}
      validateOnBlur
      onSubmit={(values) => {
        login(values);
      }}
    >
      {(props) => {
        const {
          touched,
          errors,
          handleSubmit,
          values,
          handleChange,
          handleBlur,
        } = props;

        return (
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <h1 className="text-center">Login</h1>
            <label className="label" htmlFor="email">
              Email
              <input
                className="login-input"
                name="email"
                type="email"
                required
                value={values.email}
                id="email"
                placeholder="ex: name@mail.com"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email || touched.email ? (
                <span className="error">{errors.email}</span>
              ) : null}
            </label>
            <label className="label" htmlFor="password">
              Password
              <input
                className="login-input"
                name="password"
                type={showPass ? 'text' : 'password'}
                required
                id="password"
                value={values.password}
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password || touched.password ? (
                <span className="error">{errors.password}</span>
              ) : null}
            </label>
            <label className="show-pass" htmlFor="show-pass">
              Show Password
              <input
                id="show-pass"
                className="show-password"
                type="checkbox"
                onChange={() => setShowPass((x) => !x)}
              />
            </label>
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        );
      }}
    </Formik>
  );
}
