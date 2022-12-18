import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';

import { Container, Header, Link } from './SharedLayout.styled';
import Spinner from '../Spinner/Spinner';

export default function SharedLayout() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Header>
        <nav>
          {isLoggedIn ? (
            <>
              <Link to="/" end>
                Phonebook
              </Link>
              <Link to="/newcontact">New Contact</Link>
              <button type="button" onClick={() => dispatch(logOut())}>
                Logout
              </button>
              <p>Welcome, {user.name}</p>
            </>
          ) : (
            <AuthNav />
          )}
        </nav>
      </Header>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
