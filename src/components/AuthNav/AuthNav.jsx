// import { Link } from './AuthNav.styled';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <>
      <ButtonGroup gap="4" p="20px 0 20px 0">
        <Button
          as={NavLink}
          to="/welcom"
          end
          colorScheme="messenger"
          borderWidth="1px"
          borderColor="messenger"
          _hover={{
            bg: 'messenger',
            color: 'red.500',
            borderWidth: '1px',
            borderColor: 'red',
          }}
          _active={{
            bg: 'tomato',
            color: 'teal.500',
          }}
          _selected={{
            bg: 'tomato',
            color: 'white',
          }}
          variant="outline"
        >
          Welcome
        </Button>
        <Button
          as={NavLink}
          to="/register"
          colorScheme="messenger"
          borderWidth="1px"
          borderColor="messenger"
          _hover={{
            bg: 'messenger',
            color: 'red.500',
            borderWidth: '1px',
            borderColor: 'red',
          }}
          _active={{
            bg: 'tomato',
            color: 'teal.500',
          }}
          _selected={{
            bg: 'tomato',
            color: 'white',
          }}
          variant="outline"
        >
          Register
        </Button>
        <Button
          as={NavLink}
          to="/login"
          colorScheme="messenger"
          borderWidth="1px"
          borderColor="messenger"
          _hover={{
            bg: 'messenger',
            color: 'red.500',
            borderWidth: '1px',
            borderColor: 'red',
          }}
          _active={{
            bg: 'tomato',
            color: 'teal.500',
          }}
          _selected={{
            bg: 'tomato',
            color: 'white',
          }}
          variant="outline"
        >
          Log in
        </Button>
      </ButtonGroup>
    </>
  );
};
