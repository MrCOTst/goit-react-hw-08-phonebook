import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  RegisterFormStyle,
  RegisterLabel,
  RegisterInput,
  RegisterH1,
} from './RegisterForm.styled';
import { Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormStyle onSubmit={handleSubmit} autoComplete="off">
      <RegisterH1> Register</RegisterH1>
      <RegisterLabel>
        Username
        <RegisterInput placeholder="Enter your name" type="text" name="name" />
      </RegisterLabel>
      <RegisterLabel>
        Email
        <RegisterInput
          placeholder="Enter your email"
          type="email"
          name="email"
        />
      </RegisterLabel>
      <RegisterLabel>
        Password
        <RegisterInput
          placeholder="Enter your password"
          type="password"
          name="password"
          inputmode="numeric"
          minlength="4"
          maxlength="8"
          size="8"
          required
        />
      </RegisterLabel>

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
        Register
      </Button>
    </RegisterFormStyle>
  );
};
