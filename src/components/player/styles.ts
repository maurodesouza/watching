import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 80rem;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    pointer-events: none;
    width: 100%;
    padding-top: 56.25%;
    border-radius: ${theme.border.radius};
    overflow: hidden;
  `}
`;

export const VideoWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;
