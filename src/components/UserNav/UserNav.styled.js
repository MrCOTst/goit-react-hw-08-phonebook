import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserNavConteiner = styled.div`
display: inline-flex;
    flex-direction: column;
    max-width: auto;
    margin: 20px;
    padding: 20px;
    border: 2px solid #dbb858;
    border-radius: 10px;
    background-color: #c3e6afea;

  /* padding: 70px 0; */
`;

export const Link = styled(NavLink)`
  margin: 5px 40px 5px 0;
  padding: 8px 8px;
  border: 2px solid blue;;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  background-color: #fff;
  font-size: 24px;
  font-weight: 700;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color: #1565c0;
    box-shadow: 2px 2px 5px #fc894d;
  }

  :hover {
    transform: scale(1.02);
  }
`;

export const LogoutButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-right: auto;
  padding: 8px 8px 8px 8px;
  border-radius: 4px;
  border: none;
  height: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1, 875;
  text-transform: uppercase;
  background-color: #2196f3;
  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 2px solid;
    background-color: #21d4f3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: scale(1.01);
  }
`;

export const UserNavText = styled.p`
  font-weight: 700;
  font-size: 20px;
`;