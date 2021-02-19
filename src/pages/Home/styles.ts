import styled, { keyframes } from 'styled-components';
import sol from '../../assets/Illustration.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  margin-left: 22%;
`;

export const Pag1 = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 535px;
  align-items: center;
  h1 {
    max-width: 500px;
    color: #1d164d;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
export const Pesquisa = styled.div`
  display: flex;
`;
const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
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
  animation: ${appearFromLeft} 1s;
`;
export const Background = styled.div`
  flex: 1;
  background: url(${sol}) no-repeat center;
  background-size: cover;
`;
export const Pag2 = styled.div`
  height: 80vh;
  background: #fafafc;
  background-size: cover;
  h1 {
    padding: 30px 0 0 0;
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;
    color: #1d164d;
    margin-bottom: 10px;
  }
  h2 {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #c3c1ce;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  form {
    margin-top: 20px;
    margin-left: 20px;
    background-color: #fff;
    border-radius: 5px;
    width: 450px;
    height: 180px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + & {
      margin-top: 16px;
    }

    display: flex;
    align-items: center;
  }
  img {
    height: 100%;
  }

  div {
    justify-content: right;
    margin-left: 25px;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 24px;
      font-weight: 700;
      color: #1d164d;
      width: 200px;
    }
  }
`;
