import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 700;
  font-size: 20px;
  line-height: 1, 875;
  padding: 10px, 5px;
  margin: 0, 0, 0, 20px;
`;

export const FilterInput = styled.input`
  font: inherit;
  padding: 8px;
  margin: 8px 0 8px 8px;
  max-width: 80%;
  border-radius: 8px;
  border-color: blue;
`;

export const FilterDiv = styled.div`
display: flex;
/* justify-content: space-between; */
align-items: center;
margin-left: 50px;
`;

export const FilterTitle = styled.h2`
margin-left: 50px;
`;