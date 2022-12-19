import styled from 'styled-components';

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

