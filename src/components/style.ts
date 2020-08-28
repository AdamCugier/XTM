import styled from 'styled-components'

const primary = '#ddd';

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
  color: rgba(0,0,0,0.75);
  transition: 0.3s;
  
  &:focus{
  border-color: #5fa9ef;
  outline: none;
  }
  `,

  Text: styled.span`
  font-size: 10px;
  position: absolute;
  top: 8px;
  left: 33px;
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
background-color: ${primary};
transition: 0.3s;

&:hover:not([disabled]){
background-color: #5fa9ef;
cursor: pointer;
box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
color: white;
}

&:focus{
outline: none;
}
`;

export const List = {
  Container: styled.ul`
  max-width:700px;
  `,
  H1: styled.h1`
  font-size:18px;
  `,
  Item: styled.li`
  margin-bottom: 3rem;
  list-style: none;
  `,
  Title: styled.p`
  font-size: 16px;
  font-weight: 900;
  `,
  Snippet: styled.span`
  font-size: 14px;
  `,
};


