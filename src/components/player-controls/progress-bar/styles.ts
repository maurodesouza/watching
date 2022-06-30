import styled from 'styled-components';
import { RangeInput } from 'components';

export const Container = styled.div``;

export const Progress = styled(RangeInput)`
  height: 6px;
  cursor: pointer;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;

  &:active {
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    opacity: 0;
  }
`;
