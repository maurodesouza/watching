import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    justify-content: end;
  }

  * {
    cursor: pointer;
  }
`;
