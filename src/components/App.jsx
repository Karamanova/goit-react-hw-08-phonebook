import 'modern-normalize';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "hocs/PublicRoute";
import { PrivateRoute } from "hocs/PrivateRoute";
import { Loader } from 'components/common/Loader/Loader';
import { fetchCurrentUser } from 'redux/authSlice';
import { selectIsRefreshing } from 'redux/authSlice';

const AppBar = lazy(() => import('layouts/AppBar'))
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index path="/"
              element={<PublicRoute><Home /></PublicRoute>} />
            <Route path="login"
              element={<PublicRoute restricted><Login /></PublicRoute>} />
            <Route path="register"
              element={<PublicRoute restricted><Register /></PublicRoute>} />
            <Route path='contacts'
              element={<PrivateRoute><Contacts /></PrivateRoute>} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
    </Suspense>
  );
};