import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => (
  <div className={s.container}>
    <h2 className={s.title}>
      Welcome to <span className={s.logo}>Phonebook</span>! <br />
      <NavLink className={s.link} to="/register">
        Register  
      </NavLink>
      or  
      <NavLink className={s.link} to="/login">
        login
      </NavLink>
      , please.
    </h2>
  </div>
);

export default HomePage;