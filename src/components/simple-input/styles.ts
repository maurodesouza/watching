import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.span`
  ${({ theme }) => css`
    display: block;
    text-align: left;
    font-weight: ${theme.font.weights.bold};
    margin-bottom: ${theme.spacings.xsmall};
    width: 100%;
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    display: block;
    text-align: left;
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`;
