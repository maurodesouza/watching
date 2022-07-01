import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};

    span {
      color: ${theme.colors.tertiary};
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    margin-bottom: calc(${theme.spacings.medium} * 2);
  `}
`;
