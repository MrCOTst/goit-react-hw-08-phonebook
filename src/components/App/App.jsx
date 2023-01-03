import * as React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/NotFound';
import SharedLayout from '../SharedLayout/SharedLayout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react';

const Home = lazy(() => import('../../pages/Home/Home'));
const NewContact = lazy(() => import('../../pages/NewContact/NewContact'));
const EditContact = lazy(() => import('../../pages/EditContact/EditContact'));
const Welcome = lazy(() => import('../../pages/Welcom/welcom'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/" component={<LoginPage />} />
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute redirectTo="/login" component={<Home />} />
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/welcom" element={<Welcome />} />
            <Route path="/newcontact" element={<NewContact />} />
            <Route path="/:id" element={<EditContact />} />
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
        <ToastContainer />
      </ChakraProvider>
    </>
  );
}
