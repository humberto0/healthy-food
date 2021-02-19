import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #badc58;
  max-height: 50px;
  border-radius: 5px;
  border: 0;
  padding: 16px;
  color: #fff;
  font-weight: 400;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  &:hover {
    background: ${shade(0.2, '#badc58')};
  }
  svg {
    color: #fff;
  }
`;
