import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { Link, LogoutButton, UserNavConteiner, UserNavText } from './UserNav.styled';
import { useDispatch } from 'react-redux';

export const UserNav = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      <UserNavConteiner>
      <Link to="/" end>
        Phonebook
      </Link>
      <Link to="/newcontact">New Contact</Link>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
      </UserNavConteiner>
      <UserNavText>Welcome, {user.name}</UserNavText>
    </>
  );
};
