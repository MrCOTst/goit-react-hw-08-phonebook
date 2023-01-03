import * as React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  LoginH1,
  LoginFormStyle,
  LoginLabel,
  LoginInput,
  // LoginButton,
} from './LoginForm.styled';
import { Button } from '@chakra-ui/react';

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
      <LoginH1> Log in</LoginH1>

      <LoginLabel>
        Email
        <LoginInput placeholder="Enter your email" type="email" name="email" />
      </LoginLabel>

      <LoginLabel>
        Password
        <LoginInput
          placeholder="Enter your password"
          type="password"
          name="password"
          inputmode="numeric"
          minlength="4"
          maxlength="8"
          size="8"
        />
      </LoginLabel>

      <Button
        type="submit"
        colorScheme="messenger"
        borderWidth="1px"
        borderColor="messenger"
        m="6px auto 2px auto"
        p="2px 20px 4px 20px"
        fontSize="24px"
        _hover={{
          bg: 'messenger',
          color: 'white',
          borderWidth: '1px',
          borderColor: 'orange',
          fontSize: '26',
        }}
        _active={{
          bg: 'tomato',
          color: 'teal.500',
        }}
        _selected={{
          bg: 'tomato',
          color: 'white',
        }}
      >
        Log in
      </Button>
    </LoginFormStyle>
  );
};
