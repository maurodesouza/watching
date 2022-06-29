import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;

  & + & {
    justify-content: end;
  }

  * {
    cursor: pointer;
  }
`;
