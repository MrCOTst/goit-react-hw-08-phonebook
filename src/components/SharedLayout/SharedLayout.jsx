import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import Spinner from '../Spinner/Spinner';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Phonebook
          </Link>
          <Link to="/newcontact">New Contact</Link>
        </nav>
      </Header>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
