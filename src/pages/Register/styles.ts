import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import image_1 from '../../assets/bloco_final_image.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 700px;
  align-items: center;
`;
const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin-top: 80px;
    width: 340px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    color: #1d164d;
    margin-bottom: 24px;
  }

  > a {
    color: #1d164d;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    margin-top: 10px;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#1d164d')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${image_1}) no-repeat center;
  background-size: cover;
`;
