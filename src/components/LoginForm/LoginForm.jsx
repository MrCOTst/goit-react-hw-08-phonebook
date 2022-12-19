import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginFormStyle, LoginLabel, LoginInput, LoginButton } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormStyle onSubmit={handleSubmit} autoComplete="off">
      <h1>Log in</h1>
      <LoginLabel >
        Email
        <LoginInput type="email" name="email" />
      </LoginLabel>
      <LoginLabel >
        Password
        <LoginInput type="password" name="password" inputmode="numeric" minlength="4"
       maxlength="8" size="8"/>
      </LoginLabel>
      <LoginButton type="submit">Log In</LoginButton>
    </LoginFormStyle>
  );
};