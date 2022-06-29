import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
    align-items: center;
  `}
`;

export const Range = styled.input.attrs(() => ({
  type: 'range',
}))`
  ${({ theme }) => css`
    -webkit-appearance: none;
    cursor: grab;
    border-radius: 1rem;
    width: 100%;
    height: 1rem;
    max-width: 12rem;
    background-size: 70% 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      ${theme.colors.tertiary},
      ${theme.colors.tertiary}
    );

    &:active {
      cursor: grabbing;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 2.4rem;
      width: 2.4rem;
      border-radius: 50%;
      background: ${theme.colors.tertiary};
    }
  `}
`;
