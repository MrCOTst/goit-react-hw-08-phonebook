import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { UserNavConteiner, UserNavText } from './UserNav.styled';
import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

export const UserNav = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      <UserNavText>
        Welcome, {user.name}. Email: {user.email}
      </UserNavText>

      <UserNavConteiner>
        <Button
          as={NavLink}
          to="/"
          end
          colorScheme="messenger"
          borderWidth="1px"
          borderColor="messenger"
          type="button"
          mr="20px"
          fontSize={28}
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
          Phonebook
        </Button>
        <Button
          as={NavLink}
          to="/newcontact"
          colorScheme="messenger"
          borderWidth="1px"
          borderColor="messenger"
          mr="20px"
          fontSize={28}
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
          New Contact
        </Button>

        <Button
          as={NavLink}
          to="/login"
          color="white"
          colorScheme="messenger"
          borderWidth="3px"
          borderColor="white"
          onClick={() => dispatch(logOut())}
          type="button"
          fontSize={28}
          _hover={{
            bg: 'messenger',
            color: 'red.500',
            borderWidth: '3px',
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
        >
          Logout
        </Button>
      </UserNavConteiner>
    </>
  );
};
