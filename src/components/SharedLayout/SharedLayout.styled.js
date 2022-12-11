import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
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

export const Header = styled.header`
  /* background-color: #1e2125; */
  /* z-index: 300;
  position: fixed; */
  top: 0;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 12px; */
  padding: 8px 50px;
  border: 2px solid blue;
  border-radius: 10px;

  > nav {
    display: flex;
  }
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
