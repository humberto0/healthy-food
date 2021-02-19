import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  min-height: 52px;
  margin-top: 15px;

  p {
    font-weight: 700;
    color: #badc58;
    font-size: 32px;
    margin-right: 25%;
    margin-left: 5%;
  }

  a {
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 150px;
    padding: 10px 5px;
    border-radius: 5px;
    color: #f4ede8;
    font-weight: 400;
    text-align: center;
    font-size: 16px;
    transition: background-color 0.3s;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #badc58;
      background: #f4ede8;
    }
  }

  @media (max-width: 1050px) {
    a {
      display: none;
      background: none;
    }
  }
  @media (max-width: 300px) {
    min-height: 0;
    margin-top: 0;
    padding: 0 0;
    img {
      height: 40px;
    }
  }
`;
export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: rgba(0, 0, 3, 0.85);
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  a {
    padding: 0 2rem;
    font-weight: 700;
    text-align: start;
    font-size: 20.5px;
    background: transparent;
    width: 100%;
    color: #f1eded;
    text-decoration: none;
    cursor: pointer;
    & + a {
      margin-top: 16px;
    }
    &:hover {
      color: #ff9000;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledLink = styled.a``;
