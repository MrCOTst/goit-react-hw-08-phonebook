import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 70px 0;
`;

export const Header = styled.header`
  background-color: #1e2125;
  z-index: 300;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 50px;
  border-bottom: 3px solid red;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  margin: 5px 40px 5px 0;
  padding: 8px 8px;
  border: 2px solid #fff;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: 500;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color: orangered;
  }

  :hover {
    transform: scale(1.03);
  }
`;
