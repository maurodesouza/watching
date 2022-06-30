import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
    align-items: center;

    input {
      max-width: 12rem;
    }
  `}
`;
