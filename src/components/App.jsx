import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { restart } from 'services/auth-operations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './App.module.css';

const Contacts = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restart());
  });

  return (
    <div className={s.form}>
      <header className={s.header} >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? s.activeLink : s.link
                  }
                >
                  Home
                </NavLink>
              {isLoggedIn && (
                  <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                      isActive ? s.activeLink : s.link
                    }
                  >
                    Contacts
                  </NavLink>
              )}
              <div className={s.authnav}>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
              </div>

      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute restricted>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PublicRoute restricted>
                <HomePage />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;