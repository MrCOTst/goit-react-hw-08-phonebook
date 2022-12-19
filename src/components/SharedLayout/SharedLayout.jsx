import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import { Container, Header } from './SharedLayout.styled';
import Spinner from '../Spinner/Spinner';

export default function SharedLayout() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Header>
        <nav>{isLoggedIn ? <UserNav /> : <AuthNav />}</nav>
      </Header>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
