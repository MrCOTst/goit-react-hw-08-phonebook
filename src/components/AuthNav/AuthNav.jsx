import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Link to="/welcom" end>Welcome</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </>
  );
};
