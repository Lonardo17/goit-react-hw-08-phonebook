import React from 'react';
import { FcTwoSmartphones } from 'react-icons/fc';
import { Formik, Form, Field } from 'formik';
import { useAddContactMutation, useGetContactsQuery } from 'services/api';
import { toast } from 'react-hot-toast';
import Button from 'react-bootstrap/esm/Button';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const contacts = useGetContactsQuery();
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isContact = contacts.data?.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContact) {
      toast.error(`${name} is already in contact`);
      return;
    } else {
      addContact({ name, number });
      toast.success(`Сontact with ${name} added`);
      resetForm();
    }
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form className={s.submit}>
        <label className={s.label}>
          Name
          <Field
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          Number
          <Field
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button className={s.btn} variant="outline-danger" type="submit">
          {' '}
          {isLoading ? <span>Loading...</span> : <span>Add contact</span>}{' '}
          <FcTwoSmartphones />
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;