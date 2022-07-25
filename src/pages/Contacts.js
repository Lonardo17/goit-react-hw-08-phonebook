import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { Toaster } from 'react-hot-toast';
import ContactForm from '../components/ContactForm/ContactForm';
// import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import HomePage from './HomePage/HomePage';

const Contacts = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div>
      {!isLoggedIn && <HomePage />}

      {isLoggedIn && (
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          {/* <Filter /> */}
          <ContactList />
          <Toaster />
        </div>
      )}
    </div>
  );
};

export default Contacts;