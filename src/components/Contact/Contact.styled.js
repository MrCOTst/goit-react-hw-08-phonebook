import styled from 'styled-components';

export const ContactButton = styled.button`
display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 8px 10px 8px 20px;
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
    /* transform: scale(1.01); */
  }
`;

export const ContactSpanDiv = styled.div`
display: flex;
justify-content: space-between;
margin-left: 5px;
margin-right: auto;
`;

export const ContactButtonDiv = styled.div`
display: flex;
justify-content: space-between;
`;

export const ContactCheckbox = styled.input`
color: aliceblue;
`