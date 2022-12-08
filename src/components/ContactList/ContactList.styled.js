import styled from 'styled-components';

export const ContactUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 20px;
  margin-right: auto;
  padding: 10px;
  font-size: 24px;
  background-color: #c3e6afea;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.25);
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 5px 5px;
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  :last-child {
    margin-bottom: 0;
  }

  hover,
  :focus {
    border: 2px solid;
    background-color: #21d4f3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

