import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'services/auth-operations';
import Button from 'react-bootstrap/esm/Button';
import s from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <h2>Login page</h2>
        <label className={s.label}>
          Email
          <Field className={s.input} type="email" name="email" required />
        </label>
        <label className={s.label}>
          Password
          <Field className={s.input} type="password" name="password" required />
        </label>
        <Button className={s.btn} variant="outline-danger" type="submit">
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default Login;