import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'services/auth-operations';
import Button from 'react-bootstrap/esm/Button';
import s from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <h2>Register page</h2>
        <label className={s.label}>
          Name
          <Field className={s.input} type="text" name="name" required />
        </label>
        <label className={s.label}>
          Email
          <Field className={s.input} type="email" name="email" required />
        </label>
        <label className={s.label}>
          Password
          <Field className={s.input} type="password" name="password" required />
        </label>
        <Button className={s.btn} variant="outline-danger" type="submit">
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default Register;