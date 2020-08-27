import styled from 'styled-components'

const primary = '#ddd';
const secondary = '#a8a8a8';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
padding: 1rem;
`;

export const Divider = styled.hr`
width:75%;
border-color: rgba(0,0,0,0.3);
height: 1px;
background-color: rgba(0,0,0,0.3);
border-radius: 1px;
`;

export const Input = {
  Container: styled.div`
  padding: 0.75rem;
  position: relative;
  `,

  Field: styled.input`
  height:30px;
  border: 2px solid rgba(0,0,0,0.2);
  border-radius:14px;
  padding: 0 0.75rem;
  margin:0 0.75rem;
  font-size: 14px;
  color:rgba(0,0,0,0.75)
  `,

  Text: styled.span`
  font-size: 10px;
  position: absolute;
  top: 8px;
  left: 35px;
  background-color: white;
  padding: 3px 5px;
  color: rgba(0,0,0,0.75);
  `
};

export const ActionButton = styled.button`
border: none;
padding: 0.5rem 1.25rem;
margin: 0.5rem;
border-radius: 15px;
cursor: pointer;
background-color: ${primary};
transition: 0.3s;

&:hover{
background-color: ${secondary};
box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
color: white;
}
`;


