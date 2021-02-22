import styled, { keyframes } from 'styled-components';
import img1 from '../../assets/Illustration.svg';
import img2 from '../../assets/bloco_services.svg';
import img3 from '../../assets/bloco_final_image.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  margin-left: 22%;
  @media (max-width: 608px) {
    margin-left: 15%;
  }
  @media (max-width: 470px) {
    margin-left: 20%;
  }
  @media (max-width: 350px) {
    margin-left: 20%;
  }
  @media (max-width: 307px) {
    margin-left: 40%;
  }
  @media (max-width: 225px) {
    margin-left: 50%;
  }
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
    &.pag5 {
      font-size: 32px;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 38px;
      &.pag5 {
        font-size: 30px;
      }
    }
  }
  @media (max-width: 413px) {
    h1 {
      font-size: 30px;
      &.pag5 {
        font-size: 30px;
      }
    }
  }
  @media (max-width: 369px) {
    h1 {
      font-size: 24px;
      &.pag5 {
        font-size: 24px;
      }
    }
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
  background: url(${img1}) no-repeat;
  background-size: cover;
  &.pag5 {
    background: url(${img3}) no-repeat;
    background-size: cover;
  }
`;
export const Pag2 = styled.div`
  height: 100vh;
  background: #fafafc no-repeat center;
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
  @media (max-width: 1100px) {
    height: 110vh;
  }
  @media (max-width: 989px) {
    height: 190vh;
  }
  @media (max-width: 650px) {
    height: 190vh;
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 14px;
    }
  }
  @media (max-width: 550px) {
    height: 140vh;
  }
  @media (max-width: 413px) {
    height: 120vh;
  }
  @media (max-width: 380px) {
    width: 130%;
  }
  @media (max-width: 330px) {
    width: 140%;
  }
  @media (max-width: 270px) {
    width: 160%;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 15px;
    background-color: #fff;
    border-radius: 5px;
    width: 530px;
    height: 210px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
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
  @media (max-width: 989px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
      margin-left: 0;
    }
  }
  @media (max-width: 550px) {
    form {
      height: 140px;
      width: 400px;
    }
  }
  @media (max-width: 413px) {
    form {
      height: 100px;
      width: 70%;
    }
    div {
      strong {
        font-size: 90%;
        margin-bottom: 5px;
        max-width: 60%;
      }
    }
  }
`;
export const Pag3 = styled.div`
  height: 100vh;
  background: url(${img2}) no-repeat;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-left: 40%;
    div {
      display: flex;
      justify-content: right;
      flex-direction: column;
      h1 {
        padding: 150px 0 0 0;
        display: flex;
        text-align: left;
        font-size: 32px;
        width: 410px;
        font-weight: 700;
        color: #1d164d;
        margin-bottom: 10px;
      }

      h2 {
        padding: 20px 0 0 0;
        display: flex;
        text-align: left;
        font-size: 14px;
        width: 400px;
        font-weight: 400;
        color: #c3c1ce;
        margin-bottom: 5px;
      }
    }
  }
  @media (max-width: 1100px) {
    form {
      padding-left: 44%;
    }
  }
  @media (max-width: 1000px) {
    form {
      padding-left: 47%;
    }
  }
  @media (max-width: 975px) {
    background: #ffffff no-repeat;
    form {
      padding-left: 10%;
      div {
        h1 {
          max-width: 410px;
          width: 90%;
          font-weight: 400;
          font-size: 25px;
        }

        h2 {
          font-size: 14px;
          max-width: 400px;
          font-weight: 400;
          width: 90%;
        }
      }
    }
  }
  @media (max-width: 380px) {
    width: 130%;
  }
  @media (max-width: 330px) {
    width: 140%;
  }
  @media (max-width: 270px) {
    width: 160%;
  }
`;
export const Pag4 = styled.div`
  height: 100vh;
  background: #fafafc no-repeat;
  overflow-x: scroll;
  white-space: break-spaces;
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
  @media (max-width: 1100px) {
    height: 110vh;
  }
  @media (max-width: 989px) {
    height: 150vh;
  }
  @media (max-width: 650px) {
    height: 150vh;
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 14px;
    }
  }
  @media (max-width: 550px) {
    height: 140vh;
  }
  @media (max-width: 413px) {
    height: 120vh;
  }
  @media (max-width: 380px) {
    width: 130%;
  }
  @media (max-width: 330px) {
    width: 140%;
  }
  @media (max-width: 270px) {
    width: 160%;
  }
`;
export const Box2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 15px;
    background-color: #fff;
    border-radius: 5px;
    width: 340px;
    height: 420px;
    justify-content: left;
    text-decoration: none;
    &.first {
      margin-left: 200px;
    }
  }

  img {
    width: 100%;
  }

  div {
    display: flex;
    justify-content: left;
    flex-direction: column;
    margin-left: 20px;
    padding-top: 25px;
    width: 340px;

    strong {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: 700;
      color: #1d164d;
    }

    nav {
      display: flex;
      justify-content: right;
      align-items: center;
      img {
        margin-top: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      h3 {
        font-size: 16px;
        font-weight: 400;
        color: #c3c1ce;
        margin-left: 10px;
      }
    }
  }
  @media (max-width: 989px) {
    display: flex;
    align-items: center;
    form {
      &.first {
        margin-left: 1000px;
      }
    }
  }
  @media (max-width: 550px) {
    main {
      height: 140px;
      width: 400px;
    }
  }
  @media (max-width: 413px) {
    form {
      height: 100px;
      width: 70%;
    }
    div {
      strong {
        font-size: 90%;
        margin-bottom: 5px;
        max-width: 60%;
      }
    }
  }
`;
export const Footer = styled.footer`
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h3 {
    font-size: 16px;
    text-align: start;
    font-weight: 400;
    color: #1d164d;
    margin-left: 10%;
  }
  div {
    a {
      margin-left: 10px;
      font-size: 16px;
      text-align: start;
      font-weight: 400;
      color: #c3c1ce;
      text-decoration: none;
    }
  }
  @media (max-width: 327px) {
    height: 20vh;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: column;
      margin-left: 10%;
      a {
        margin-left: 0;
      }
    }
  }
`;
