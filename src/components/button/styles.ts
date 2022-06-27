import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xlarge};
    background: ${theme.colors.tertiary};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weights.bold};
    transition: 0.3s;
    color: #fff;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
