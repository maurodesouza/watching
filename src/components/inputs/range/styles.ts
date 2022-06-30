import styled, { css } from 'styled-components';

type ContainerProps = {
  percentage: number;
};

export const Container = styled.input<ContainerProps>`
  ${({ theme, percentage }) => {
    return css`
      -webkit-appearance: none;
      cursor: grab;
      border-radius: 1rem;
      width: 100%;
      height: 1rem;
      background-size: ${percentage}% 100%;
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
    `;
  }}
`;
