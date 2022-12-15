import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const Overlay = styled.div`
background-color: #1e2129;
  z-index: 300;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 50px; */
  
`;

export const Modal =styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;
padding: 15px;
height: 50%;
  width: 50%;
  background-color: #bbd;
  border: 3px solid red;
  border-radius: 10px;
`;

export const EditForm = styled.div`
margin: 5px;
 height: 100%;
  width: 100%;
`;

export const ModalButton = styled.button`
display: inline-flex;
  align-items: center;
  /* justify-content: center; */
  /* margin-bottom: 20px; */
  /* margin-right: auto; */
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

export const ModalTitle =styled.p`
font-weight: 700;
  font-size: 24px;
  line-height: 1, 875;
`;
// export const Link = styled(NavLink)`
//   margin: 5px 40px 5px 0;
//   padding: 8px 8px;
//   border: 2px solid #fff;
//   border-radius: 4px;
//   text-decoration: none;
//   color: white;
//   font-size: 24px;
//   font-weight: 500;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   &.active {
//     color: white;
//     background-color: orangered;
//   }

//   :hover {
//     transform: scale(1.03);
//   }
// `;
