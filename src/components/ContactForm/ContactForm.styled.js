import styled from 'styled-components';

export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 20px;
  border: 2px solid #dbb858;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #e5e7c5;
`;

export const PhonebookLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 700;
  font-size: 20px;
  line-height: 1, 875;
`;

export const PhonebookInput = styled.input`
  font: inherit;
  padding: 8px;
  margin: 8px 0 8px 0;
  max-width: 80%;
  border-radius: 8px;
  border-color: blue;
`;

export const PhonebookButton = styled.button`
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
