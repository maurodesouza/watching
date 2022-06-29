import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.bg};
    padding: ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid: 'title close' / 1fr 3rem;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    grid-area: title;
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  grid-area: close;
  cursor: pointer;

  * {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;
